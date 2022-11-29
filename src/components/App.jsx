import React, { useEffect, useMemo } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";

import Alert from "./common/Alert/Alert";
import ProtectedRoute from "./common/ProtectedRoute";
import { GlobalStyle } from "../styles/global-styles";
import { AppContext } from "../contexts/contexts";
import { requestUserData } from "../functions/app-functions";
import Game from "../pages/Game/Game";
import Config from "../pages/Game/components/Config/Config";

export default function App() {
  const [userData, setUserData] = useState({});
  const [gameData, setGameData] = useState({});
  const [questionData, setQuestionData] = useState({});
  const [alert, setAlert] = useState({});
  const [reloadApp, setReloadApp] = useState(0);

  const isGameStarted = gameData?.isGameStarted;

  useMemo(() => {
    console.clear();
    console.log("-----------------------");
    console.log("gameData (dependency)");
    console.log(gameData);
    console.log("");
    console.log("userData (dependency)");
    console.log(userData);
    console.log("");

    setQuestionData((old) => {
      console.log("questionData");
      console.log(old);
      console.log("");
      return old;
    });

    setReloadApp((old) => {
      console.log("Dependencies Reloads:", old + 1);
      console.log("-----------------------");
      return old + 1;
    });
  }, [gameData, userData, setQuestionData]);

  useEffect(() => {
    const localToken = localStorage.getItem("userToken");
    if (localToken) {
      requestUserData(localToken, setUserData, setAlert);
    }
  }, [setUserData]);

  return (
    <>
      <GlobalStyle />
      <AppContext.Provider
        value={{
          reloadApp,
          setReloadApp,
          alert,
          setAlert,
          userData,
          setUserData,
          gameData,
          setGameData,
          questionData,
          setQuestionData,
        }}
      >
        {alert.show && <Alert />}
        <Background>
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={isGameStarted ? <Game /> : <Config />}
              />
              <Route
                path="/sign-up"
                element={<></>}
              />
              <Route
                element={
                  <ProtectedRoute
                    token={localStorage.getItem("userToken")}
                    setAlert={setAlert}
                  />
                }
              >
                <Route
                  path="*"
                  element={<Navigate to="/" />}
                />
              </Route>
            </Routes>
          </BrowserRouter>
        </Background>
      </AppContext.Provider>
    </>
  );
}

function Background({ children }) {
  return (
    <>
      <Layer1>
        <Layer2>{children}</Layer2>
      </Layer1>
    </>
  );
}

const Layer1 = styled.div`
  & {
    width: 100vw;

    padding: 5px;

    background-color: var(--background-a-color);

    @media (max-height: 400px) {
      padding: 0px;
    }
  }
`;

const Layer2 = styled.div`
  & {
    background-color: var(--background-b-color);

    border-radius: 20px;

    padding: 10px 0px;

    @media (max-height: 400px) {
      padding: 0px;
      border-radius: 0px;
    }
  }
`;
