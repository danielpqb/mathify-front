import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";

import Alert from "./common/Alert/Alert";
import ProtectedRoute from "./common/ProtectedRoute";
import { GlobalStyle } from "../styles/global-styles";
import { AppContext } from "../contexts/contexts";
import { requestUserData } from "../functions/app-functions";
import Config from "./pages/Config/Config";
import Game from "./pages/Game/Game";

export default function App() {
  const [userData, setUserData] = useState({});
  const [gameData, setGameData] = useState({});
  const [questionData, setQuestionData] = useState({});
  const [alert, setAlert] = useState({});
  const [reloadApp, setReloadApp] = useState(false);

  const isGameStarted = gameData?.isGameStarted;

  useEffect(() => {
    const localToken = localStorage.getItem("userToken");
    if (localToken) {
      requestUserData(localToken, setUserData, setAlert);
    }
  }, [setUserData, reloadApp]);

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
              <Route path="/" element={isGameStarted ? <Game /> : <Config />} />
              <Route path="/sign-up" element={<></>} />
              <Route element={<ProtectedRoute token={localStorage.getItem("userToken")} setAlert={setAlert} />}>
                <Route path="/game" element={<></>} />
                <Route path="*" element={<Navigate to="/" />} />
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

    padding: 20px;

    background-color: #afafaf;
  }
`;

const Layer2 = styled.div`
  & {
    background-color: #252525;

    border-radius: 20px;

    padding-top: 80px;
  }
`;
