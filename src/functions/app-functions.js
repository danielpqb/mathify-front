import promiseRetry from "promise-retry";
import { defaultGameConfig } from "../constants/game-constants";
import getUserDataByToken from "../services/mathify-api";
import { showAlertOnError } from "./api-functions";

export function requestUserData(localToken, setUserData, setAlert) {
  promiseRetry(
    () => {
      return getUserDataByToken(localToken);
    },
    (res) => {
      delete res.data.message;
      setUserData(res.data);
    },
    (error) => {
      showAlertOnError({ error, setAlert });
    }
  );
}

export function renderNewGame(setGameData, configData) {
  const config = configData
    ? configData
    : { ...defaultGameConfig, questionTime: defaultGameConfig.questionTime * 1000 };

  const answers = () => {
    const answers = [];
    for (let i = 1; i <= config.numberOfQuestions; i++) {
      answers.push({ id: i });
    }

    return answers;
  };

  setGameData((old) => {
    const newer = {
      ...old,
      screen: "question",
      config: old.config ? old.config : config,
      answers: answers(),
    };
    return newer;
  });
}
