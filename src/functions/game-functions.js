import { renderNewGame } from "./app-functions";
import { createProblemData } from "./question-functions";

export function renderNewQuestion({ setQuestionData, configGameData, setGameData, type }) {
  switch (type) {
    case "answering":
      break;

    case "timeEnded":
      setQuestionData((old) => {
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
      break;

    case "firstRendering":
      setQuestionData((old) => {
        return {
          id: 1,
          problemData: createProblemData(),
          answer: "",
          timeLeft: configGameData.questionTime,
          startTimestamp: Date.now(),
        };
      });
      break;

    case "restartingGame":
      setQuestionData((old) => {
        const oldId = Number(old?.currentQuestion?.id);

        return {
          ...old,
          currentQuestion: {
            id: isNaN(oldId) ? 1 : oldId + 1,
            problemData: createProblemData(),
            answer: "",
            timeLeft: old?.config?.questionTime,
            startTimestamp: Date.now(),
          },
        };
      });
      break;

    default:
      setQuestionData((old) => {
        return {
          ...old,
          screen: "result",
        };
      });
      break;
  }
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
