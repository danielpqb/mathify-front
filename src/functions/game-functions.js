import { renderNewGame } from "./app-functions";
import { createProblemData } from "./question-functions";

export function renderNewQuestion({ setQuestionData, configGameData, setGameData, type, isFirst }) {
  isFirst
    ? setQuestionData((old) => {
        const problem = createProblemData();
        return {
          id: 1,
          problemData: problem.data,
          answer: "",
          timeLeft: configGameData.questionTime,
          correctAnswer: problem.correctAnswer,
        };
      })
    : setQuestionData((old) => {
        if (configGameData.numberOfQuestions > old.id) {
          const problem = createProblemData();
          return {
            id: Number(old.id) + 1,
            problemData: problem.data,
            answer: "",
            timeLeft: configGameData.questionTime,
            correctAnswer: problem.correctAnswer,
          };
        } else {
          changeScreen(setGameData, "result");
          // autoRestart = {
          //   setQuestionData: setQuestionData,
          //   configGameData: configGameData,
          //   setGameData: setGameData,
          //   type: "autoRestartingGame",
          //   isFirst: true,
          // };
        }
      });
}

export function changeScreen(setGameData, screen, autoRestart) {
  switch (screen) {
    case "result":
      break;

    case "question":
      if (autoRestart) {
        renderNewGame(setGameData);
        renderNewQuestion(autoRestart);
      }
      break;

    default:
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
    _new.answers[questionData.id - 1].myAnswer = questionData.answer;
    _new.answers[questionData.id - 1].correctAnswer = questionData.correctAnswer;
    return _new;
  });
}
