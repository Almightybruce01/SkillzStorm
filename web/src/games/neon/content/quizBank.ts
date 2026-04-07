import type { Grade } from '../../questionBank';
import type { NeonQuizItem } from './types';

const K2: NeonQuizItem[] = [
  { prompt: 'Sides on a triangle?', correctIndex: 1, choices: ['2', '3', '4', '5'] },
  { prompt: 'Which is a mammal?', correctIndex: 1, choices: ['Shark', 'Dog', 'Spider', 'Eagle'] },
  { prompt: 'Opposite of hot?', correctIndex: 0, choices: ['Cold', 'Warm', 'Wet', 'Dry'] },
  { prompt: 'Color of grass?', correctIndex: 1, choices: ['Blue', 'Green', 'Red', 'Yellow'] },
  { prompt: 'First letter of APPLE?', correctIndex: 0, choices: ['A', 'B', 'P', 'E'] },
  { prompt: 'How many legs on a bird?', correctIndex: 1, choices: ['0', '2', '4', '6'] },
  { prompt: 'The sun rises in the…', correctIndex: 0, choices: ['East', 'West', 'North', 'South'] },
  { prompt: 'How many days in a week?', correctIndex: 2, choices: ['5', '6', '7', '8'] },
  { prompt: 'Ice is frozen…', correctIndex: 2, choices: ['Fire', 'Rock', 'Water', 'Sand'] },
];

const G35: NeonQuizItem[] = [
  { prompt: 'Capital of USA?', correctIndex: 0, choices: ['Washington D.C.', 'New York', 'Chicago', 'LA'] },
  { prompt: 'Largest planet?', correctIndex: 2, choices: ['Earth', 'Mars', 'Jupiter', 'Venus'] },
  { prompt: 'Water freezes at 0°C. Boils at?', correctIndex: 2, choices: ['50°C', '90°C', '100°C', '120°C'] },
  { prompt: 'Photosynthesis uses?', correctIndex: 1, choices: ['Oxygen', 'Sunlight', 'Nitrogen', 'Iron'] },
  { prompt: 'Continent of Egypt?', correctIndex: 1, choices: ['Asia', 'Africa', 'Europe', 'Australia'] },
  { prompt: '7 continents?', correctIndex: 2, choices: ['5', '6', '7', '8'] },
  { prompt: 'Main gas plants breathe in?', correctIndex: 2, choices: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Helium'] },
  { prompt: 'Author of Charlotte’s Web (common choice)?', correctIndex: 2, choices: ['Seuss', 'Rowling', 'White', 'Dahl'] },
  { prompt: 'Pacific is a…', correctIndex: 2, choices: ['Desert', 'River', 'Ocean', 'Mountain'] },
  { prompt: 'Past tense of “run”?', correctIndex: 2, choices: ['run', 'runned', 'ran', 'running'] },
  { prompt: 'Decimal for ½', correctIndex: 1, choices: ['0.25', '0.5', '0.75', '1.5'] },
];

const G68: NeonQuizItem[] = [
  { prompt: 'Speed of light ≈ ?', correctIndex: 2, choices: ['3×10⁶ m/s', '3×10⁷ m/s', '3×10⁸ m/s', '3×10⁹ m/s'] },
  { prompt: 'DNA shape?', correctIndex: 1, choices: ['Single helix', 'Double helix', 'Triple', 'Ring'] },
  { prompt: 'Chemical symbol for gold?', correctIndex: 2, choices: ['Go', 'Gd', 'Au', 'Ag'] },
  { prompt: 'French Revolution began?', correctIndex: 2, choices: ['1679', '1776', '1789', '1815'] },
  { prompt: 'Mitochondria is the…?', correctIndex: 0, choices: ['Powerhouse', 'Nucleus', 'Ribosome', 'Membrane'] },
  { prompt: '√2 is?', correctIndex: 1, choices: ['Rational', 'Irrational', 'Integer', 'Imaginary'] },
  { prompt: 'H₂O chemical name?', correctIndex: 0, choices: ['Water', 'Hydrogen', 'Oxide', 'Salt'] },
  { prompt: 'Largest ocean?', correctIndex: 0, choices: ['Pacific', 'Atlantic', 'Indian', 'Arctic'] },
  { prompt: 'Gravity on Earth ≈ ?', correctIndex: 2, choices: ['4.9 m/s²', '7.2 m/s²', '9.8 m/s²', '12 m/s²'] },
  { prompt: 'Plate boundaries cause…', correctIndex: 2, choices: ['Tides only', 'Seasons', 'Earthquakes', 'Moon phases'] },
];

const G912: NeonQuizItem[] = [
  { prompt: 'Derivative of ln(x)?', correctIndex: 0, choices: ['1/x', 'ln(x)', 'x', 'e^x'] },
  { prompt: 'Nobel Prize country?', correctIndex: 2, choices: ['Denmark', 'Norway', 'Sweden', 'Finland'] },
  { prompt: 'Schrödinger equation domain?', correctIndex: 2, choices: ['Classical', 'Relativity', 'Quantum', 'Thermo'] },
  { prompt: 'GDP stands for?', correctIndex: 0, choices: ['Gross Domestic Product', 'General Data Price', 'Global Debt', 'Gov. Dev. Plan'] },
  { prompt: 'Hamlet author?', correctIndex: 1, choices: ['Dickens', 'Shakespeare', 'Austen', 'Poe'] },
  { prompt: 'Which is a vector space axiom?', correctIndex: 2, choices: ['Commutativity of ×', 'Trichotomy', 'Additive identity', 'Well-ordering'] },
  { prompt: 'Supply shifts right → price…', correctIndex: 2, choices: ['Always up', 'Unchanged', 'Tends down', 'Doubles'] },
  { prompt: 'RNA uses which base not in DNA?', correctIndex: 2, choices: ['Guanine', 'Cytosine', 'Uracil', 'Thymine'] },
  { prompt: 'Cold War rivals (primary)?', correctIndex: 2, choices: ['UK vs France', 'Japan vs China', 'USA vs USSR', 'Spain vs Portugal'] },
  { prompt: 'World War II ended (Europe V-E) in…', correctIndex: 2, choices: ['1943', '1944', '1945', '1946'] },
];

const BY_GRADE: Record<Grade, NeonQuizItem[]> = {
  'K-2': K2,
  '3-5': G35,
  '6-8': G68,
  '9-12': G912,
};

export function quizItemsForGrade(grade: Grade | undefined): NeonQuizItem[] {
  return BY_GRADE[grade ?? '6-8'] ?? G68;
}
