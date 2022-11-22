import promiseRetry from "promise-retry";
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

export function renderNewGame(setGameData) {
  const config = { questionTime: 15000, numberOfQuestions: 10 };

  const answers = () => {
    const answers = [];
    for (let i = 1; i <= config.numberOfQuestions; i++) {
      answers.push({ id: i });
    }

    return answers;
  };

  setGameData((old) => {
    const _new = {
      ...old,
      screen: "question",
      config: config,
      answers: answers(),
    };
    return _new;
  });
}
