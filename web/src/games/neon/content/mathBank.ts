import type { Grade } from '../../questionBank';
import type { NeonMathRound } from './types';

const K2: NeonMathRound[] = [
  { prompt: '3 + 4 = ?', correctIndex: 2, choices: ['5', '6', '7', '8'] },
  { prompt: '9 - 3 = ?', correctIndex: 2, choices: ['4', '5', '6', '7'] },
  { prompt: '5 + 5 = ?', correctIndex: 2, choices: ['8', '9', '10', '11'] },
  { prompt: '10 - 7 = ?', correctIndex: 1, choices: ['1', '3', '4', '5'] },
  { prompt: '2 + 8 = ?', correctIndex: 2, choices: ['8', '9', '10', '11'] },
  { prompt: '6 - 2 = ?', correctIndex: 2, choices: ['2', '3', '4', '5'] },
  { prompt: '4 + 1 = ?', correctIndex: 1, choices: ['3', '5', '6', '7'] },
  { prompt: '7 + 0 = ?', correctIndex: 0, choices: ['7', '8', '9', '10'] },
  { prompt: '8 - 5 = ?', correctIndex: 1, choices: ['1', '3', '4', '5'] },
  { prompt: '1 + 6 = ?', correctIndex: 2, choices: ['5', '6', '7', '8'] },
  { prompt: '12 - 4 = ?', correctIndex: 2, choices: ['6', '7', '8', '9'] },
  { prompt: '3 + 3 = ?', correctIndex: 1, choices: ['5', '6', '7', '8'] },
];

const G35: NeonMathRound[] = [
  { prompt: '7 × 6 = ?', correctIndex: 2, choices: ['40', '41', '42', '43'] },
  { prompt: '48 ÷ 6 = ?', correctIndex: 1, choices: ['6', '8', '9', '12'] },
  { prompt: '15 + 27 = ?', correctIndex: 2, choices: ['40', '41', '42', '43'] },
  { prompt: '100 - 33 = ?', correctIndex: 1, choices: ['65', '67', '77', '87'] },
  { prompt: '9 × 8 = ?', correctIndex: 2, choices: ['63', '70', '72', '81'] },
  { prompt: '144 ÷ 12 = ?', correctIndex: 2, choices: ['10', '11', '12', '14'] },
  { prompt: '¼ + ¼ = ?', correctIndex: 1, choices: ['¼', '½', '1', '2'] },
  { prompt: '50 × 2 = ?', correctIndex: 2, choices: ['90', '99', '100', '110'] },
  { prompt: '81 ÷ 9 = ?', correctIndex: 2, choices: ['7', '8', '9', '10'] },
  { prompt: '13 + 28 = ?', correctIndex: 1, choices: ['39', '41', '42', '51'] },
  { prompt: '7² = ?', correctIndex: 2, choices: ['14', '42', '49', '56'] },
  { prompt: '⅓ of 18 = ?', correctIndex: 1, choices: ['4', '6', '8', '9'] },
];

const G68: NeonMathRound[] = [
  { prompt: '−5 + 12 = ?', correctIndex: 2, choices: ['5', '6', '7', '8'] },
  { prompt: '√81 = ?', correctIndex: 2, choices: ['7', '8', '9', '10'] },
  { prompt: '25% of 80 = ?', correctIndex: 1, choices: ['15', '20', '25', '40'] },
  { prompt: '2⁴ = ?', correctIndex: 2, choices: ['8', '14', '16', '32'] },
  { prompt: '3x = 21 → x = ?', correctIndex: 2, choices: ['5', '6', '7', '8'] },
  { prompt: '−3 × 4 = ?', correctIndex: 0, choices: ['−12', '−7', '7', '12'] },
  { prompt: '10³ = ?', correctIndex: 2, choices: ['100', '500', '1000', '10000'] },
  { prompt: 'GCD(12, 18) = ?', correctIndex: 2, choices: ['3', '4', '6', '9'] },
  { prompt: '⅔ + ⅓ = ?', correctIndex: 1, choices: ['⅔', '1', '1⅓', '2'] },
  { prompt: 'Perimeter: 5 × 4 rect', correctIndex: 2, choices: ['14', '16', '18', '20'] },
  { prompt: 'LCM(4, 6) = ?', correctIndex: 2, choices: ['10', '11', '12', '24'] },
  { prompt: '0.5 + 0.25 = ?', correctIndex: 1, choices: ['0.5', '0.75', '1', '1.25'] },
];

const G912: NeonMathRound[] = [
  { prompt: 'd/dx (x²) = ?', correctIndex: 2, choices: ['x', '2', '2x', 'x²'] },
  { prompt: 'sin(90°) = ?', correctIndex: 3, choices: ['0', '½', '√2/2', '1'] },
  { prompt: 'log₁₀(1000) = ?', correctIndex: 2, choices: ['1', '2', '3', '10'] },
  { prompt: 'If f(x)=3x+1, f(2)=?', correctIndex: 2, choices: ['4', '6', '7', '9'] },
  { prompt: 'i² = ?', correctIndex: 0, choices: ['−1', '1', 'i', '−i'] },
  { prompt: 'Σ k=1..5 k = ?', correctIndex: 2, choices: ['10', '14', '15', '20'] },
  { prompt: '√2 × √2 = ?', correctIndex: 1, choices: ['1', '2', '√2', '4'] },
  { prompt: 'Slope: (0,0) to (2,6)', correctIndex: 1, choices: ['2', '3', '4', '6'] },
  { prompt: 'P(3 on fair die)', correctIndex: 0, choices: ['⅙', '⅓', '¼', '½'] },
  { prompt: 'lim(x→0) sin(x)/x', correctIndex: 2, choices: ['0', '½', '1', '∞'] },
  { prompt: '∫ 2x dx', correctIndex: 1, choices: ['2 + C', 'x² + C', 'x²', '4x + C'] },
  { prompt: 'cos(0) = ?', correctIndex: 2, choices: ['0', '½', '1', '−1'] },
];

const BY_GRADE: Record<Grade, NeonMathRound[]> = {
  'K-2': K2,
  '3-5': G35,
  '6-8': G68,
  '9-12': G912,
};

export function mathRoundsForGrade(grade: Grade | undefined): NeonMathRound[] {
  return BY_GRADE[grade ?? '6-8'] ?? G68;
}
