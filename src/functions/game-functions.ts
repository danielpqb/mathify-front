import { Alert } from "components/common/Alert/types";
import {
  ConfigData,
  GameData,
  QuestionData,
} from "components/pages/Game/types";
import { defaultGameConfig } from "../constants/game-constants";
import { renderNewGame } from "./app-functions";
import { createProblemData } from "./question-functions";

export function renderNewQuestion({
  setQuestionData,
  configGameData,
  setGameData,
  type,
  isFirst,
}: {
  setQuestionData: React.Dispatch<React.SetStateAction<Partial<QuestionData>>>;
  configGameData: ConfigData;
  setGameData: React.Dispatch<React.SetStateAction<Partial<GameData>>>;
  type: string;
  isFirst: boolean;
}) {
  isFirst
    ? setQuestionData((old) => {
      const problem = createProblemData(configGameData);
      return {
        id: 1,
        problemData: problem.data,
        answer: "",
        timeLeft: configGameData.questionTime,
        correctAnswer: problem.correctAnswer,
      } as QuestionData;
    })
    : setQuestionData((old) => {
      if (configGameData.numberOfQuestions > (old.id as number)) {
        const problem = createProblemData(configGameData);
        return {
          id: Number(old.id) + 1,
          problemData: problem.data,
          answer: "",
          timeLeft: configGameData.questionTime,
          correctAnswer: problem.correctAnswer,
        } as QuestionData;
      }
      else {
        changeScreen(setGameData, "result");
        return old;
      }
    });
}

export function changeScreen(
  setGameData: React.Dispatch<React.SetStateAction<Partial<GameData>>>,
  screen: string
) {
  switch (screen) {
  case "result":
    break;

  default:
    renderNewGame({ setGameData });
    break;
  }

  setGameData((old) => {
    const newer = { ...old, screen: screen };
    return newer as GameData;
  });
}

export function saveAnswer({
  setGameData,
  questionData,
}: {
  setGameData: React.Dispatch<React.SetStateAction<Partial<GameData>>>;
  questionData: QuestionData;
}) {
  const myAnswer = Number(questionData.answer);
  const correctAnswer = Number(questionData.correctAnswer);
  const isCorrect =
    questionData.answer === ""
      ? false
      : myAnswer === correctAnswer
        ? true
        : false;
  const problemData = questionData.problemData;

  const writeSolution = () => {
    const problemValues = problemData.map((box) => {
      return box.value;
    });
    return problemValues.join(" ");
  };

  setGameData((old) => {
    const newer = { ...old } as GameData;
    newer.answers[questionData.id - 1].isCorrect = isCorrect;
    newer.answers[questionData.id - 1].timeSpent =
      (old as any).config.questionTime - questionData.timeLeft;
    newer.answers[questionData.id - 1].myAnswer = myAnswer;
    newer.answers[questionData.id - 1].correctAnswer = correctAnswer;
    newer.answers[questionData.id - 1].solution = writeSolution();
    return newer;
  });
}

export function saveConfigs({
  setGameData,
  configData,
  setAlert,
}: {
  setGameData: React.Dispatch<React.SetStateAction<Partial<GameData>>>;
  configData: ConfigData;
  setAlert: React.Dispatch<React.SetStateAction<Partial<Alert>>>;
}) {
  //Check empty entries
  if (configData.rangeOfNumbers.from === "")
    configData.rangeOfNumbers.from = defaultGameConfig.rangeOfNumbers.from;
  if (configData.rangeOfNumbers.to === "")
    configData.rangeOfNumbers.to = defaultGameConfig.rangeOfNumbers.to;
  if (Number(configData.numberOfQuestions) === 0)
    configData.numberOfQuestions = defaultGameConfig.numberOfQuestions;
  if (Number(configData.questionTime) === 0)
    configData.questionTime = defaultGameConfig.questionTime;

  //Check range of numbers
  if (configData.rangeOfNumbers.from > configData.rangeOfNumbers.to) {
    setAlert({
      show: true,
      message:
        "Range of numbers:\n\nMin value can't be greater then max value!",
      flag: "yellow",
    });
    return false;
  }

  //Check allowed operators
  const allowedOperators = Object.values(configData.allowedOperators);
  let isOperatorChecked = false;
  for (const value of allowedOperators) {
    if (value === true) {
      isOperatorChecked = true;
      break;
    }
  }
  if (!isOperatorChecked) {
    setAlert({
      show: true,
      message:
        "Allowed operations:\n\nMust have at least one operation checked!",
      flag: "yellow",
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
        rangeOfNumbers: {
          from: Number(configData.rangeOfNumbers.from),
          to: Number(configData.rangeOfNumbers.to),
        },
      },
    };
    return newer;
  });
  return true;
}
