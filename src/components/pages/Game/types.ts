export type GameData = {
    answers: [
      {
        id: number;
        myAnswer: number;
        correctAnswer: number;
        isCorrect: boolean;
        timeSpent: number;
      }
    ];
    config: {
      numberOfQuestions: number;
      allowedOperators: {
        "+": boolean;
        "-": boolean;
        "×": boolean;
        "÷": boolean;
      };
      questionTime: number;
      rangeOfNumbers: [number, number];
    };
    screen: "result" | "question";
  };

export type QuestionData = {
    answer: string;
    id: number;
    lastTickTimestamp: number;
    problemData: [
      {
        type: "operate" | "operator" | "equals" | "result";
        value: number | "+" | "-" | "÷" | "×";
        isAnswer: boolean;
      }
    ];
    timeLeft: number;
  };

export type ConfigData = {
    questionTime: number,
    allowedOperators: { "+": boolean, "-": boolean, "×": boolean, "÷": boolean },
    numberOfQuestions: number,
    rangeOfNumbers: { from: number, to: number },
  };
