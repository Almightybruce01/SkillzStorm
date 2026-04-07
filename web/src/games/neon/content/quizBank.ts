import type { Grade } from '../../questionBank';
import type { NeonQuizItem } from './types';

const K2: NeonQuizItem[] = [
  { prompt: 'Sides on a triangle?', correctIndex: 1, choices: ['2', '3', '4', '5'] },
  { prompt: 'Which is a mammal?', correctIndex: 1, choices: ['Shark', 'Dog', 'Spider', 'Eagle'] },
  { prompt: 'Opposite of hot?', correctIndex: 0, choices: ['Cold', 'Warm', 'Wet', 'Dry'] },
  { prompt: 'Color of grass?', correctIndex: 1, choices: ['Blue', 'Green', 'Red', 'Yellow'] },
  { prompt: 'First letter of APPLE?', correctIndex: 0, choices: ['A', 'B', 'P', 'E'] },
];

const G35: NeonQuizItem[] = [
  { prompt: 'Capital of USA?', correctIndex: 0, choices: ['Washington D.C.', 'New York', 'Chicago', 'LA'] },
  { prompt: 'Largest planet?', correctIndex: 2, choices: ['Earth', 'Mars', 'Jupiter', 'Venus'] },
  { prompt: 'Water freezes at 0°C. Boils at?', correctIndex: 2, choices: ['50°C', '90°C', '100°C', '120°C'] },
  { prompt: 'Photosynthesis uses?', correctIndex: 1, choices: ['Oxygen', 'Sunlight', 'Nitrogen', 'Iron'] },
  { prompt: 'Continent of Egypt?', correctIndex: 1, choices: ['Asia', 'Africa', 'Europe', 'Australia'] },
  { prompt: '7 continents?', correctIndex: 2, choices: ['5', '6', '7', '8'] },
];

const G68: NeonQuizItem[] = [
  { prompt: 'Speed of light ≈ ?', correctIndex: 2, choices: ['3×10⁶ m/s', '3×10⁷ m/s', '3×10⁸ m/s', '3×10⁹ m/s'] },
  { prompt: 'DNA shape?', correctIndex: 1, choices: ['Single helix', 'Double helix', 'Triple', 'Ring'] },
  { prompt: 'Chemical symbol for gold?', correctIndex: 2, choices: ['Go', 'Gd', 'Au', 'Ag'] },
  { prompt: 'French Revolution began?', correctIndex: 2, choices: ['1679', '1776', '1789', '1815'] },
  { prompt: 'Mitochondria is the…?', correctIndex: 0, choices: ['Powerhouse', 'Nucleus', 'Ribosome', 'Membrane'] },
  { prompt: '√2 is?', correctIndex: 1, choices: ['Rational', 'Irrational', 'Integer', 'Imaginary'] },
];

const G912: NeonQuizItem[] = [
  { prompt: 'Derivative of ln(x)?', correctIndex: 0, choices: ['1/x', 'ln(x)', 'x', 'e^x'] },
  { prompt: 'Nobel Prize country?', correctIndex: 2, choices: ['Denmark', 'Norway', 'Sweden', 'Finland'] },
  { prompt: 'Schrödinger equation domain?', correctIndex: 2, choices: ['Classical', 'Relativity', 'Quantum', 'Thermo'] },
  { prompt: 'GDP stands for?', correctIndex: 0, choices: ['Gross Domestic Product', 'General Data Price', 'Global Debt', 'Gov. Dev. Plan'] },
  { prompt: 'Hamlet author?', correctIndex: 1, choices: ['Dickens', 'Shakespeare', 'Austen', 'Poe'] },
  { prompt: 'Which is a vector space axiom?', correctIndex: 2, choices: ['Commutativity of ×', 'Trichotomy', 'Additive identity', 'Well-ordering'] },
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
