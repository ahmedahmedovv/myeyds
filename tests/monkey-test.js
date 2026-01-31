/**
 * ═══════════════════════════════════════════════════════════════════════════════
 * THE MONKEY TEST - UI RANDOMIZATION SCRIPT
 * ═══════════════════════════════════════════════════════════════════════════════
 * 
 * This script randomly fires events at the UI to ensure state consistency.
 * Run in browser console on the application page.
 * 
 * Usage:
 *   1. Open the app in browser
 *   2. Open DevTools console
 *   3. Copy/paste this script
 *   4. Run: startMonkeyTest(1000) // fire 1000 random events
 *   5. Watch for errors in console
 */

class MonkeyTester {
    constructor() {
        this.eventsFired = 0;
        this.errors = [];
        this.isRunning = false;
        this.startTime = null;
        
        // Possible monkey actions
        this.actions = [
            { name: 'clickStart', weight: 10, fn: () => this.clickStart() },
            { name: 'clickBack', weight: 10, fn: () => this.clickBack() },
            { name: 'clickOption', weight: 25, fn: () => this.clickOption() },
            { name: 'clickNext', weight: 20, fn: () => this.clickNext() },
            { name: 'pressKey', weight: 20, fn: () => this.pressKey() },
            { name: 'clickRetry', weight: 5, fn: () => this.clickRetry() },
            { name: 'resizeWindow', weight: 5, fn: () => this.resizeWindow() },
            { name: 'scrollRandom', weight: 5, fn: () => this.scrollRandom() }
        ];
        
        // Track state for consistency checks
        this.stateHistory = [];
    }
    
    log(message, type = 'info') {
        const timestamp = new Date().toISOString().split('T')[1].split('.')[0];
        const prefix = `[${timestamp}] 🐒 MONKEY:`;
        
        if (type === 'error') {
            console.error(prefix, message);
            this.errors.push({ time: Date.now(), message });
        } else if (type === 'warn') {
            console.warn(prefix, message);
        } else {
            console.log(prefix, message);
        }
    }
    
    // Get weighted random action
    getRandomAction() {
        const totalWeight = this.actions.reduce((sum, a) => sum + a.weight, 0);
        let random = Math.random() * totalWeight;
        
        for (const action of this.actions) {
            random -= action.weight;
            if (random <= 0) return action;
        }
        return this.actions[0];
    }
    
    // Action: Click Start button
    clickStart() {
        const btn = document.getElementById('btnStart');
        if (btn && !btn.disabled) {
            this.log('Clicking Start button');
            btn.click();
            return true;
        }
        return false;
    }
    
    // Action: Click Back button
    clickBack() {
        const btn = document.getElementById('btnBack');
        if (btn) {
            this.log('Clicking Back button');
            btn.click();
            return true;
        }
        return false;
    }
    
    // Action: Click an option
    clickOption() {
        const options = document.querySelectorAll('.option:not(:disabled)');
        if (options.length > 0) {
            const idx = Math.floor(Math.random() * options.length);
            this.log(`Clicking option ${idx + 1}/${options.length}`);
            options[idx].click();
            return true;
        }
        return false;
    }
    
    // Action: Click Next button
    clickNext() {
        const btn = document.getElementById('btnNext');
        if (btn && !btn.classList.contains('hidden')) {
            this.log('Clicking Next button');
            btn.click();
            return true;
        }
        return false;
    }
    
    // Action: Click Retry button
    clickRetry() {
        const btn = document.getElementById('btnRetry');
        if (btn && !btn.classList.contains('hidden')) {
            this.log('Clicking Retry button');
            btn.click();
            return true;
        }
        return false;
    }
    
    // Action: Press random key
    pressKey() {
        const keys = ['1', '2', '3', '4', '5', 'a', 'b', 'c', 'd', 'e', 'Enter', 'Escape'];
        const key = keys[Math.floor(Math.random() * keys.length)];
        this.log(`Pressing key: ${key}`);
        
        const event = new KeyboardEvent('keydown', {
            key: key,
            bubbles: true,
            cancelable: true
        });
        document.dispatchEvent(event);
        return true;
    }
    
    // Action: Resize window
    resizeWindow() {
        const widths = [320, 375, 414, 768, 1024, 1440];
        const width = widths[Math.floor(Math.random() * widths.length)];
        this.log(`Resizing window to ${width}px`);
        
        // Note: Can't actually resize, but trigger resize event
        window.dispatchEvent(new Event('resize'));
        return true;
    }
    
    // Action: Random scroll
    scrollRandom() {
        const scrollY = Math.random() * document.body.scrollHeight;
        this.log(`Scrolling to ${Math.round(scrollY)}px`);
        window.scrollTo({ top: scrollY, behavior: 'smooth' });
        return true;
    }
    
