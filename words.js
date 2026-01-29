// ═══════════════════════════════════════════════════════════════
// WORD LISTS - Expanded Edition (100+ per category)
// ═══════════════════════════════════════════════════════════════

const WORDS = {

    // ─────────────────────────────────────────────────────────────
    // VOCABULARY
    // ─────────────────────────────────────────────────────────────

    verbs: [
        'analyze', 'assess', 'assume', 'conclude', 'constitute', 'derive', 'establish', 'evaluate', 'facilitate', 'generate',
        'identify', 'illustrate', 'indicate', 'interpret', 'obtain', 'occur', 'perceive', 'proceed', 'require', 'vary',
        'advocate', 'amplify', 'articulate', 'ascertain', 'attribute', 'augment', 'bolster', 'clarify', 'collaborate', 'compel',
        'comprise', 'concede', 'conducive', 'confront', 'conjecture', 'consolidate', 'constrain', 'contradict', 'corroborate', 'critique',
        'deduce', 'delineate', 'demonstrate', 'denote', 'depict', 'differentiate', 'diffuse', 'disseminate', 'diverge', 'elucidate',
        'embody', 'emphasize', 'empower', 'encompass', 'engender', 'enhance', 'envisage', 'evoke', 'exacerbate', 'examine',
        'exemplify', 'exhibit', 'expedite', 'exploit', 'extrapolate', 'fabricate', 'fluctuate', 'formulate', 'foster', 'harness',
        'hinder', 'hypothesize', 'implement', 'imply', 'incorporate', 'induce', 'infer', 'inhibit', 'initiate', 'innovate',
        'integrate', 'intervene', 'investigate', 'justify', 'locate', 'manipulate', 'negate', 'obfuscate', 'obscure', 'optimize',
        'orchestrate', 'outline', 'overcome', 'penetrate', 'perpetuate', 'postulate', 'preclude', 'presuppose', 'proliferate', 'propagate',
        'quantify', 'ratify', 'reconcile', 'refine', 'refute', 'reiterate', 'replicate', 'scrutinize', 'stipulate', 'substantiate',
        'supersede', 'surmount', 'synthesize', 'transcend', 'validate', 'verify', 'vitiate', 'waive', 'yield', 'augment',
        // Additional 100 academic verbs
        'abate', 'abide', 'absolve', 'abstain', 'accede', 'accelerate', 'acclaim', 'accommodate', 'accord', 'accost',
        'accredit', 'accrue', 'accuse', 'ache', 'acknowledge', 'acquaint', 'acquiesce', 'acquit', 'actuate', 'adapt',
        'adhere', 'adjudicate', 'adjourn', 'adjust', 'administer', 'admire', 'admonish', 'adorn', 'adulterate', 'advance',
        'adventure', 'advertise', 'advise', 'affect', 'affiliate', 'affirm', 'afflict', 'afford', 'affront', 'aggravate',
        'aggregate', 'aggrieve', 'agitate', 'agonize', 'alarm', 'alert', 'alienate', 'align', 'allay', 'alleviate',
        'allocate', 'allot', 'allow', 'allude', 'alter', 'amalgamate', 'amass', 'amaze', 'ambush', 'amend',
        'amount', 'amplify', 'amuse', 'anesthetize', 'anger', 'animate', 'annex', 'annihilate', 'annotate', 'announce',
        'annoy', 'annul', 'anoint', 'answer', 'antagonize', 'anticipate', 'apologize', 'appall', 'appeal', 'appear',
        'appease', 'applaud', 'appoint', 'appraise', 'appreciate', 'apprehend', 'apprentice', 'apprise', 'appropriate', 'approve',
        'approximate', 'arbitrate', 'argue', 'arise', 'arouse', 'arraign', 'arrange', 'arrest', 'arrive', 'articulate'
    ],

    nouns: [
        'approach', 'aspect', 'concept', 'context', 'evidence', 'factor', 'hypothesis', 'implication', 'method', 'outcome',
        'phenomenon', 'principle', 'procedure', 'proportion', 'resource', 'response', 'significance', 'strategy', 'structure', 'theory',
        'abstraction', 'acquisition', 'adherence', 'advocacy', 'aggregate', 'allocation', 'ambiguity', 'analogy', 'anomaly', 'apparatus',
        'appendix', 'arbitration', 'assertion', 'assessment', 'assumption', 'autonomy', 'bias', 'capacity', 'categorization', 'causality',
        'citation', 'cohesion', 'collaboration', 'commodity', 'compatibility', 'complexity', 'component', 'concentration', 'concurrence', 'configuration',
        'conjecture', 'consensus', 'constraint', 'controversy', 'convergence', 'correlation', 'criterion', 'deficiency', 'demographics', 'deviation',
        'dialectic', 'dichotomy', 'diffusion', 'dimension', 'discourse', 'discrepancy', 'discretion', 'disparity', 'dissemination', 'distinction',
        'diversity', 'domain', 'dynamics', 'efficacy', 'element', 'empirical', 'entity', 'equilibrium', 'equivalence', 'ethics',
        'expansion', 'expertise', 'feasibility', 'fluctuation', 'framework', 'hierarchy', 'ideology', 'incidence', 'infrastructure', 'innovation',
        'instability', 'integration', 'integrity', 'interaction', 'interpretation', 'intervention', 'inventory', 'justification', 'liability', 'limitation',
        'magnitude', 'manifestation', 'mediation', 'metaphor', 'methodology', 'modality', 'modification', 'motivation', 'negation', 'norm',
        // Additional 100 academic nouns
        'abstraction', 'absurdity', 'abundance', 'academy', 'acceptance', 'access', 'accident', 'acclaim', 'accomplice', 'accomplishment',
        'accord', 'account', 'accountability', 'accreditation', 'accrual', 'accuracy', 'accusation', 'achievement', 'acid', 'acquaintance',
        'acquiescence', 'acquisition', 'acquittal', 'acre', 'acrimony', 'action', 'activation', 'actuality', 'actuary', 'acumen',
        'adaptation', 'addiction', 'addition', 'address', 'adeptness', 'adequacy', 'adherence', 'adjective', 'adjunct', 'adjustment',
        'administration', 'administrator', 'admiral', 'admiration', 'admissibility', 'admission', 'admittance', 'adobe', 'adolescence', 'adoption',
        'adoration', 'adornment', 'adrenaline', 'adulation', 'adultery', 'adulthood', 'advance', 'advancement', 'advantage', 'advent',
        'adventure', 'adversary', 'adversity', 'advertisement', 'advertising', 'advice', 'advocacy', 'aesthetics', 'affair', 'affect',
        'affection', 'affidavit', 'affiliate', 'affinity', 'affirmation', 'affluence', 'affordability', 'affront', 'aftermath', 'afternoon',
        'age', 'agency', 'agenda', 'agent', 'aggravation', 'aggregate', 'aggression', 'agony', 'agreement', 'agriculture',
        'ailment', 'aim', 'air', 'aircraft', 'airline', 'airport', 'alarm', 'album', 'alchemy', 'alcohol'
    ],

    adjectives: [
        'apparent', 'comprehensive', 'considerable', 'consistent', 'distinct', 'dominant', 'evident', 'explicit', 'fundamental', 'inherent',
        'initial', 'potential', 'preceding', 'primary', 'relevant', 'significant', 'specific', 'subsequent', 'sufficient', 'valid',
        'abstract', 'academic', 'accessible', 'accurate', 'acute', 'adequate', 'adjacent', 'adverse', 'aesthetic', 'ambiguous',
        'analytical', 'applicable', 'arbitrary', 'archaic', 'authentic', 'autonomous', 'benevolent', 'biased', 'binary', 'categorical',
        'causal', 'chronological', 'cognitive', 'coherent', 'cohesive', 'collaborative', 'comparative', 'compatible', 'complex', 'conclusive',
        'concrete', 'concurrent', 'conditional', 'confidential', 'consecutive', 'consequential', 'constituent', 'contemporary', 'contextual', 'controversial',
        'conventional', 'correlative', 'critical', 'crucial', 'cumulative', 'definitive', 'denotative', 'dependent', 'descriptive', 'deterministic',
        'differential', 'digital', 'diminutive', 'discreet', 'discrepant', 'discrete', 'discursive', 'disproportionate', 'divergent', 'diverse',
        'dogmatic', 'drastic', 'durable', 'dynamic', 'eclectic', 'economical', 'effective', 'egalitarian', 'elaborate', 'elementary',
        'empirical', 'equivalent', 'erroneous', 'essential', 'ethical', 'evaluative', 'evolutionary', 'exclusive', 'exemplary', 'exhaustive',
        'existential', 'exogenous', 'experimental', 'explicable', 'extensive', 'extraneous', 'extrinsic', 'feasible', 'finite', 'formal',
        // Additional 100 academic adjectives
        'aberrant', 'abhorrent', 'abiding', 'abject', 'ablaze', 'able', 'abnormal', 'abominable', 'aboriginal', 'abortive',
        'abounding', 'abrasive', 'abrupt', 'absent', 'absolute', 'absorbed', 'absorbing', 'abstract', 'abstruse', 'absurd',
        'abundant', 'abusive', 'abysmal', 'academic', 'acceptable', 'accepting', 'accessible', 'accidental', 'acclaimed', 'accommodating',
        'accomplished', 'accordant', 'accountable', 'accurate', 'accursed', 'accusatory', 'accusing', 'acerbic', 'achievable', 'acid',
        'acidic', 'acknowledged', 'acoustic', 'acrid', 'acrimonious', 'acrobatic', 'actionable', 'active', 'actual', 'actuarial',
        'acute', 'adamant', 'adaptable', 'adaptive', 'added', 'addictive', 'additional', 'adept', 'adequate', 'adherent',
        'adhesive', 'adjacent', 'adjoining', 'adjustable', 'administrative', 'admirable', 'admiring', 'admissible', 'adopted', 'adoptive',
        'adorable', 'adoring', 'adrenalized', 'adroit', 'adult', 'advanced', 'advantageous', 'adventurous', 'adverse', 'advertised',
        'advisable', 'aerial', 'aesthetic', 'affable', 'affected', 'affectionate', 'affiliated', 'affirmative', 'afflicted', 'affluent',
        'affordable', 'afraid', 'aggravated', 'aggravating', 'aggressive', 'aggrieved', 'aghast', 'agile', 'aging', 'agitated'
    ],

    adverbs: [
        'accordingly', 'alternatively', 'consequently', 'conversely', 'essentially', 'furthermore', 'hence', 'inevitably', 'merely', 'moreover',
        'nevertheless', 'nonetheless', 'predominantly', 'presumably', 'primarily', 'respectively', 'significantly', 'subsequently', 'thereby', 'virtually',
        'abruptly', 'abstractly', 'accurately', 'adequately', 'admittedly', 'adversely', 'allegedly', 'annually', 'approximately', 'arguably',
        'assuredly', 'atypically', 'automatically', 'barely', 'broadly', 'categorically', 'causally', 'chronologically', 'clearly', 'cognitively',
        'coincidentally', 'collectively', 'comparatively', 'comprehensively', 'conceptually', 'concurrently', 'confidentialy', 'consciously', 'consistently', 'conspicuously',
        'continually', 'controversially', 'critically', 'cumulatively', 'curiously', 'decidedly', 'definitively', 'deliberately', 'demonstrably', 'densely',
        'diametrically', 'differentially', 'diligently', 'distinctly', 'drastically', 'effectively', 'efficiently', 'elaborately', 'empirically', 'entirely',
        'equally', 'erroneously', 'especially', 'exceptionally', 'exclusively', 'explicitly', 'extensively', 'externally', 'extremely', 'frequently',
        'fundamentally', 'gradually', 'hardly', 'historically', 'ideally', 'ideologically', 'implicitly', 'incidentally', 'increasingly', 'independently',
        'indirectly', 'individually', 'inexorably', 'inherently', 'initially', 'innately', 'inseparably', 'instinctively', 'intensely', 'intentionally',
        // Additional 100 academic adverbs
        'abnormally', 'abruptly', 'absolutely', 'abundantly', 'academically', 'acceptably', 'accessibly', 'accidentally', 'accomplishedly', 'accordantly',
        'accurately', 'accusingly', 'achingly', 'acidly', 'acoustically', 'acrimoniously', 'actively', 'actually', 'acutely', 'adamantly',
        'adaptively', 'additionally', 'adequately', 'adhesively', 'adjacently', 'adjustably', 'administratively', 'admirably', 'admiringly', 'admittedly',
        'adorably', 'adoringly', 'adroitly', 'advantageously', 'adversely', 'advisably', 'aesthetically', 'affably', 'affectedly', 'affectionately',
        'affirmatively', 'affluently', 'affordably', 'afield', 'afresh', 'aggravatingly', 'aggressively', 'agilely', 'agonizingly', 'agreeably',
        'ahead', 'aimlessly', 'airily', 'alarmingly', 'alertly', 'algebraically', 'allegedly', 'allegorically', 'alliteratively', 'allowably',
        'almost', 'aloft', 'alone', 'along', 'already', 'alright', 'also', 'alternately', 'altruistically', 'always',
        'amateurishly', 'amazedly', 'ambiguously', 'ambitiously', 'amiably', 'amicably', 'amidships', 'amiss', 'amorphously', 'amply',
        'amusingly', 'analogically', 'analytically', 'anarchically', 'anatomically', 'anciently', 'angrily', 'angularly', 'animatedly', 'annually',
        'anonymously', 'antagonistically', 'anticlimactically', 'anticipatorily', 'anxiously', 'apathetically', 'apologetically', 'appallingly', 'apparently', 'appealingly'
    ],

    prepositions: [
        'about', 'above', 'across', 'after', 'against', 'along', 'among', 'around', 'at', 'before',
        'behind', 'below', 'beneath', 'beside', 'between', 'beyond', 'by', 'down', 'during', 'except',
        'for', 'from', 'in', 'inside', 'into', 'near', 'of', 'off', 'on', 'onto',
        'out', 'outside', 'over', 'past', 'since', 'through', 'throughout', 'to', 'toward', 'under',
        'underneath', 'until', 'up', 'upon', 'with', 'within', 'without',
        // Common academic and multi-word prepositions/phrases:
        'according to', 'as a result of', 'in addition to', 'in accordance with', 'in case of', 'in comparison with',
        'in consequence of', 'in contrast to', 'in front of', 'in light of', 'in opposition to', 'in place of',
        'in relation to', 'in respect of', 'in terms of', 'in view of', 'on account of', 'on behalf of',
        'on the basis of', 'with regard to', 'with respect to', 'with a view to', 'as opposed to', 'contrary to',
        'due to', 'prior to', 'subsequent to', 'pertaining to', 'in response to', 'with reference to'
    ],

    phrasal: [
        'account for', 'bring about', 'carry out', 'come up with', 'deal with', 'figure out', 'find out', 'focus on', 'follow up', 'give rise to',
        'go through', 'look into', 'make up', 'point out', 'put forward', 'result in', 'rule out', 'set up', 'take into account', 'turn out',
        'adhere to', 'agree with', 'allow for', 'amount to', 'appertain to', 'back up', 'bear out', 'believe in', 'belong to', 'break down',
        'break through', 'bring up', 'build on', 'call for', 'call off', 'carry on', 'check out', 'clean up', 'close down', 'come across',
        'comply with', 'concentrate on', 'consist of', 'cope with', 'count on', 'cut back', 'depend on', 'derive from', 'dispose of', 'do away with',
        'draw on', 'dream of', 'drive at', 'drop out', 'end up', 'engage in', 'fall apart', 'fill in', 'finish off', 'get at',
        'get away with', 'get by', 'get over', 'give in', 'give up', 'go ahead', 'go on', 'hold back', 'hold on', 'keep on',
        'keep up', 'lead to', 'leave out', 'let down', 'listen to', 'look after', 'look for', 'look forward to', 'look up to', 'make out',
        'object to', 'occur to', 'part with', 'pass away', 'pay attention to', 'pick up', 'play down', 'point at', 'provide for', 'put off',
        'rely on', 'refer to', 'run into', 'run out of', 'send out', 'set off', 'show up', 'stand for', 'stem from', 'stick to',
        'sum up', 'take after', 'take over', 'talk about', 'think over', 'try out', 'turn down', 'turn into', 'use up', 'wait for',

        // 200 additional phrasal verbs relevant to academic/professional/advanced English:
        'abide by', 'act on', 'add up to', 'apply for', 'argue for', 'ask for', 'attend to', 'average out', 'base on', 'be made up of',
        'bear on', 'block out', 'boil down to', 'branch out', 'bring down', 'bring in', 'bring out', 'bring together', 'build up', 'call in',
        'cancel out', 'carry over', 'carry through', 'catch on', 'catch up on', 'check in', 'check up on', 'chip in', 'clam up', 'clamp down on',
        'come about', 'come across as', 'come along', 'come apart', 'come before', 'come by', 'come down to', 'come in for', 'come out', 'come to',
        'come up', 'conform to', 'contribute to', 'convert to', 'cut out', 'deal in', 'depend upon', 'dig into', 'disagree with', 'dwell on',
        'enter into', 'expand on', 'explain away', 'fall behind', 'fall for', 'fall through', 'figure on', 'fill out', 'find against', 'find for',
        'flag up', 'follow from', 'follow through', 'follow up on', 'freeze out', 'get across', 'get ahead', 'get around', 'get around to', 'get down to',
        'get in', 'get in on', 'get into', 'get off', 'get on', 'get out', 'get round', 'get rid of', 'get together', 'get up to',
        'give away', 'give off', 'give out', 'go about', 'go against', 'go along with', 'go by', 'go down', 'go for', 'go in for',
        'go on to', 'go out', 'go over', 'go under', 'grow out of', 'hammer out', 'hand down', 'hand in', 'hand out', 'hand over',
        'hang on', 'hear from', 'hear of', 'hit on', 'hold down', 'hold up', 'hook up', 'hush up', 'join in', 'keep at',
        'keep back', 'keep off', 'keep out', 'kick in', 'knock down', 'lay out', 'leave off', 'let out', 'level off', 'line up',
        'live up to', 'log in', 'log out', 'look out', 'look over', 'look round', 'look upon', 'make away with', 'make for', 'make up for',
        'meet up', 'narrow down', 'open up', 'opt in', 'opt out', 'pass down', 'pass for', 'pass on', 'pass out', 'pass up',
        'pay for', 'phase in', 'phase out', 'pick out', 'pile up', 'pin down', 'play out', 'point to', 'press ahead', 'press for',
        'press on', 'print out', 'proceed with', 'put aside', 'put forth', 'put in', 'put in for', 'put together', 'quote from', 'reach out to',
        'react to', 'reason out', 'reflect on', 'relate to', 'remind of', 'report back', 'resort to', 'result from', 'revert to', 'ring up',
        'root out', 'rule out of', 'run by', 'run through', 'see to', 'seek out', 'settle for', 'settle on', 'set aside', 'set forth',
        'set out', 'shape up', 'shut down', 'single out', 'sit in on', 'size up', 'sort out', 'speak for', 'speak out', 'spell out',
        'spread out', 'stand against', 'stand by', 'stand out', 'stand up for', 'step in', 'step up', 'stick with', 'stir up', 'straighten out',
        'substitute for', 'sum over', 'switch off', 'switch on', 'take apart', 'take back', 'take in', 'take on', 'take out', 'take part in',
        'take up', 'talk over', 'tear down', 'tie in with', 'track down', 'transact with', 'turn away', 'turn back', 'turn in', 'turn on',
        'turn over', 'use for', 'vacate for', 'ward off', 'wash out', 'weed out', 'weigh in', 'weigh on', 'wind down', 'work out',
        'write out', 'write up', 'zero in on', 'zoom in on', 'call back', 'cut in', 'back out', 'bounce back', 'break off', 'bring back',
        'call back on', 'mark down', 'mess up', 'move along', 'move on', 'nod off', 'pay off', 'pop up', 'pull down', 'pull in',
        'pull through', 'push for', 'put down', 'reach for', 'roll out', 'run down', 'run off', 'send for', 'set aside for', 'shut in',
        'shut out', 'stay up', 'take down', 'take off', 'take on board', 'talk down', 'talk through', 'think ahead', 'think back', 'think through',
        'turn up', 'wait on', 'walk through', 'wrap up', 'write down', 'write in'
    ],

    connectors: [
        'although', 'as a result', 'besides', 'despite', 'for instance', 'however', 'in contrast', 'in fact', 'in other words', 'likewise',
        'meanwhile', 'on the contrary', 'on the other hand', 'otherwise', 'similarly', 'that is', 'therefore', 'thus', 'whereas', 'while',
        'above all', 'accordingly', 'additionally', 'after all', 'afterward', 'all in all', 'all the same', 'also', 'alternatively', 'anyway',
        'as a consequence', 'as a matter of fact', 'as an illustration', 'as far as', 'at the same time', 'be that as it may', 'because of this', 'broadly speaking', 'by and large', 'by comparison',
        'by contrast', 'by the same token', 'consequently', 'correspondingly', 'equally', 'even so', 'finally', 'first of all', 'firstly', 'for example',
        'for that reason', 'furthermore', 'generally speaking', 'granted', 'hence', 'henceforth', 'in addition', 'in brief', 'in conclusion', 'in essence',
        'in general', 'in particular', 'in short', 'in summary', 'in the same way', 'incidentally', 'indeed', 'instead', 'lastly', 'mainly',
        'moreover', 'namely', 'nevertheless', 'next', 'nonetheless', 'notably', 'notwithstanding', 'now', 'on the whole', 'overall',
        'particularly', 'plus', 'rather', 'regardless', 'secondly', 'significantly', 'specifically', 'still', 'subsequently', 'such as',
        'summarizing', 'thirdly', 'to be sure', 'to conclude', 'to illustrate', 'to put it another way', 'to sum up', 'told differently', 'ultimately', 'yet'
    ],

    // ─────────────────────────────────────────────────────────────
    // GRAMMAR (Expanded with variations to reach 100)
    // ─────────────────────────────────────────────────────────────

    relative: [
        'who', 'whom', 'whose', 'which', 'that', 'where', 'when', 'why', 'in which', 'at which',
        'to whom', 'for which', 'of which', 'by which', 'with whom', 'from which', 'about which', 'during which', 'without which', 'upon which',
        'through which', 'under which', 'beside which', 'towards whom', 'beyond which', 'whereby', 'wherein', 'wherefore', 'wherever', 'whenever',
        'whichever', 'whoever', 'whomever', 'as which', 'like whom', 'despite which', 'following which', 'at the time of which', 'the reason for which', 'the way in which',
        'for whom', 'near which', 'opposite which', 'around which', 'after which', 'before which', 'between which', 'among whom', 'against which', 'concerning which',
        'regarding which', 'pertaining to which', 'along which', 'past which', 'over which', 'since when', 'to which extent', 'by means of which', 'in favor of whom', 'in place of which',
        'on account of which', 'for the sake of whom', 'by virtue of which', 'with the exception of which', 'in spite of which', 'instead of which', 'as a result of which', 'in addition to which', 'coupled with which', 'in relation to which',
        'who soever', 'whom soever', 'which soever', 'where soever', 'when soever', 'whatever', 'whate’er', 'whoe’er', 'the person who', 'the thing which',
        'the place where', 'the moment when', 'the factor that', 'those who', 'he who', 'they who', 'one who', 'such as', 'as many as', 'as much as',
        'the same as', 'those which', 'all that', 'something that', 'nothing that', 'anything that', 'everything that', 'the one which', 'each of which', 'both of whom'
    ],

    noun_clauses: [
        'that', 'what', 'whatever', 'whether', 'if', 'how', 'why', 'when', 'where', 'who',
        'whom', 'whoever', 'whomever', 'whichever', 'how much', 'how many', 'how long', 'how often', 'whether or not', 'the fact that',
        'how far', 'how fast', 'how soon', 'the reason why', 'the place where', 'the time when', 'the manner in which', 'whatever happens', 'whoever asks', 'whichever choice',
        'that he said', 'what she wants', 'how it works', 'why they left', 'where they go', 'if it rains', 'whether they agree', 'how many people', 'the idea that', 'the belief that',
        'the claim that', 'the notion that', 'the suggestion that', 'the finding that', 'the assumption that', 'the evidence that', 'the theory that', 'the question whether', 'the problem of how', 'the possibility that',
        'the certainty that', 'the hope that', 'the fear that', 'the regret that', 'the doubt whether', 'the realization that', 'the discovery that', 'the observation that', 'the statement that', 'the conclusion that',
        'whatever you think', 'whenever you like', 'wherever you go', 'however you feel', 'how much it costs', 'how long it takes', 'how frequently it occurs', 'who it was', 'whose it is', 'what it means',
        'that it exists', 'whether it is true', 'how it evolved', 'why it matters', 'where it originated', 'what resulted', 'who was responsible', 'whichever is better', 'whatever is necessary', 'the news that',
        'the rumor that', 'the report that', 'the truth that', 'the perception that', 'the suspicion that', 'the consensus that', 'the probability that', 'the risk that', 'the condition that', 'the way how'
    ],

    tenses: [
        'had been', 'has been', 'have been', 'will be', 'will have', 'would have', 'had done', 'has done', 'will do', 'is doing',
        'was doing', 'were doing', 'had been doing', 'has been doing', 'will be doing', 'would be', 'could have', 'might have', 'should have', 'must have',
        'does', 'did', 'will', 'is', 'was', 'were', 'has', 'have', 'had', 'am doing',
        'shall be', 'shall have', 'shall have been', 'would do', 'would be doing', 'would have been doing', 'could do', 'could be doing', 'could have been doing', 'might do',
        'might be doing', 'might have been doing', 'should do', 'should be doing', 'should have been doing', 'must do', 'must be doing', 'must have been doing', 'can do', 'can be doing',
        'may do', 'may be doing', 'may have done', 'may have been doing', 'ought to do', 'ought to be doing', 'ought to have done', 'ought to have been doing', 'used to do', 'used to be doing',
        'be going to do', 'was going to do', 'were going to do', 'is to do', 'was to do', 'were to do', 'has to do', 'have to do', 'had to do', 'will have to do',
        'would have to do', 'is about to do', 'was about to do', 'were about to do', 'is likely to do', 'was likely to do', 'were likely to do', 'has been known to do', 'is said to do', 'is thought to do',
        'is believed to do', 'is expected to do', 'will be seen to do', 'would be found to do', 'had better do', 'would rather do', 'might as well do', 'could well be doing', 'will probably do', 'is constantly doing',
        'was forever doing', 'has always been doing', 'will typically do', 'would normally do', 'should definitely do', 'must certainly do', 'might possibly do', 'could potentially do', 'may perhaps do', 'shall eventually do'
    ],

    conditionals: [
        'if', 'unless', 'provided that', 'as long as', 'in case', 'even if', 'only if', 'supposing', 'assuming', 'on condition that',
        'whether or not', 'if only', 'what if', 'but for', 'otherwise', 'or else', 'if so', 'if not', 'were to', 'should',
        'had I known', 'were it not for', 'if it were not for', 'if it had not been for', 'if per chance', 'providing that', 'given that', 'so long as', 'on the assumption that', 'in the event that',
        'if and only if', 'unless and until', 'even though', 'should it happen that', 'were they to', 'had they been', 'if need be', 'if possible', 'if necessary', 'if appropriate',
        'if desired', 'if true', 'if so required', 'if ever', 'if at all', 'no matter if', 'regardless of whether', 'suppose', 'imagine', 'provided',
        'assuming that', 'expecting that', 'on the understanding that', 'with the proviso that', 'just in case', 'lest', 'for fear that', 'should anyone', 'were anyone to', 'had anyone',
        'but that', 'save that', 'except that', 'if by any chance', 'in the case that', 'under the condition that', 'should there be', 'were there to be', 'had there been', 'in the circumstances that',
        'if it so happens that', 'only when', 'whenever', 'wherever', 'whichever way', 'no matter how', 'however much', 'as if', 'as though', 'if indeed',
        'if really', 'if actually', 'if basically', 'if theoretically', 'if practically', 'if naturally', 'if eventually', 'if suddenly', 'if finally', 'if certainly',
        'even providing', 'so far as', 'insofar as', 'granted that', 'allowing that', 'presuming that', 'considering that', 'if it follows that', 'if it turns out that', 'what if it were'
    ],

    modals: [
        'can', 'could', 'may', 'might', 'will', 'would', 'shall', 'should', 'must', 'ought to',
        'need to', 'have to', 'had better', 'would rather', 'be able to', 'be supposed to', 'be going to', 'used to', 'dare to', 'be likely to',
        'may well', 'might well', 'could well', 'can potentially', 'will likely', 'would probably', 'should ideally', 'must necessarily', 'ought really to', 'need specifically to',
        'have got to', 'had rather', 'would sooner', 'be allowed to', 'be permitted to', 'be obliged to', 'be required to', 'be bound to', 'be due to', 'be meant to',
        'be set to', 'be sure to', 'be certain to', 'be liable to', 'be apt to', 'be prone to', 'be expected to', 'be destined to', 'be thought to', 'be said to',
        'can’t help', 'couldn’t but', 'may as well', 'might as well', 'will surely', 'would certainly', 'shall definitely', 'should really', 'must obviously', 'ought naturally to',
        'had best', 'would just as soon', 'be forced to', 'be compelled to', 'be empowered to', 'be authorized to', 'be entitled to', 'be slated to', 'be scheduled to', 'be rumored to',
        'be reported to', 'be presumed to', 'be assumed to', 'be estimated to', 'be predicted to', 'be forecast to', 'be intended to', 'be designed to', 'be calculated to', 'be prepared to',
        'be willing to', 'be eager to', 'be ready to', 'be hesitant to', 'be reluctant to', 'be afraid to', 'be proud to', 'be glad to', 'be sorry to', 'be lucky to',
        'be unlikely to', 'be unable to', 'be incapable of', 'be prohibited from', 'be forbidden to', 'be excused from', 'be exempt from', 'be free to', 'be welcome to', 'be invited to'
    ],

    passive: [
        'is done', 'was done', 'has been done', 'had been done', 'will be done', 'is being done', 'was being done', 'can be done', 'could be done', 'should be done',
        'must be done', 'might be done', 'may be done', 'ought to be done', 'has to be done', 'is supposed to be done', 'is said to be', 'is believed to be', 'is considered to be', 'is expected to be',
        'are done', 'were done', 'have been done', 'will have been done', 'would have been done', 'are being done', 'were being done', 'shall be done', 'would be done', 'must have been done',
        'should have been done', 'could have been done', 'might have been done', 'may have been done', 'ought to have been done', 'is thought to have been', 'is known to be', 'is rumored to be', 'is reported to have been', 'is found to be',
        'is shown to be', 'is seen to be', 'is felt to be', 'is understood to be', 'is presumed to be', 'is assumed to be', 'is estimated to be', 'is predicted to be', 'is calculated to be', 'is intended to be',
        'is designed to be', 'is programmed to be', 'is required to be', 'is allowed to be', 'is permitted to be', 'is forbidden to be', 'is prohibited to be', 'is asked to be', 'is requested to be', 'is ordered to be',
        'is told to be', 'is encouraged to be', 'is discouraged from being', 'is forced to be', 'is compelled to be', 'is urged to be', 'is tempted to be', 'is invited to be', 'is warned to be', 'is reminded to be',
        'is seen being', 'is heard being', 'is found being', 'is kept being', 'is left being', 'is made to be', 'was made to be', 'will be made to be', 'has been made to be', 'is thought being',
        'is being considered', 'is being studied', 'is being analyzed', 'is being reviewed', 'is being developed', 'is being implemented', 'is being used', 'is being created', 'is being tested', 'is being monitored',
        'is being evaluated', 'is being assessed', 'is being debated', 'is being discussed', 'is being negotiated', 'is being organized', 'is being managed', 'is being led', 'is being driven', 'is being transformed'
    ],

    quantifiers: [
        'all', 'most', 'many', 'much', 'some', 'any', 'few', 'a few', 'little', 'a little',
        'several', 'enough', 'no', 'none', 'both', 'either', 'neither', 'each', 'every', 'plenty of',
        'a lot of', 'lots of', 'a great deal of', 'a large number of', 'a majority of', 'a minority of', 'a bit of', 'a couple of', 'a variety of', 'a range of',
        'a multitude of', 'an abundance of', 'a plethora of', 'a scarcity of', 'a lack of', 'a handful of', 'the whole of', 'the entirety of', 'half of', 'most of',
        'some of', 'all of', 'none of', 'each of', 'both of', 'either of', 'neither of', 'many of', 'much of', 'few of',
        'little of', 'several of', 'enough of', 'any of', 'one of', 'two of', 'various', 'numerous', 'innumerable', 'countless',
        'manifold', 'sundry', 'frequent', 'rare', 'occasional', 'copious', 'extensive', 'minimal', 'maximal', 'sufficient',
        'insufficient', 'adequate', 'inadequate', 'abundant', 'sparse', 'dense', 'substantial', 'meager', 'significant', 'negligible',
        'proportionate', 'disproportionate', 'total', 'partial', 'complete', 'entire', 'limited', 'unlimited', 'infinite', 'finite',
        'more', 'most', 'less', 'least', 'fewer', 'fewest', 'further', 'additional', 'extra', 'surplus'
    ],

    pronouns: [
        'myself', 'yourself', 'himself', 'herself', 'itself', 'ourselves', 'themselves', 'each other', 'one another', 'anyone',
        'everyone', 'someone', 'no one', 'anything', 'everything', 'something', 'nothing', 'whoever', 'whatever', 'whichever',
        'anybody', 'everybody', 'somebody', 'nobody', 'anywhere', 'everywhere', 'somewhere', 'nowhere', 'anyhow', 'somehow',
        'me', 'you', 'him', 'her', 'it', 'us', 'them', 'my', 'your', 'his', 'her',
        'its', 'our', 'their', 'mine', 'yours', 'his', 'hers', 'ours', 'theirs', 'this',
        'that', 'these', 'those', 'none', 'both', 'either', 'neither', 'each', 'all', 'some',
        'many', 'few', 'several', 'one', 'others', 'another', 'such', 'whomever', 'whose', 'who',
        'whom', 'what', 'which', 'yourselves', 'itself', 'one’s', 'oneself', 'whosesoever', 'whatsoever', 'anysoever',
        'someone else', 'anyone else', 'everyone else', 'no one else', 'something else', 'anything else', 'everything else', 'nothing else', 'somewhere else', 'anywhere else',
        'everywhere else', 'nowhere else', 'each and every one', 'none other', 'one another’s', 'each other’s', 'this one', 'that one', 'these ones', 'those ones'
    ],

    gerunds: [
        'to do', 'doing', 'to have done', 'having done', 'to be done', 'being done', 'make someone do', 'let someone do', 'have something done', 'get something done',
        'get someone to do', 'help someone do', 'would rather do', 'had better do', 'cannot help doing', 'it is worth doing', 'there is no point in doing', 'look forward to doing', 'be used to doing', 'object to doing',
        'admit to doing', 'avoid doing', 'consider doing', 'deny doing', 'enjoy doing', 'finish doing', 'keep doing', 'mind doing', 'postpone doing', 'practice doing',
        'quit doing', 'recall doing', 'recommend doing', 'risk doing', 'suggest doing', 'stop doing', 'try doing', 'remember doing', 'forget doing', 'regret doing',
        'attempt to do', 'begin to do', 'choose to do', 'decide to do', 'expect to do', 'forget to do', 'hope to do', 'intend to do', 'learn to do', 'manage to do',
        'need to do', 'offer to do', 'plan to do', 'prepare to do', 'pretend to do', 'promise to do', 'refuse to do', 'seem to do', 'want to do', 'wish to do',
        'afford to do', 'agree to do', 'appear to do', 'arrange to do', 'ask to do', 'claim to do', 'fail to do', 'happen to do', 'hesitate to do', 'prepare to do',
        'wait to do', 'tend to do', 'threaten to do', 'strive to do', 'volunteer to do', 'beg to do', 'care to do', 'deserve to do', 'determine to do', 'elect to do',
        'endeavor to do', 'guarantee to do', 'long to do', 'neglect to do', 'resolve to do', 'seek to do', 'swear to do', 'undertake to do', 'used to do', 'be likely to do',
        'be able to do', 'be allowed to do', 'be supposed to do', 'be forced to do', 'be happy to do', 'be ready to do', 'be willing to do', 'keep on doing', 'go on doing', 'carry on doing'
    ]
};