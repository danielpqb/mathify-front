export function createProblemData() {
  //Generate Operator
  let operator = "";
  const operatorCode = Math.floor(Math.random() * 4);
  switch (operatorCode) {
    case 0:
      operator = "+";
      break;
    case 1:
      operator = "-";
      break;
    case 2:
      operator = "×";
      break;
    case 3:
      operator = "÷";
      break;
    default:
      break;
  }

  //Generate Operates
  const operates = [];
  switch (operator) {
    case "-":
      operates.push(Math.floor(Math.random() * 10));
      operates.push(Math.floor(Math.random() * 10));

      operates.sort((a, b) => b - a);
      break;
    case "÷":
      const first = Math.floor(Math.random() * 10);
      const second = Math.floor(Math.random() * 9) + 1;

      operates.push(first * second);
      operates.push(second);
      break;
    default:
      operates.push(Math.floor(Math.random() * 10));
      operates.push(Math.floor(Math.random() * 10));
      break;
  }

  //Calculate Result
  let result;
  switch (operator) {
    case "+":
      result = operates[0] + operates[1];
      break;
    case "-":
      result = operates[0] - operates[1];
      break;
    case "×":
      result = operates[0] * operates[1];
      break;
    case "÷":
      result = operates[0] / operates[1];
      break;
    default:
      break;
  }

  const data = [
    { type: "operate", value: operates[0], isAnswer: false },
    { type: "operator", value: operator, isAnswer: false },
    { type: "operate", value: operates[1], isAnswer: false },
    { type: "equals", value: "=" },
    { type: "result", value: result, isAnswer: true },
  ];

  return data;
}

export function renderNewQuestion(setGameData) {
  setGameData((old) => {
    if (old?.config?.numberOfQuestions > old?.currentQuestion?.id) {
      const oldId = Number(old?.currentQuestion?.id);

      const _new = {
        ...old,
        currentQuestion: {
          id: isNaN(oldId) ? 1 : oldId + 1,
          problemData: createProblemData(),
          answer: "",
          timeLeft: old?.config?.questionTime,
          startTimestamp: Date.now(),
        },
      };

      console.log(_new);
      return _new;
    } else {
      return {
        ...old,
        screen: "result",
      };
    }
  });
}

export function renderNewGame(setGameData) {
  const config = { questionTime: 15000, numberOfQuestions: 10 };

  const answers = () => {
    const answers = [];
    for (let i = 1; i <= config.numberOfQuestions; i++) {
      answers.push({ id: i });
    }

    return answers;
  };

  setGameData((old) => {
    const _new = {
      ...old,
      currentQuestion: { ...old?.currentQuestion, id: 1 },
      screen: "config",
      config: config,
      answers: answers(),
    };
    return _new;
  });
}

export function changeScreen(setGameData, screen) {
  switch (screen) {
    case "config":
      break;

    default:
      renderNewGame(setGameData);
      break;
  }

  setGameData((old) => {
    const _new = { ...old, screen: screen };
    return _new;
  });
}
