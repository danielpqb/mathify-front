import { defaultGameConfig } from "../constants/game-constants";
import { renderNewGame } from "./app-functions";
import { createProblemData } from "./question-functions";

export function renderNewQuestion({ setQuestionData, configGameData, setGameData, type, isFirst }) {
  isFirst
    ? setQuestionData((old) => {
        const problem = createProblemData(configGameData);
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
          const problem = createProblemData(configGameData);
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

export function saveAnswer({ setGameData, questionData }) {
  const myAnswer = Number(questionData.answer);
  const correctAnswer = Number(questionData.correctAnswer);
  const isCorrect = myAnswer === correctAnswer ? true : false;

  setGameData((old) => {
    const newer = { ...old };
    newer.answers[questionData.id - 1].isCorrect = isCorrect;
    newer.answers[questionData.id - 1].timeSpent = old.config.questionTime - questionData.timeLeft;
    newer.answers[questionData.id - 1].myAnswer = myAnswer;
    newer.answers[questionData.id - 1].correctAnswer = correctAnswer;
    return newer;
  });
}

export function saveConfigs({ setGameData, configData, setAlert }) {
  //Check empty entries
  if (configData.rangeOfNumbers.from === "") configData.rangeOfNumbers.from = defaultGameConfig.rangeOfNumbers.from;
  if (configData.rangeOfNumbers.to === "") configData.rangeOfNumbers.to = defaultGameConfig.rangeOfNumbers.to;
  if (configData.numberOfQuestions === "") configData.numberOfQuestions = defaultGameConfig.numberOfQuestions;
  if (configData.questionTime === "") configData.questionTime = defaultGameConfig.questionTime;

  //Check range of numbers
  if (configData.rangeOfNumbers.from > configData.rangeOfNumbers.to) {
    setAlert({
      show: true,
      message: "Range of numbers:\n\nMin value can't be greater then max value!",
      type: 0,
      doThis: () => {},
      color: "rgb(230,200,0)",
      icon: "alert-circle",
    });
    return false;
  }

  //Check allowed operators
  const allowedOperators = Object.values(configData.allowedOperators);
  let isOperatorChecked = false;
  for (let value of allowedOperators) {
    if (value === true) {
      isOperatorChecked = true;
      break;
    }
  }
  if (!isOperatorChecked) {
    setAlert({
      show: true,
      message: "Allowed operations:\n\nMust have at least one operation checked!",
      type: 0,
      doThis: () => {},
      color: "rgb(230,200,0)",
      icon: "alert-circle",
    });
    return false;
  }

  //Save configs
  setGameData((old) => {
    const newer = {
      ...old,
      config: {
        ...configData,
        questionTime: Number(configData.questionTime) * 1000,
        numberOfQuestions: Number(configData.numberOfQuestions),
        rangeOfNumbers: { from: Number(configData.rangeOfNumbers.from), to: Number(configData.rangeOfNumbers.to) },
      },
    };
    return newer;
  });
  return true;
}
