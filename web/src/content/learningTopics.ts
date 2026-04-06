export interface LearningResource {
  title: string;
  url: string;
}

export interface LearningTopic {
  slug: string;
  emoji: string;
  title: string;
  gradeBand: string;
  summary: string;
  whyItMatters: string;
  lessonObjectives: string[];
  readings: LearningResource[];
  videos: LearningResource[];
  activities: string[];
  parentTips: string[];
  assignments: string[];
}

export const learningTopics: LearningTopic[] = [
  {
    slug: 'adjectives-and-descriptive-writing',
    emoji: '📝',
    title: 'Adjectives and Descriptive Writing',
    gradeBand: 'K-2 to 6-8',
    summary: 'Help students add detail, precision, and confidence to writing by mastering adjective use and adjective order.',
    whyItMatters:
      'Students who can describe clearly write stronger stories, answer prompts with better detail, and communicate ideas more effectively across all subjects.',
    lessonObjectives: [
      'Identify adjectives in simple and complex sentences.',
      'Use adjective order naturally in writing.',
      'Revise weak sentences into descriptive ones.'
    ],
    readings: [
      { title: 'Khan Academy Grammar Overview', url: 'https://www.khanacademy.org/humanities/grammar' },
      { title: 'Purdue OWL Grammar Resources', url: 'https://owl.purdue.edu/owl/general_writing/grammar/index.html' }
    ],
    videos: [
      { title: 'YouTube: Adjectives for Kids', url: 'https://www.youtube.com/results?search_query=adjectives+for+kids' },
      { title: 'YouTube: Order of Adjectives', url: 'https://www.youtube.com/results?search_query=order+of+adjectives' }
    ],
    activities: [
      'Adjective Hunt: underline adjectives in a short reading passage.',
      'Sentence Upgrade: rewrite 10 plain sentences with vivid adjectives.',
      'Describe and Draw: partner describes an object, partner draws it.'
    ],
    parentTips: [
      'Ask your child to describe objects using color, shape, size, and texture words.',
      'Read a page together and pause to spot describing words.',
      'Praise specificity: better to say bright red bicycle than nice bike.'
    ],
    assignments: [
      'Write a 6-sentence paragraph about your favorite place using at least 12 adjectives.',
      'Complete a worksheet with 20 sentences: identify and label adjectives.',
      'Create a 15-word adjective bank grouped by feeling, color, and size.'
    ]
  },
  {
    slug: 'fractions-decimals-and-percent',
    emoji: '➗',
    title: 'Fractions, Decimals, and Percent',
    gradeBand: '3-5 to 9-12',
    summary: 'Build number sense by connecting fractions, decimals, and percentages in real-world contexts.',
    whyItMatters:
      'This topic supports money skills, data interpretation, and algebra readiness. Students use these ideas in science labs, shopping, and probability.',
    lessonObjectives: [
      'Convert between fractions, decimals, and percents accurately.',
      'Compare values using benchmark numbers.',
      'Apply percent reasoning to discounts and growth.'
    ],
    readings: [
      { title: 'Khan Academy Fractions', url: 'https://www.khanacademy.org/math/arithmetic/fraction-arithmetic' },
      { title: 'Math is Fun Fractions', url: 'https://www.mathsisfun.com/fractions.html' }
    ],
    videos: [
      { title: 'YouTube: Fractions to Decimals', url: 'https://www.youtube.com/results?search_query=fractions+to+decimals' },
      { title: 'YouTube: Percent Basics', url: 'https://www.youtube.com/results?search_query=percent+basics+for+students' }
    ],
    activities: [
      'Shopping Challenge: calculate sale prices and tax.',
      'Number Line Match: place equivalent forms on the same number line.',
      'Percent of Class Poll: survey class data and convert results.'
    ],
    parentTips: [
      'Use grocery receipts to practice percent discounts.',
      'Ask your child to explain how 0.5, 1/2, and 50% are equivalent.',
      'Use visual models like pie charts and bar models at home.'
    ],
    assignments: [
      'Solve 24 mixed conversion problems.',
      'Write 5 real-life word problems using percentages and solve them.',
      'Create one infographic explaining equivalence with examples.'
    ]
  },
  {
    slug: 'reading-comprehension-strategies',
    emoji: '📚',
    title: 'Reading Comprehension Strategies',
    gradeBand: 'K-2 to 9-12',
    summary: 'Teach main idea, evidence, inference, and summarizing with age-appropriate texts.',
    whyItMatters:
      'Strong comprehension supports performance in all subjects, not just language arts. Students need to extract meaning from instructions, articles, and problems.',
    lessonObjectives: [
      'Identify main idea and supporting details.',
      'Use text evidence to support answers.',
      'Summarize informational and narrative texts.'
    ],
    readings: [
      { title: 'ReadWorks', url: 'https://www.readworks.org/' },
      { title: 'CommonLit', url: 'https://www.commonlit.org/' }
    ],
    videos: [
      { title: 'YouTube: Main Idea and Details', url: 'https://www.youtube.com/results?search_query=main+idea+and+details+for+kids' },
      { title: 'YouTube: Reading Strategies', url: 'https://www.youtube.com/results?search_query=reading+comprehension+strategies+students' }
    ],
    activities: [
      'Stop and Jot: pause every paragraph and write one key point.',
      'Evidence Race: find the sentence that proves each answer.',
      'Summary Pyramid: one sentence, then one paragraph.'
    ],
    parentTips: [
      'Ask open-ended questions after reading: why, how, what if.',
      'Have your child point to exact words that support answers.',
      'Use short daily reading blocks rather than one long session.'
    ],
    assignments: [
      'Read 3 passages and answer 5 evidence-based questions each.',
      'Write a one-paragraph summary of a nonfiction article.',
      'Keep a vocabulary and inference journal for one week.'
    ]
  },
  {
    slug: 'scientific-method-and-experiments',
    emoji: '🔬',
    title: 'Scientific Method and Experiments',
    gradeBand: '3-5 to 9-12',
    summary: 'Guide students through question, hypothesis, procedure, data, and conclusion.',
    whyItMatters:
      'Students learn structured thinking, data interpretation, and evidence-based conclusions. These skills transfer to engineering and problem solving.',
    lessonObjectives: [
      'Form clear testable hypotheses.',
      'Distinguish independent/dependent variables.',
      'Interpret data and justify conclusions.'
    ],
    readings: [
      { title: 'Science Buddies Scientific Method', url: 'https://www.sciencebuddies.org/science-fair-projects/science-fair/steps-of-the-scientific-method' },
      { title: 'NASA Scientific Method (student friendly)', url: 'https://spaceplace.nasa.gov/review/science-fair/scientific-method.html' }
    ],
    videos: [
      { title: 'YouTube: Scientific Method for Students', url: 'https://www.youtube.com/results?search_query=scientific+method+for+students' },
      { title: 'YouTube: Variables in Experiments', url: 'https://www.youtube.com/results?search_query=independent+dependent+variables+experiment' }
    ],
    activities: [
      'Paper Towel Test: compare absorbency and graph results.',
      'Plant Growth Study: test light/water variables.',
      'Design Review: critique classmate experiment setup.'
    ],
    parentTips: [
      'Encourage prediction before experiments.',
      'Let students record data in simple tables first.',
      'Ask what evidence supports each conclusion.'
    ],
    assignments: [
      'Plan and run one home experiment with documented steps.',
      'Submit data chart and one CER (claim-evidence-reasoning) paragraph.',
      'Answer reflection questions about errors and improvements.'
    ]
  },
  {
    slug: 'geometry-and-spatial-thinking',
    emoji: '📐',
    title: 'Geometry and Spatial Thinking',
    gradeBand: '3-5 to 9-12',
    summary: 'Develop understanding of shape properties, area, perimeter, volume, and angle relationships.',
    whyItMatters:
      'Geometry improves visual reasoning and supports fields like architecture, engineering, coding, and design.',
    lessonObjectives: [
      'Classify shapes and angle types correctly.',
      'Compute area/perimeter/volume with correct units.',
      'Apply geometry to practical design scenarios.'
    ],
    readings: [
      { title: 'Khan Academy Geometry', url: 'https://www.khanacademy.org/math/geometry' },
      { title: 'Math Open Reference', url: 'https://www.mathopenref.com/' }
    ],
    videos: [
      { title: 'YouTube: Area and Perimeter', url: 'https://www.youtube.com/results?search_query=area+and+perimeter+lesson' },
      { title: 'YouTube: Angle Relationships', url: 'https://www.youtube.com/results?search_query=angle+relationships+geometry' }
    ],
    activities: [
      'Room Designer: measure and estimate room area.',
      'Angle Hunt: identify real-world acute/right/obtuse angles.',
      'Shape Sort Challenge with justification statements.'
    ],
    parentTips: [
      'Use household objects to classify 2D/3D shapes.',
      'Discuss units anytime measuring at home.',
      'Prompt your child to explain why formulas work.'
    ],
    assignments: [
      'Solve a 20-question mixed geometry set.',
      'Create one poster teaching area vs perimeter.',
      'Complete one mini project designing a playground map.'
    ]
  },
  {
    slug: 'vocabulary-and-word-study',
    emoji: '📖',
    title: 'Vocabulary and Word Study',
    gradeBand: 'K-2 to 9-12',
    summary: 'Expand vocabulary through roots, prefixes, suffixes, and context clues.',
    whyItMatters:
      'Vocabulary growth directly improves reading fluency, comprehension, and writing quality.',
    lessonObjectives: [
      'Decode unfamiliar words with context clues.',
      'Recognize common roots and affixes.',
      'Use new vocabulary in writing and speech.'
    ],
    readings: [
      { title: 'Vocabulary.com', url: 'https://www.vocabulary.com/' },
      { title: 'Merriam-Webster Word of the Day', url: 'https://www.merriam-webster.com/word-of-the-day' }
    ],
    videos: [
      { title: 'YouTube: Context Clues', url: 'https://www.youtube.com/results?search_query=context+clues+lesson' },
      { title: 'YouTube: Prefixes and Suffixes', url: 'https://www.youtube.com/results?search_query=prefixes+suffixes+lesson' }
    ],
    activities: [
      'Word Detective: infer meanings from short passages.',
      'Root Tree: build word families from one root.',
      'Vocabulary Charades for academic words.'
    ],
    parentTips: [
      'Ask your child to use one new word at dinner daily.',
      'Keep a family word wall on a fridge or whiteboard.',
      'Celebrate correct usage in conversation, not memorization only.'
    ],
    assignments: [
      'Create flashcards for 25 target words.',
      'Write a short story using at least 12 new words correctly.',
      'Complete a context-clue worksheet with sentence evidence.'
    ]
  },
  {
    slug: 'us-history-cause-and-effect',
    emoji: '📜',
    title: 'US History Cause and Effect',
    gradeBand: '6-8 to 9-12',
    summary: 'Understand key events by tracing causes, impacts, and long-term consequences.',
    whyItMatters:
      'History analysis strengthens evidence use, argument writing, and civic understanding.',
    lessonObjectives: [
      'Sequence major events accurately.',
      'Explain short and long-term consequences.',
      'Use primary/secondary sources in responses.'
    ],
    readings: [
      { title: 'Library of Congress Classroom Materials', url: 'https://www.loc.gov/classroom-materials/' },
      { title: 'History.com Topics', url: 'https://www.history.com/topics' }
    ],
    videos: [
      { title: 'YouTube: US History Timeline', url: 'https://www.youtube.com/results?search_query=us+history+timeline+for+students' },
      { title: 'YouTube: Cause and Effect in History', url: 'https://www.youtube.com/results?search_query=cause+and+effect+history+lesson' }
    ],
    activities: [
      'Timeline Sprint: map 10 events in order with notes.',
      'Debate Circle: argue significance of one event.',
      'Source Check: compare two accounts of same event.'
    ],
    parentTips: [
      'Connect historical topics to current events conversations.',
      'Use maps to anchor place-based understanding.',
      'Ask for evidence, not just opinions, during discussions.'
    ],
    assignments: [
      'Write a one-page cause-and-effect analysis.',
      'Complete a document-based question with source citations.',
      'Create a study guide with 20 key terms and definitions.'
    ]
  },
  {
    slug: 'computer-science-basics',
    emoji: '💻',
    title: 'Computer Science Basics',
    gradeBand: '6-8 to 9-12',
    summary: 'Introduce algorithms, decomposition, debugging, and computational thinking.',
    whyItMatters:
      'CS skills support logical reasoning and prepare students for modern careers in technology and problem solving.',
    lessonObjectives: [
      'Design simple algorithms for everyday tasks.',
      'Break complex tasks into smaller steps.',
      'Use debugging strategies to fix mistakes.'
    ],
    readings: [
      { title: 'Code.org Learn', url: 'https://code.org/' },
      { title: 'CS Unplugged', url: 'https://csunplugged.org/en/' }
    ],
    videos: [
      { title: 'YouTube: Intro to Algorithms', url: 'https://www.youtube.com/results?search_query=algorithms+for+students' },
      { title: 'YouTube: Computational Thinking', url: 'https://www.youtube.com/results?search_query=computational+thinking+lesson' }
    ],
    activities: [
      'Pseudocode a morning routine using decision points.',
      'Debug a broken logic flowchart as a team.',
      'Design one simple game rule system and test it.'
    ],
    parentTips: [
      'Encourage step-by-step explanation before coding.',
      'Normalize bugs as part of learning.',
      'Ask your child to explain one algorithm verbally.'
    ],
    assignments: [
      'Write pseudocode for 5 tasks with loops/conditions.',
      'Solve 10 logic puzzle problems.',
      'Build a mini app/game prototype and submit reflection.'
    ]
  },
  {
    slug: 'financial-literacy-for-students',
    emoji: '💵',
    title: 'Financial Literacy for Students',
    gradeBand: '6-8 to 9-12',
    summary: 'Teach saving, budgeting, credit basics, and long-term money habits.',
    whyItMatters:
      'Financial literacy helps students make responsible decisions early and avoid costly mistakes later.',
    lessonObjectives: [
      'Create and maintain a realistic monthly budget.',
      'Explain simple vs compound interest.',
      'Evaluate spending choices using goals and constraints.'
    ],
    readings: [
      { title: 'Practical Money Skills', url: 'https://www.practicalmoneyskills.com/' },
      { title: 'CFPB Consumer Tools', url: 'https://www.consumerfinance.gov/consumer-tools/' }
    ],
    videos: [
      { title: 'YouTube: Budgeting for Teens', url: 'https://www.youtube.com/results?search_query=budgeting+for+teens' },
      { title: 'YouTube: Compound Interest', url: 'https://www.youtube.com/results?search_query=compound+interest+explained+students' }
    ],
    activities: [
      'Budget Lab: allocate fixed and variable costs.',
      'Savings Race: compare growth under different rates.',
      'Needs vs Wants sorting challenge with reasoning.'
    ],
    parentTips: [
      'Involve students in small family budget conversations.',
      'Set one savings goal and track progress weekly.',
      'Discuss trade-offs before making purchases.'
    ],
    assignments: [
      'Create a one-month budget scenario and reflection.',
      'Solve 12 interest and percentage word problems.',
      'Write a personal finance action plan for next 90 days.'
    ]
  },
  {
    slug: 'critical-thinking-and-argument-writing',
    emoji: '🧠',
    title: 'Critical Thinking and Argument Writing',
    gradeBand: '6-8 to 9-12',
    summary: 'Strengthen analysis, evidence use, and reasoning through structured argument tasks.',
    whyItMatters:
      'Critical thinking improves academic writing, problem solving, and decision making in all areas of life.',
    lessonObjectives: [
      'Distinguish claim, evidence, and reasoning.',
      'Identify weak logic and common fallacies.',
      'Write concise, evidence-supported arguments.'
    ],
    readings: [
      { title: 'Your Logical Fallacy Is', url: 'https://yourlogicalfallacyis.com/' },
      { title: 'Stanford Encyclopedia of Philosophy: Logic', url: 'https://plato.stanford.edu/entries/logic-classical/' }
    ],
    videos: [
      { title: 'YouTube: Logical Fallacies Explained', url: 'https://www.youtube.com/results?search_query=logical+fallacies+for+students' },
      { title: 'YouTube: CER Writing Strategy', url: 'https://www.youtube.com/results?search_query=claim+evidence+reasoning+writing' }
    ],
    activities: [
      'Fallacy Spotting in ads or social posts.',
      'Claim-Evidence-Reasoning mini debates.',
      'Peer review: improve argument clarity and support.'
    ],
    parentTips: [
      'Ask for reasons behind opinions during conversation.',
      'Encourage respectful disagreement with evidence.',
      'Practice identifying strong vs weak sources together.'
    ],
    assignments: [
      'Write a 3-paragraph argumentative response with citations.',
      'Annotate one article and identify claim/evidence gaps.',
      'Complete a 10-item logic and reasoning check.'
    ]
  }
];

export function findTopicBySlug(slug: string) {
  return learningTopics.find((topic) => topic.slug === slug);
}
