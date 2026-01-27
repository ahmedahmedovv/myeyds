// App State
const AppState = {
    SETUP: 'SETUP',
    LOADING: 'LOADING',
    EXAM: 'EXAM',
    RESULTS: 'RESULTS'
};

const QuestionCategory = {
    VOCABULARY: 'Vocabulary',
    GRAMMAR: 'Grammar',
    MIXED: 'Mixed'
};

const Difficulty = {
    INTERMEDIATE: 'Intermediate',
    ADVANCED: 'Advanced',
    PROFICIENCY: 'Proficiency (C2)'
};

// App Object
const app = {
    state: AppState.SETUP,
    config: {
        difficulty: Difficulty.ADVANCED,
        topic: 'General Science',
        category: QuestionCategory.MIXED
    },
    questions: [],
    responses: [],
    currentQuestion: null,
    prefetchedQuestion: null,
    isFeedbackMode: false,
    selectedOptionIndex: null,
    isFetchingNext: false,

    // Initialize
    init() {
        this.bindEvents();
    },

    // Bind Events
    bindEvents() {
        // Category buttons
        document.querySelectorAll('#category-buttons .option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('#category-buttons .option-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.config.category = e.target.dataset.value;
            });
        });

        // Selects
        document.getElementById('difficulty-select').addEventListener('change', (e) => {
            this.config.difficulty = e.target.value;
        });

        document.getElementById('topic-select').addEventListener('change', (e) => {
            this.config.topic = e.target.value;
        });
    },

    // Start Exam
    async startExam() {
        this.setState(AppState.LOADING);
        this.clearError();
        
        // Reset state
        this.questions = [];
        this.responses = [];
        this.currentQuestion = null;
        this.prefetchedQuestion = null;
        this.isFeedbackMode = false;
        this.selectedOptionIndex = null;

        try {
            // Generate first question
            this.currentQuestion = await mistralService.generateSingleQuestion(this.config, 0);
            this.questions.push(this.currentQuestion);
            
            this.setState(AppState.EXAM);
            this.renderQuestion();
            
            // Prefetch next question in background
            this.prefetchNextQuestion();
        } catch (err) {
            this.showError(err.message || "Failed to generate question. Check your API key or connection.");
            this.setState(AppState.SETUP);
        }
    },

    // Prefetch next question in background
    async prefetchNextQuestion() {
        if (this.isFetchingNext || this.prefetchedQuestion) return;
        
        this.isFetchingNext = true;
        try {
            this.prefetchedQuestion = await mistralService.generateSingleQuestion(
                this.config, 
                this.questions.length
            );
        } catch (err) {
            console.error("Failed to prefetch next question:", err);
            this.prefetchedQuestion = null;
        } finally {
            this.isFetchingNext = false;
        }
    },

    // Handle Answer
    handleAnswer(selectedIndex) {
        const isCorrect = selectedIndex === this.currentQuestion.correctIndex;

        this.responses.push({
            questionId: this.currentQuestion.id,
            selectedIndex,
            isCorrect
        });

        this.selectedOptionIndex = selectedIndex;
        this.isFeedbackMode = true;
        this.renderQuestion();
        this.updateProgress();
        
        // Ensure we're prefetching next question (in case it failed before)
        if (!this.prefetchedQuestion && !this.isFetchingNext) {
            this.prefetchNextQuestion();
        }
    },

    // Go to Next Question
    async goToNextQuestion() {
        this.isFeedbackMode = false;
        this.selectedOptionIndex = null;

        // If we have a prefetched question, use it
        if (this.prefetchedQuestion) {
            this.currentQuestion = this.prefetchedQuestion;
            this.questions.push(this.currentQuestion);
            this.prefetchedQuestion = null;
            this.renderQuestion();
            this.updateProgress();
            
            // Prefetch the next one
            this.prefetchNextQuestion();
        } else {
            // Show loading and wait for new question
            this.setState(AppState.LOADING);
            try {
                this.currentQuestion = await mistralService.generateSingleQuestion(
                    this.config, 
                    this.questions.length
                );
                this.questions.push(this.currentQuestion);
                this.setState(AppState.EXAM);
                this.renderQuestion();
                this.updateProgress();
                
                // Prefetch next
                this.prefetchNextQuestion();
            } catch (err) {
                this.showError(err.message || "Failed to generate next question.");
                // Go back to showing the last question
                this.setState(AppState.EXAM);
                this.isFeedbackMode = true;
                this.renderQuestion();
            }
        }
    },

    // Finish Exam
    finishExam() {
        if (this.responses.length === 0) {
            // If no questions answered yet, just go back to setup
            this.restart();
            return;
        }
        this.setState(AppState.RESULTS);
        this.renderResults();
    },

    // Restart
    restart() {
        this.setState(AppState.SETUP);
        this.questions = [];
        this.responses = [];
        this.currentQuestion = null;
        this.prefetchedQuestion = null;
        this.isFeedbackMode = false;
        this.selectedOptionIndex = null;
        this.isFetchingNext = false;
    },

    // Set State
    setState(newState) {
        this.state = newState;
        
        // Hide all screens
        document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
        document.getElementById('navbar-progress').classList.add('hidden');
        document.getElementById('finish-btn').classList.add('hidden');

        // Show current screen
        switch(newState) {
            case AppState.SETUP:
                document.getElementById('setup-screen').classList.remove('hidden');
                break;
            case AppState.LOADING:
                document.getElementById('loading-screen').classList.remove('hidden');
                break;
            case AppState.EXAM:
                document.getElementById('exam-screen').classList.remove('hidden');
                document.getElementById('navbar-progress').classList.remove('hidden');
                document.getElementById('finish-btn').classList.remove('hidden');
                this.updateProgress();
                break;
            case AppState.RESULTS:
                document.getElementById('results-screen').classList.remove('hidden');
                break;
        }
    },

    // Update Progress
    updateProgress() {
        const currentNum = this.questions.length;
        const score = this.responses.filter(r => r.isCorrect).length;
        
        document.getElementById('question-number').textContent = `Question ${currentNum}`;
        document.getElementById('score-display').textContent = `Score: ${score}/${this.responses.length}`;
        
        // Progress bar (just for visual, based on current session)
        const progress = this.isFeedbackMode ? 100 : 50;
        document.getElementById('progress-fill').style.width = `${progress}%`;
    },

    // Render Question
    renderQuestion() {
        if (!this.currentQuestion) return;
        
        const question = this.currentQuestion;
        
        // Header
        document.getElementById('academic-context').textContent = question.academicContext;
        const categoryTag = document.getElementById('category-tag');
        categoryTag.textContent = question.category;
        categoryTag.className = `tag tag-${question.category.toLowerCase()}`;

        // Sentence with blank
        const sentenceEl = document.getElementById('question-sentence');
        const parts = question.sentence.split('_____');
        let sentenceHTML = '"';
        parts.forEach((part, i) => {
            sentenceHTML += part;
            if (i < parts.length - 1) {
                const blankContent = this.isFeedbackMode ? question.options[question.correctIndex] : '';
                const blankClass = this.isFeedbackMode ? 'blank blank-filled' : 'blank';
                sentenceHTML += `<span class="${blankClass}">${blankContent}</span>`;
            }
        });
        sentenceHTML += '"';
        sentenceEl.innerHTML = sentenceHTML;

        // Options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const isCorrect = index === question.correctIndex;
            const isUserSelection = index === this.selectedOptionIndex;

            const btn = document.createElement('button');
            btn.className = 'option-card';
            btn.disabled = this.isFeedbackMode;

            // Determine styling
            if (this.isFeedbackMode) {
                if (isCorrect) {
                    btn.classList.add('correct');
                } else if (isUserSelection && !isCorrect) {
                    btn.classList.add('incorrect');
                } else {
                    btn.classList.add('disabled');
                }
            }

            // Icon
            const iconDiv = document.createElement('div');
            iconDiv.className = 'option-icon';

            if (this.isFeedbackMode && isCorrect) {
                iconDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="check-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" /></svg>`;
            } else if (this.isFeedbackMode && isUserSelection && !isCorrect) {
                iconDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="x-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>`;
            } else {
                iconDiv.textContent = String.fromCharCode(65 + index);
            }

            // Text
            const textSpan = document.createElement('span');
            textSpan.className = 'option-text';
            textSpan.textContent = option;

            btn.appendChild(iconDiv);
            btn.appendChild(textSpan);

            if (!this.isFeedbackMode) {
                btn.addEventListener('click', () => this.handleAnswer(index));
            }

            optionsContainer.appendChild(btn);
        });

        // Feedback Section
        const feedbackSection = document.getElementById('feedback-section');
        if (this.isFeedbackMode) {
            feedbackSection.classList.remove('hidden');
            const isCorrect = this.selectedOptionIndex === question.correctIndex;
            
            const feedbackBox = document.getElementById('feedback-box');
            feedbackBox.className = `feedback-box ${isCorrect ? 'correct' : 'incorrect'}`;

            const feedbackIcon = document.getElementById('feedback-icon');
            feedbackIcon.innerHTML = isCorrect 
                ? `<svg xmlns="http://www.w3.org/2000/svg" class="feedback-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>`
                : `<svg xmlns="http://www.w3.org/2000/svg" class="feedback-icon" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" /></svg>`;

            document.getElementById('feedback-title').textContent = isCorrect ? 'Correct!' : 'Incorrect';
            document.getElementById('feedback-explanation').textContent = question.explanation;
            
            // Update next button text based on prefetch status
            const nextBtnText = document.getElementById('next-btn-text');
            if (this.prefetchedQuestion) {
                nextBtnText.textContent = 'Next Question (Ready)';
            } else {
                nextBtnText.textContent = 'Next Question';
            }
        } else {
            feedbackSection.classList.add('hidden');
        }
    },

    // Render Results
    renderResults() {
        const score = this.responses.filter(r => r.isCorrect).length;
        const total = this.responses.length;
        const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

        // Score message
        let message;
        if (percentage === 100) message = "Academic Excellence! Perfection.";
        else if (percentage >= 80) message = "Impressive mastery of academic English.";
        else if (percentage >= 60) message = "Solid performance, keep practicing!";
        else message = "Keep learning, academic English is challenging.";

        document.getElementById('score-message').textContent = message;
        document.getElementById('score-fraction').textContent = `${score}/${total}`;
        document.getElementById('score-percentage').textContent = `${percentage}%`;
        document.getElementById('total-questions').textContent = `You answered ${total} questions`;

        // Animate progress circle
        setTimeout(() => {
            const offset = 364 - (364 * percentage) / 100;
            document.getElementById('score-progress').style.strokeDashoffset = offset;
        }, 100);

        // Review section
        const reviewContainer = document.getElementById('review-container');
        reviewContainer.innerHTML = '';

        this.questions.forEach((q, idx) => {
            const response = this.responses.find(r => r.questionId === q.id);
            if (!response) return; // Skip unanswered questions
            
            const isCorrect = response.isCorrect;

            const item = document.createElement('div');
            item.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

            const header = document.createElement('div');
            header.className = 'review-header';

            const number = document.createElement('span');
            number.className = 'review-number';
            number.textContent = `Question ${idx + 1}`;

            const badge = document.createElement('span');
            badge.className = `review-badge ${isCorrect ? 'correct' : 'incorrect'}`;
            badge.innerHTML = isCorrect
                ? `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>Correct`
                : `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" /></svg>Incorrect`;

            header.appendChild(number);
            header.appendChild(badge);

            const sentence = document.createElement('p');
            sentence.className = 'review-sentence';
            sentence.textContent = `"${q.sentence.replace('_____', q.options[q.correctIndex])}"`;

            item.appendChild(header);
            item.appendChild(sentence);

            // Wrong answer
            if (!isCorrect) {
                const wrongDiv = document.createElement('div');
                wrongDiv.className = 'review-wrong-answer';
                wrongDiv.innerHTML = `<span class="label">Your answer:</span><span class="answer">${q.options[response.selectedIndex]}</span>`;
                item.appendChild(wrongDiv);
            }

            // Explanation
            const explanation = document.createElement('div');
            explanation.className = 'review-explanation';
            explanation.innerHTML = `<span class="label">Analysis:</span>${q.explanation}`;

            item.appendChild(explanation);
            reviewContainer.appendChild(item);
        });
    },

    // Show Error
    showError(message) {
        document.getElementById('error-message').textContent = message;
        document.getElementById('error-banner').classList.remove('hidden');
    },

    // Clear Error
    clearError() {
        document.getElementById('error-banner').classList.add('hidden');
    }
};

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
