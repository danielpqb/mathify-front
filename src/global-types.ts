import * as GameTypes from "components/pages/Game/types";
import * as AlertTypes from "./components/common/Alert/types";
import * as CouterTypes from "./components/common/Counter/types";

export type AppStates = {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<Partial<UserData>>>;
  alert: AlertTypes.Alert;
  setAlert: React.Dispatch<React.SetStateAction<Partial<AlertTypes.Alert>>>;
  counter: CouterTypes.Counter;
  setCounter: React.Dispatch<React.SetStateAction<CouterTypes.Counter>>;
  reloadApp: number;
  setReloadApp: React.Dispatch<React.SetStateAction<number>>;
  gameData: GameTypes.GameData;
  setGameData: React.Dispatch<React.SetStateAction<Partial<GameTypes.GameData>>>;
  questionData: GameTypes.QuestionData;
  setQuestionData: React.Dispatch<React.SetStateAction<Partial<GameTypes.QuestionData>>>;
  configData: GameTypes.ConfigData;
  setConfigData: React.Dispatch<React.SetStateAction<Partial<GameTypes.ConfigData>>>;
};

export type UserData = {
  token: string;
};
