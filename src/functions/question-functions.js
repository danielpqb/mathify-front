export function createProblemData({ allowedOperators, rangeOfNumbers }) {
  //Generate Operator
  let operator = "";
  while (!allowedOperators[operator] || operator === "") {
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
  }

  //Generate Operates
  const min = rangeOfNumbers.from;
  const dif = rangeOfNumbers.to - min;
  const operates = [];
  switch (operator) {
    case "-":
      operates.push(Math.floor(Math.random() * (dif + 1)) + min);
      operates.push(Math.floor(Math.random() * (dif + 1)) + min);

      operates.sort((a, b) => b - a);
      break;
    case "÷":
      const first = Math.floor(Math.random() * (dif + 1)) + min;
      const second = Math.floor(Math.random() * dif) + min + 1;

      operates.push(first * second);
      operates.push(second);
      break;
    default:
      operates.push(Math.floor(Math.random() * (dif + 1)) + min);
      operates.push(Math.floor(Math.random() * (dif + 1)) + min);
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

  const data = {
    data: [
      { type: "operate", value: operates[0], isAnswer: false },
      { type: "operator", value: operator, isAnswer: false },
      { type: "operate", value: operates[1], isAnswer: false },
      { type: "equals", value: "=" },
      { type: "result", value: result, isAnswer: true },
    ],
    correctAnswer: result,
  };

  return data;
}
