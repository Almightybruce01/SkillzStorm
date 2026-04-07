/** Single neon math screen: four choices, keys 1–4. */
export type NeonMathRound = {
  prompt: string;
  correctIndex: 0 | 1 | 2 | 3;
  choices: [string, string, string, string];
};

/** Quiz / trivia item (same key layout as math). */
export type NeonQuizItem = {
  prompt: string;
  correctIndex: 0 | 1 | 2 | 3;
  choices: [string, string, string, string];
};
