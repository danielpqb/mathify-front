export function createProblemData() {
  //Generate Operates
  const operates = [];
  operates.push(Math.floor(Math.random() * 10));
  operates.push(Math.floor(Math.random() * 10));

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
