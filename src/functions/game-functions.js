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
    const newer = { ...old, screen: screen };
    return newer;
  });
}

export function saveAnswer({ setGameData, questionData, isCorrect }) {
  setGameData((old) => {
    const newer = { ...old };
    newer.answers[questionData.id - 1].isCorrect = isCorrect;
    newer.answers[questionData.id - 1].timeSpent = old.config.questionTime - questionData.timeLeft;
    newer.answers[questionData.id - 1].myAnswer = questionData.answer;
    newer.answers[questionData.id - 1].correctAnswer = questionData.correctAnswer;
    return newer;
  });
}

export function saveConfigs(setGameData, configData) {
  setGameData((old) => {
    const newer = { ...old, config: { ...configData, questionTime: configData.questionTime * 1000 } };
    return newer;
  });
}
