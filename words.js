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

};
