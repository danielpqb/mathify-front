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
        };
      })
    : setQuestionData((old) => {
        if (configGameData.numberOfQuestions > old.id) {
          return {
            id: Number(old.id) + 1,
            problemData: createProblemData(),
            answer: "",
            timeLeft: configGameData.questionTime,
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

export function saveAnswer({ setGameData, questionData, isCorrect }) {
  setGameData((old) => {
    const _new = { ...old };
    _new.answers[questionData.id - 1].isCorrect = isCorrect;
    _new.answers[questionData.id - 1].timeSpent = old.config.questionTime - questionData.timeLeft;
    return _new;
  });
}
