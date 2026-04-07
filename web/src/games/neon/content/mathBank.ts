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
  { prompt: '11 - 6 = ?', correctIndex: 1, choices: ['3', '5', '6', '7'] },
  { prompt: '4 + 4 = ?', correctIndex: 2, choices: ['6', '7', '8', '9'] },
  { prompt: '9 + 1 = ?', correctIndex: 2, choices: ['8', '9', '10', '11'] },
  { prompt: '7 - 0 = ?', correctIndex: 0, choices: ['7', '8', '9', '10'] },
  { prompt: '5 + 2 = ?', correctIndex: 2, choices: ['6', '7', '8', '9'] },
  { prompt: '14 - 9 = ?', correctIndex: 1, choices: ['4', '5', '6', '7'] },
  { prompt: '6 + 6 = ?', correctIndex: 2, choices: ['10', '11', '12', '13'] },
  { prompt: '8 ÷ 2 = ?', correctIndex: 1, choices: ['2', '4', '5', '6'] },
  { prompt: '3 × 2 = ?', correctIndex: 2, choices: ['4', '5', '6', '7'] },
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
  { prompt: '11 × 11 = ?', correctIndex: 1, choices: ['111', '121', '131', '141'] },
  { prompt: '0.4 + 0.6 = ?', correctIndex: 2, choices: ['0.8', '0.9', '1', '1.1'] },
  { prompt: '2.5 × 4 = ?', correctIndex: 2, choices: ['8', '9', '10', '12'] },
  { prompt: 'Perimeter square side 9', correctIndex: 2, choices: ['18', '27', '36', '81'] },
  { prompt: '¾ − ¼ = ?', correctIndex: 1, choices: ['¼', '½', '1', '1½'] },
  { prompt: '36 ÷ 4 = ?', correctIndex: 2, choices: ['7', '8', '9', '10'] },
  { prompt: '19 + 46 = ?', correctIndex: 1, choices: ['64', '65', '66', '67'] },
  { prompt: 'Round 47 to tens', correctIndex: 2, choices: ['40', '45', '50', '55'] },
  { prompt: '⅖ + ⅕ = ?', correctIndex: 2, choices: ['⅕', '⅖', '⅗', '⅘'] },
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
  { prompt: '|−9| = ?', correctIndex: 2, choices: ['−9', '0', '9', '18'] },
  { prompt: 'Slope y = 4x + 1', correctIndex: 2, choices: ['1', '2', '4', '5'] },
  { prompt: '10⁻² = ?', correctIndex: 0, choices: ['0.01', '0.1', '1', '100'] },
  { prompt: 'Cube volume 3×3×3', correctIndex: 2, choices: ['9', '18', '27', '36'] },
  { prompt: 'Scientific: 4.2×10³', correctIndex: 2, choices: ['42', '420', '4200', '42000'] },
  { prompt: 'πr² with r=2 (use π≈3.14)', correctIndex: 2, choices: ['6.28', '9.42', '12.56', '18.84'] },
  { prompt: 'Mean of 4,8,12', correctIndex: 2, choices: ['6', '7', '8', '9'] },
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
  { prompt: 'e^0 = ?', correctIndex: 2, choices: ['0', '1/e', '1', 'e'] },
  { prompt: 'Variance always ≥ ?', correctIndex: 2, choices: ['−1', '0.5', '0', '1'] },
  { prompt: 'P(HH) two fair coins', correctIndex: 1, choices: ['½', '¼', '⅛', '1'] },
  { prompt: 'Unit circle radius', correctIndex: 2, choices: ['0', '½', '1', 'π'] },
  { prompt: 'If a∥b and transversal, alt. int. angles', correctIndex: 2, choices: ['Supplementary', 'Complementary', 'Congruent', 'Unrelated'] },
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
