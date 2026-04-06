import { getCompleteSeedGames } from './completeCatalog';

export type GradeLevel = 'K-2' | '3-5' | '6-8' | '9-12';
export type GameCategory =
  | 'StormBattle'
  | 'StormDash'
  | 'StormPuzzle'
  | 'StormQuick'
  | 'Storm3D'
  | 'StormVR'
  | 'StormNeon'
  | 'StormMario'
  | 'StormRetro'
  | 'StormEduPlus'
  | 'StormElite';

export interface GameInfo {
  id: string;
  name: string;
  description: string;
  category: GameCategory;
  iconEmoji: string;
  coverArt?: string; // path to cover art image
  supportedGrades: GradeLevel[];
  isAvailable: boolean;
  isFeatured: boolean;
  isPremium: boolean;
  /** When set, overrides automatic neon canvas engine mapping */
  neonEngine?: string;
  /** Use legacy React GameLauncher instead of neon canvas (opt-in per game) */
  useReactEngine?: boolean;
}

export const gradeLevels: { value: GradeLevel; label: string; subtitle: string; color: string }[] = [
  { value: 'K-2', label: 'K – 2', subtitle: 'Foundations', color: '#00ff80' },
  { value: '3-5', label: '3 – 5', subtitle: 'Core Skills', color: '#0099ff' },
  { value: '6-8', label: '6 – 8', subtitle: 'Middle School', color: '#9933ff' },
  { value: '9-12', label: '9 – 12', subtitle: 'High School', color: '#ff2626' },
];

export const categories: { value: GameCategory; label: string; subtitle: string; icon: string; colors: string[] }[] = [
  { value: 'StormBattle', label: 'StormBattle', subtitle: 'Integrated Learning Arcade', icon: '🔥', colors: ['#1a66ff', '#6619e6'] },
  { value: 'StormDash', label: 'StormDash', subtitle: 'Dash / Runner + Knowledge Gate', icon: '🐇', colors: ['#00cc66', '#008033'] },
  { value: 'StormPuzzle', label: 'StormPuzzle', subtitle: 'Puzzle & Strategy', icon: '🧩', colors: ['#ffcc00', '#ff8000'] },
  { value: 'StormQuick', label: 'StormQuick', subtitle: 'Quick Play Mini Games', icon: '⚡', colors: ['#ff3366', '#cc1980'] },
  { value: 'Storm3D', label: 'Storm3D', subtitle: '3D Immersive Games', icon: '🎮', colors: ['#8000ff', '#cc00cc'] },
  { value: 'StormVR', label: 'StormVR', subtitle: 'VR Experience', icon: '🥽', colors: ['#00cccc', '#0066cc'] },
  { value: 'StormNeon', label: 'StormNeon', subtitle: 'Signature neon arcade', icon: '✨', colors: ['#22d3ee', '#e879f9'] },
  { value: 'StormMario', label: 'StormMario', subtitle: 'Mario & Kart style', icon: '🍄', colors: ['#ef4444', '#f97316'] },
  { value: 'StormRetro', label: 'StormRetro', subtitle: 'Arcade classics', icon: '👾', colors: ['#a855f7', '#6366f1'] },
  { value: 'StormEduPlus', label: 'StormEduPlus', subtitle: 'Extra learning titles', icon: '📚', colors: ['#22c55e', '#14b8a6'] },
  { value: 'StormElite', label: 'StormElite', subtitle: 'Elite & flagship', icon: '💎', colors: ['#f43f5e', '#eab308'] },
];