    // Record state for consistency checking
    recordState() {
        const state = {
            time: Date.now(),
            eventsFired: this.eventsFired,
            welcomeVisible: document.getElementById('welcomePage')?.classList.contains('active'),
            appVisible: document.getElementById('appPage')?.classList.contains('active'),
            loadingVisible: !document.getElementById('loading')?.classList.contains('hidden'),
            errorVisible: !document.getElementById('errorState')?.classList.contains('hidden'),
            optionCount: document.querySelectorAll('.option').length,
            scoreText: document.getElementById('score')?.textContent
        };
        
        this.stateHistory.push(state);
        
        // Keep only last 100 states
        if (this.stateHistory.length > 100) {
            this.stateHistory.shift();
        }
        
        return state;
    }
    
    // Check state consistency
    checkConsistency() {
        const current = this.recordState();
        const issues = [];
        
        // Check 1: Both pages can't be visible at once
        if (current.welcomeVisible && current.appVisible) {
            issues.push('Both welcome and app pages are visible!');
        }
        
        // Check 2: Neither page visible is also bad
        if (!current.welcomeVisible && !current.appVisible) {
            issues.push('No page is visible!');
        }
        
        // Check 3: Score should be valid format
        if (current.scoreText && !current.scoreText.match(/^\d+ \/ \d+$/)) {
            issues.push(`Invalid score format: ${current.scoreText}`);
        }
        
        // Check 4: Shouldn't have more than 5 options
        if (current.optionCount > 5) {
            issues.push(`Too many options: ${current.optionCount}`);
        }
        
        if (issues.length > 0) {
            issues.forEach(issue => this.log(issue, 'error'));
        }
        
        return issues.length === 0;
    }
    
    // Execute one random action
    async executeRandomAction() {
        const action = this.getRandomAction();
        
        try {
            const result = await action.fn();
            this.eventsFired++;
            
            // Small delay to let UI update
            await new Promise(r => setTimeout(r, 50));
            
            // Check consistency after action
            this.checkConsistency();
            
            return result;
        } catch (error) {
            this.log(`Error in ${action.name}: ${error.message}`, 'error');
            return false;
        }
    }
    
    // Run the monkey test
    async run(iterations = 100, delay = 100) {
        if (this.isRunning) {
            console.warn('Monkey test already running!');
            return;
        }
        
        this.isRunning = true;
        this.startTime = Date.now();
        this.eventsFired = 0;
        this.errors = [];
        this.stateHistory = [];
        
        this.log(`Starting monkey test: ${iterations} events, ${delay}ms delay`);
        this.log('Press Ctrl+C to stop early');
        
        // Set up error tracking
        const originalError = console.error;
        const capturedErrors = [];
        console.error = (...args) => {
            capturedErrors.push(args.join(' '));
            originalError.apply(console, args);
        };
        
        for (let i = 0; i < iterations && this.isRunning; i++) {
            if (i % 10 === 0) {
                this.log(`Progress: ${i}/${iterations} events`);
            }
            
            await this.executeRandomAction();
            
            if (delay > 0) {
                await new Promise(r => setTimeout(r, delay));
            }
        }
        
        // Restore console.error
        console.error = originalError;
        
        this.stop();
        
        // Report
        const duration = ((Date.now() - this.startTime) / 1000).toFixed(1);
        this.log('═══════════════════════════════════════');
        this.log('MONKEY TEST COMPLETE');
        this.log('═══════════════════════════════════════');
        this.log(`Duration: ${duration}s`);
        this.log(`Events fired: ${this.eventsFired}`);
        this.log(`Errors found: ${this.errors.length + capturedErrors.length}`);
        
        if (this.errors.length > 0) {
            this.log('\nDetailed errors:', 'error');
            this.errors.forEach((e, i) => {
                this.log(`  ${i + 1}. ${e.message}`, 'error');
            });
        }
        
        if (capturedErrors.length > 0) {
            this.log('\nConsole errors captured:', 'error');
            capturedErrors.slice(0, 10).forEach((e, i) => {
                this.log(`  ${i + 1}. ${e}`, 'error');
            });
        }
        
        return {
            success: this.errors.length === 0 && capturedErrors.length === 0,
            eventsFired: this.eventsFired,
            errors: [...this.errors, ...capturedErrors],
            duration: parseFloat(duration)
        };
    }
    
    stop() {
        this.isRunning = false;
    }
}

// Global instance
const monkey = new MonkeyTester();

// Convenience functions
function startMonkeyTest(iterations = 100, delay = 100) {
    return monkey.run(iterations, delay);
}

function stopMonkeyTest() {
    monkey.stop();
    console.log('Monkey test stopped');
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { MonkeyTester, startMonkeyTest, stopMonkeyTest };
}

console.log('🐒 Monkey Test loaded!');
console.log('Usage: startMonkeyTest(100)  // Run 100 random events');
console.log('       stopMonkeyTest()       // Stop the test');
