export type GameData = {
  answers: Partial<GameDataAnswer>[];
  config: ConfigData;
  screen: "result" | "question";
  isGameStarted: boolean;
};

export type GameDataAnswer = {
  id: number;
  myAnswer: number;
  correctAnswer: number;
  isCorrect: boolean;
  timeSpent: number;
  solution: string;
};

export type QuestionData = {
  answer: string;
  id: number;
  problemData: {
    type: "operate" | "operator" | "equals" | "result";
    value: number | "+" | "-" | "÷" | "×";
    isAnswer: boolean;
  }[];
  timeLeft: number;
  correctAnswer: number;
  lastTickTimestamp: number;
};

export type ConfigData = {
  questionTime: number | string;
  allowedOperators: { "+": boolean; "-": boolean; "×": boolean; "÷": boolean };
  numberOfQuestions: number | string;
  rangeOfNumbers: { from: number | string; to: number | string };
};
