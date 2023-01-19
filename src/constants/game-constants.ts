export const defaultGameConfig = {
  questionTime: 15,
  allowedOperators: { "+": false, "-": false, "×": true, "÷": false },
  numberOfQuestions: 10,
  rangeOfNumbers: { from: 1, to: 9 },
  tier: { name: "silver", division: 3 }
};

export const tierConfigs = {
  bronze3: {
    questionTime: 15,
    allowedOperators: { "+": true, "-": true, "×": false, "÷": false },
    numberOfQuestions: 10,
    rangeOfNumbers: { from: 0, to: 9 },
  },
  bronze2: {
    questionTime: 10,
    allowedOperators: { "+": true, "-": true, "×": false, "÷": false },
    numberOfQuestions: 10,
    rangeOfNumbers: { from: 0, to: 20 },
  },
  bronze1: {
    questionTime: 10,
    allowedOperators: { "+": true, "-": true, "×": false, "÷": false },
    numberOfQuestions: 10,
    rangeOfNumbers: { from: 0, to: 100 },
  },

  silver3: {
    questionTime: 15,
    allowedOperators: { "+": false, "-": false, "×": true, "÷": false },
    numberOfQuestions: 10,
    rangeOfNumbers: { from: 1, to: 9 },
  },
  silver2: {
    questionTime: 15,
    allowedOperators: { "+": false, "-": false, "×": true, "÷": true },
    numberOfQuestions: 10,
    rangeOfNumbers: { from: 1, to: 9 },
  },
  silver1: {
    questionTime: 30,
    allowedOperators: { "+": false, "-": false, "×": true, "÷": false },
    numberOfQuestions: 10,
    rangeOfNumbers: { from: 1, to: 19 },
  },

  gold3: {
    questionTime: 30,
    allowedOperators: { "+": false, "-": false, "×": true, "÷": false },
    numberOfQuestions: 10,
    rangeOfNumbers: { from: 11, to: 19 },
  },
  gold2: {
    questionTime: 20,
    allowedOperators: { "+": false, "-": false, "×": true, "÷": false },
    numberOfQuestions: 10,
    rangeOfNumbers: { from: 11, to: 19 },
  },
  gold1: {
    questionTime: 20,
    allowedOperators: { "+": false, "-": false, "×": true, "÷": true },
    numberOfQuestions: 10,
    rangeOfNumbers: { from: 11, to: 19 },
  },

  challenger3: {
    questionTime: 20,
    allowedOperators: { "+": false, "-": false, "×": true, "÷": false },
    numberOfQuestions: 10,
    rangeOfNumbers: { from: 11, to: 99 },
  },
  challenger2: {
    questionTime: 15,
    allowedOperators: { "+": false, "-": false, "×": true, "÷": false },
    numberOfQuestions: 10,
    rangeOfNumbers: { from: 11, to: 99 },
  },
  challenger1: {
    questionTime: 15,
    allowedOperators: { "+": false, "-": false, "×": true, "÷": true },
    numberOfQuestions: 10,
    rangeOfNumbers: { from: 11, to: 99 },
  },
};
