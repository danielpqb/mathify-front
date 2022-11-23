import { renderNewGame } from "./app-functions";
import { createProblemData } from "./question-functions";

export function renderNewQuestion({ setQuestionData, configGameData, setGameData, type, isFirst }) {
  isFirst
    ? setQuestionData((old) => {
        return {
          id: 1,
          problemData: createProblemData(),
          answer: "",
          timeLeft: configGameData.questionTime,
          startTimestamp: Date.now(),
        };
      })
    : setQuestionData((old) => {
        if (configGameData.numberOfQuestions > old.id) {
          return {
            id: Number(old.id) + 1,
            problemData: createProblemData(),
            answer: "",
            timeLeft: configGameData.questionTime,
            startTimestamp: Date.now(),
          };
        } else {
          changeScreen(setGameData, "result");
        }
      });
}

export function changeScreen(setGameData, screen) {
  switch (screen) {
    case "result":
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
