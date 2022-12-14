import { defaultGameConfig } from "constants/game-constants";
import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import { AppStates, UserData } from "../types/app-types";

const AppContext = createContext({} as AppStates);

export const useAppContext = () => {
  return useContext(AppContext);
};

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState({});
  const [alert, setAlert] = useState({});
  const [counter, setCounter] = useState({});
  const [reloadApp, setReloadApp] = useState(0);
  const [gameData, setGameData] = useState({});
  const [questionData, setQuestionData] = useState({});
  const [configData, setConfigData] = useState({});

  useEffect(() => {
    setConfigData((old) => {
      const newer = { ...old, ...defaultGameConfig };

      return newer;
    });
  }, [setConfigData]);

  const states = {
    userData,
    setUserData,
    alert,
    setAlert,
    counter,
    setCounter,
    reloadApp,
    setReloadApp,
    gameData,
    setGameData,
    questionData,
    setQuestionData,
    configData,
    setConfigData,
  };

  return <AppContext.Provider value={states as any}>{children}</AppContext.Provider>;
}