const coreGames: GameInfo[] = [
  // StormBattle
  { id: 'astromath_wars', name: 'AstroMath Wars', description: 'Space shooter — destroy asteroids containing wrong answers. Boss fights are word problems.', category: 'StormBattle', iconEmoji: '🚀', coverArt: '/images/covers/cover-astromath-wars.png', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: true, isPremium: false },
  { id: 'multiplication_meteors', name: 'Multiplication Meteors', description: 'Meteors rain down with multiplication problems. Shoot the correct answer before they hit your base.', category: 'StormBattle', iconEmoji: '☄️', supportedGrades: ['K-2','3-5','6-8'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'fraction_frenzy', name: 'Fraction Frenzy', description: 'Fast-paced fraction matching and solving. Chain combos for multiplier streaks.', category: 'StormBattle', iconEmoji: '🍕', supportedGrades: ['3-5','6-8'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'algebra_blaster', name: 'Algebra Blaster', description: 'Solve algebraic equations in an intense space battle.', category: 'StormBattle', iconEmoji: '⚡', supportedGrades: ['6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'vocabulary_sniper', name: 'Vocabulary Sniper', description: 'Aim and shoot targets matching word definitions. Snipe the correct answer in a lush forest range.', category: 'StormBattle', iconEmoji: '🎯', coverArt: '/images/covers/cover-vocabulary-sniper.png', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: true, isPremium: false },
  { id: 'grammar_gladiator', name: 'Grammar Gladiator', description: 'Arena combat where attacks are powered by correct grammar choices.', category: 'StormBattle', iconEmoji: '⚔️', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'science_defender', name: 'Science Defender', description: 'Defend your lab by answering science questions.', category: 'StormBattle', iconEmoji: '🔬', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'history_timeline_rush', name: 'History Timeline Rush', description: 'Race to place historical events in the correct order.', category: 'StormBattle', iconEmoji: '📜', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'geometry_defender', name: 'Geometry Defender', description: 'Protect your geometric fortress by solving shape problems.', category: 'StormBattle', iconEmoji: '📐', supportedGrades: ['6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'sat_word_arena', name: 'SAT Word Arena', description: 'Competitive word knowledge arena with definitions and synonyms.', category: 'StormBattle', iconEmoji: '📖', supportedGrades: ['9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'statistics_paintball', name: 'Statistics Paintball', description: 'Paintball arena where ammo is earned by solving statistics problems.', category: 'StormBattle', iconEmoji: '🎨', supportedGrades: ['9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'chem_lab_chaos', name: 'Chem Lab Chaos', description: 'Mix chemicals and balance equations. Don\'t let the lab explode.', category: 'StormBattle', iconEmoji: '🧪', supportedGrades: ['9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'financial_literacy_run', name: 'Financial Literacy Run', description: 'Navigate the stock market and learn compound interest.', category: 'StormBattle', iconEmoji: '💰', supportedGrades: ['9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'coordinate_conquest', name: 'Coordinate Conquest', description: 'Plot points to conquer territory. Strategic math warfare.', category: 'StormBattle', iconEmoji: '📊', supportedGrades: ['6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'data_defender', name: 'Data Defender', description: 'Protect data sets by interpreting graphs and charts.', category: 'StormBattle', iconEmoji: '🛡️', supportedGrades: ['6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'wordwave_survival', name: 'WordWave Survival', description: 'Zombie-style survival arena. Waves of undead approach — only correct vocabulary definitions can stop them!', category: 'StormBattle', iconEmoji: '🧟', coverArt: '/images/covers/cover-wordwave-survival.png', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: true, isPremium: false },

  // StormDash
  { id: 'skilldash', name: 'SkillDash', description: 'Neon auto-runner inspired by Geometry Dash. Jump spikes, dodge walls, and answer Knowledge Gates to advance!', category: 'StormDash', iconEmoji: '💨', coverArt: '/images/covers/cover-skilldash.png', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: true, isPremium: false },
  { id: 'sentence_sprint', name: 'Sentence Sprint', description: 'Side-scrolling runner. Hit words in correct order to form sentences.', category: 'StormDash', iconEmoji: '✍️', supportedGrades: ['K-2','3-5','6-8'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'bull_run_logic', name: 'Bull Run Logic', description: 'A mechanical bull is chasing you! Sprint through the city and solve equations before it catches up!', category: 'StormDash', iconEmoji: '🐂', coverArt: '/images/covers/cover-bull-run-logic.png', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: true, isPremium: false },
  { id: 'equation_escape', name: 'Equation Escape', description: 'Escape a collapsing maze by solving equations at each door.', category: 'StormDash', iconEmoji: '🏃', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'maze_of_ratios', name: 'Maze of Ratios', description: 'Navigate a ratio-based maze with proportional thinking.', category: 'StormDash', iconEmoji: '🌀', supportedGrades: ['6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'physics_platform', name: 'Physics Platform', description: 'Platformer where physics equations control gravity and speed.', category: 'StormDash', iconEmoji: '🎮', supportedGrades: ['9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'word_rocket_run', name: 'Word Rocket Run', description: 'Rocket through space collecting vocabulary words.', category: 'StormDash', iconEmoji: '🚀', supportedGrades: ['K-2','3-5','6-8'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'logic_tunnel', name: 'Logic Tunnel', description: 'Speed through a tunnel solving logic puzzles.', category: 'StormDash', iconEmoji: '🕳️', supportedGrades: ['6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'history_dash', name: 'History Dash', description: 'Run through historical eras answering history questions.', category: 'StormDash', iconEmoji: '🏛️', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'chem_jump', name: 'Chem Jump', description: 'Jump across periodic table elements.', category: 'StormDash', iconEmoji: '⚗️', supportedGrades: ['9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'speed_reading_dash', name: 'Speed Reading Dash', description: 'Run and read! Comprehension gates test your reading.', category: 'StormDash', iconEmoji: '📚', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'essay_builder_rush', name: 'Essay Builder Rush', description: 'Collect paragraph components to build essays.', category: 'StormDash', iconEmoji: '📝', supportedGrades: ['6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'market_mayhem', name: 'Market Mayhem', description: 'Wall Street madness! Run through the stock market, dodge crashes, and solve percentage and profit problems!', category: 'StormDash', iconEmoji: '📈', coverArt: '/images/covers/cover-market-mayhem.png', supportedGrades: ['9-12'], isAvailable: true, isFeatured: true, isPremium: false },
  { id: 'debate_dash', name: 'Debate Dash', description: 'Build logical arguments to break through barriers.', category: 'StormDash', iconEmoji: '🗣️', supportedGrades: ['9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'geometry_glide', name: 'Geometry Glide', description: 'Glide through geometric shapes identifying properties.', category: 'StormDash', iconEmoji: '🔷', supportedGrades: ['6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },

  // StormPuzzle
  { id: 'sentence_builder_pro', name: 'Sentence Builder Pro', description: 'Drag and drop words to build sentences.', category: 'StormPuzzle', iconEmoji: '🧩', supportedGrades: ['K-2','3-5','6-8'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'context_clue_hunt', name: 'Context Clue Hunt', description: 'Detective investigation using context clues.', category: 'StormPuzzle', iconEmoji: '🔍', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'pattern_blast', name: 'Pattern Blast', description: 'Identify and extend patterns.', category: 'StormPuzzle', iconEmoji: '🔢', supportedGrades: ['K-2','3-5','6-8'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'ratio_architect', name: 'Ratio Architect', description: 'Build structures using correct ratios.', category: 'StormPuzzle', iconEmoji: '🏗️', supportedGrades: ['6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'timeline_builder', name: 'Timeline Builder', description: 'Construct historical timelines.', category: 'StormPuzzle', iconEmoji: '📅', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'proof_builder', name: 'Proof Builder', description: 'Construct mathematical proofs step by step.', category: 'StormPuzzle', iconEmoji: '✅', supportedGrades: ['9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'word_connect_storm', name: 'Word Connect Storm', description: 'Connect related words in a web of meanings.', category: 'StormPuzzle', iconEmoji: '🕸️', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'probability_quest', name: 'Probability Quest', description: 'Navigate choices using probability.', category: 'StormPuzzle', iconEmoji: '🎲', supportedGrades: ['6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'code_breaker', name: 'Code Breaker', description: 'Crack encrypted vault codes using logic, math, and pattern recognition. Can you break in?', category: 'StormPuzzle', iconEmoji: '🔐', coverArt: '/images/covers/cover-code-breaker.png', supportedGrades: ['6-8','9-12'], isAvailable: true, isFeatured: true, isPremium: false },
  { id: 'logic_tower', name: 'Logic Tower', description: 'Build a tower of logic with reasoning puzzles.', category: 'StormPuzzle', iconEmoji: '🗼', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },

  // StormQuick
  { id: 'word_balloon_pop', name: 'Word Balloon Pop', description: 'Pop balloons with correct answers.', category: 'StormQuick', iconEmoji: '🎈', supportedGrades: ['K-2','3-5'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'number_catch', name: 'Number Catch', description: 'Catch falling correct numbers.', category: 'StormQuick', iconEmoji: '🔢', supportedGrades: ['K-2','3-5','6-8'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'grammar_clicker', name: 'Grammar Clicker', description: 'Rapid-fire grammar corrections.', category: 'StormQuick', iconEmoji: '✏️', supportedGrades: ['3-5','6-8'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'flash_fact_frenzy', name: 'Flash Fact Frenzy', description: 'True or false lightning round.', category: 'StormQuick', iconEmoji: '⚡', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'speed_multiplication', name: 'Speed Multiplication', description: 'Multiplication speed drill.', category: 'StormQuick', iconEmoji: '✖️', supportedGrades: ['K-2','3-5','6-8'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'spelling_sniper', name: 'Spelling Sniper', description: 'Snipe misspelled words from scrolling text.', category: 'StormQuick', iconEmoji: '🎯', supportedGrades: ['3-5','6-8'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'color_equation', name: 'Color Equation', description: 'Solve equations where colors represent numbers.', category: 'StormQuick', iconEmoji: '🌈', supportedGrades: ['K-2','3-5','6-8'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'quick_sat', name: 'Quick SAT', description: '60-second SAT prep blitz.', category: 'StormQuick', iconEmoji: '📋', supportedGrades: ['9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'brain_boost', name: 'Brain Boost', description: 'Mixed skill challenges that get harder.', category: 'StormQuick', iconEmoji: '🧠', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'memory_matrix', name: 'Memory Matrix', description: 'Remember patterns of increasing complexity.', category: 'StormQuick', iconEmoji: '🧩', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },

  // Storm3D
  { id: 'geometry_runner_3d', name: 'Geometry Runner 3D', description: 'Blast through a neon 3D geometric tunnel solving spatial puzzles at light speed!', category: 'Storm3D', iconEmoji: '🎮', coverArt: '/images/covers/cover-geometry-runner-3d.png', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: true, isPremium: false },
  { id: 'math_galaxy_3d', name: 'Math Galaxy 3D', description: 'Explore a 3D galaxy solving math on each planet.', category: 'Storm3D', iconEmoji: '🌌', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'word_world_3d', name: 'Word World 3D', description: 'Navigate a 3D word landscape.', category: 'Storm3D', iconEmoji: '🌍', supportedGrades: ['3-5','6-8'], isAvailable: true, isFeatured: false, isPremium: false },

  // StormVR
  { id: 'vr_math_dojo', name: 'VR Math Dojo', description: 'Immersive VR math training dojo.', category: 'StormVR', iconEmoji: '🥋', supportedGrades: ['6-8','9-12'], isAvailable: false, isFeatured: true, isPremium: true },
  { id: 'vr_science_lab', name: 'VR Science Lab', description: 'Virtual science experiments.', category: 'StormVR', iconEmoji: '🧫', supportedGrades: ['6-8','9-12'], isAvailable: false, isFeatured: false, isPremium: true },
  { id: 'vr_history_explorer', name: 'VR History Explorer', description: 'Walk through history in VR.', category: 'StormVR', iconEmoji: '🏺', supportedGrades: ['6-8','9-12'], isAvailable: false, isFeatured: false, isPremium: true },

  // StormNeon — 40 Replit signature slugs (see cursor-guide/SKILLZSTORM_CURSOR_PROMPT.md)
  { id: 'typing-storm', name: 'Typing Storm', description: 'Neon typing racer — hit keys fast and climb the score.', category: 'StormNeon', iconEmoji: '⌨️', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: true, isPremium: false },
  { id: 'speed-typer', name: 'Speed Typer', description: 'Speed typing challenge — words fall as you race the clock.', category: 'StormNeon', iconEmoji: '⚡', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'word-blitz', name: 'Word Blitz', description: 'Blitz through vocabulary — type each word before it escapes.', category: 'StormNeon', iconEmoji: '📝', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'math-storm', name: 'Math Storm', description: 'Math battle mode — pick the right answer under pressure.', category: 'StormNeon', iconEmoji: '🧮', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'number-battle', name: 'Number Battle', description: 'Rapid-fire sums — keys 1–4 lock in your answer.', category: 'StormNeon', iconEmoji: '🔢', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'times-table-titan', name: 'Times Table Titan', description: 'Master multiplication tables in neon math combat.', category: 'StormNeon', iconEmoji: '✖️', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'math-elite', name: 'Math Elite', description: 'Elite difficulty math — only perfect picks advance.', category: 'StormNeon', iconEmoji: '🏆', supportedGrades: ['6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'fraction-fighter', name: 'Fraction Fighter', description: 'Fight through fraction drills with quick multiple choice.', category: 'StormNeon', iconEmoji: '🥊', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'geography-quest', name: 'Geography Quest', description: 'Quiz voyage — geography questions with four choices.', category: 'StormNeon', iconEmoji: '🌍', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'world-explorer', name: 'World Explorer', description: 'Explore the map one quiz at a time.', category: 'StormNeon', iconEmoji: '🗺️', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'science-quest', name: 'Science Quest', description: 'Science trivia neon quiz — lab coat optional.', category: 'StormNeon', iconEmoji: '🔬', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'history-blast', name: 'History Blast', description: 'Blast through history questions at arcade speed.', category: 'StormNeon', iconEmoji: '📜', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'vocab-blast', name: 'Vocab Blast', description: 'Vocabulary quiz arena — definitions and synonyms.', category: 'StormNeon', iconEmoji: '📖', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'brain-blitz', name: 'Brain Blitz', description: 'Mixed trivia blitz — general knowledge at neon pace.', category: 'StormNeon', iconEmoji: '🧠', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'code-quest', name: 'Code Quest', description: 'Coding-flavored quiz — logic and patterns.', category: 'StormNeon', iconEmoji: '💻', supportedGrades: ['6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'memory-matrix', name: 'Memory Matrix (Neon)', description: 'Flip and match pairs — classic memory with neon tiles.', category: 'StormNeon', iconEmoji: '🧩', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'pattern-storm', name: 'Pattern Storm', description: 'Pattern memory storm — match the pairs before time runs out.', category: 'StormNeon', iconEmoji: '🔲', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'word-scramble-x', name: 'Word Scramble X', description: 'Unscramble the word — type the solution from jumbled letters.', category: 'StormNeon', iconEmoji: '🔤', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'anagram-storm', name: 'Anagram Storm', description: 'Anagram arcade — rebuild the hidden word.', category: 'StormNeon', iconEmoji: '🌀', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'spelling-quest', name: 'Spelling Quest', description: 'Spelling scramble quest — letters await your order.', category: 'StormNeon', iconEmoji: '✏️', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'snake-neon', name: 'Snake Neon', description: 'Classic snake — eat, grow, don’t bite yourself.', category: 'StormNeon', iconEmoji: '🐍', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: true, isPremium: false },
  { id: 'python-pro', name: 'Python Pro', description: 'Snake pro variant — tight grid, high speed.', category: 'StormNeon', iconEmoji: '🐍', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'neon-viper', name: 'Neon Viper', description: 'Viper snake — neon trails and sharp turns.', category: 'StormNeon', iconEmoji: '💜', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'neon-viper-xl', name: 'Neon Viper XL', description: 'Extra-large board viper — room to roam.', category: 'StormNeon', iconEmoji: '🟣', supportedGrades: ['6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'neon-breakout', name: 'Neon Breakout', description: 'Break bricks with a glowing paddle and ball.', category: 'StormNeon', iconEmoji: '🧱', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'brick-crusher', name: 'Brick Crusher', description: 'Crush every layer — breakout with combo scoring.', category: 'StormNeon', iconEmoji: '🎯', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'arkanoid-x', name: 'Arkanoid X', description: 'Arkanoid-style breakout — clear the wall.', category: 'StormNeon', iconEmoji: '🎮', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'space-raiders', name: 'Space Raiders', description: 'Space invaders style — shoot the grid before they land.', category: 'StormNeon', iconEmoji: '👾', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'galaxy-storm', name: 'Galaxy Storm', description: 'Galaxy shooter — waves of neon enemies.', category: 'StormNeon', iconEmoji: '🌌', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'alien-blitz', name: 'Alien Blitz', description: 'Alien blitz invasion — fast sideways march.', category: 'StormNeon', iconEmoji: '☄️', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'tetris-neon', name: 'Tetris Neon', description: 'Neon falling blocks — stack and clear lines.', category: 'StormNeon', iconEmoji: '🟦', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: true, isPremium: false },
  { id: 'block-storm', name: 'Block Storm', description: 'Block stack storm — single-piece drops, pure speed.', category: 'StormNeon', iconEmoji: '📦', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'stack-attack', name: 'Stack Attack', description: 'Stack attack mode — clear rows for big points.', category: 'StormNeon', iconEmoji: '🏗️', supportedGrades: ['3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'grid-master', name: 'Grid Master', description: 'Grid master tetris — minimal board, max focus.', category: 'StormNeon', iconEmoji: '⬛', supportedGrades: ['6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'neon-jump', name: 'Neon Jump', description: 'Auto-runner jumps — spikes, gaps, and rhythm.', category: 'StormNeon', iconEmoji: '🦘', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'platform-storm', name: 'Platform Storm', description: 'Platform runner storm — time your jumps.', category: 'StormNeon', iconEmoji: '🏃', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'sky-runner', name: 'Sky Runner', description: 'Sky-high runner — dodge obstacles in the clouds.', category: 'StormNeon', iconEmoji: '☁️', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'asteroid-storm', name: 'Asteroid Storm', description: 'Asteroids-style flight — thrust, rotate, shoot rocks.', category: 'StormNeon', iconEmoji: '🪨', supportedGrades: ['6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'space-rock', name: 'Space Rock', description: 'Space rocks everywhere — blast and survive.', category: 'StormNeon', iconEmoji: '🛸', supportedGrades: ['6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },
  { id: 'cosmic-blast', name: 'Cosmic Blast', description: 'Cosmic blast — wrap screen, split asteroids, score big.', category: 'StormNeon', iconEmoji: '✨', supportedGrades: ['6-8','9-12'], isAvailable: true, isFeatured: false, isPremium: false },

  // Storm Defenders (Tower Defense)
  { id: 'storm_defenders', name: 'Storm Defenders', description: 'Tower defense where you place Brain Turrets to fight zombie waves. Answer questions to place and upgrade 10 unique defenders. Survive endless waves, unlock new turrets, and outsmart boss zombies.', category: 'StormBattle', iconEmoji: '🛡️', coverArt: '/images/covers/cover-storm-defenders.png', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: true, isPremium: false },
  { id: 'storm_defenders_vr', name: 'Storm Defenders VR', description: 'Immersive 3D tower defense. Look down at the battlefield from above, place defenders by answering questions, and watch zombies march in real-time 3D.', category: 'Storm3D', iconEmoji: '🥽', supportedGrades: ['K-2','3-5','6-8','9-12'], isAvailable: true, isFeatured: true, isPremium: false },
];

/** SKILLZSTORM_COMPLETE.md seed (178) merged; skips slugs already in coreGames */
const completeSeedOnly = getCompleteSeedGames().filter((g) => !coreGames.some((c) => c.id === g.id));

export const allGames: GameInfo[] = [...coreGames, ...completeSeedOnly];

export function getGamesForCategory(category: GameCategory): GameInfo[] {
  return allGames.filter(g => g.category === category);
}

export function getGamesForGrade(grade: GradeLevel): GameInfo[] {
  return allGames.filter(g => g.supportedGrades.includes(grade));
}

export function getFeaturedGames(): GameInfo[] {
  return allGames.filter(g => g.isFeatured);
}
