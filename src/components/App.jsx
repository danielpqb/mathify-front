import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";

import Alert from "./common/Alert/Alert";
import ProtectedRoute from "./common/ProtectedRoute";
import Game from "./pages/Game/Game";
import { GlobalStyle } from "../styles/global-styles";
import { AppContext } from "../contexts/contexts";
import { createErrorMessage } from "../functions/api-functions";
import getUserDataByToken from "../services/mathify-api";
import { promiseRetry } from "../services/promise-retry";

export default function App() {
  const [userData, setUserData] = useState({});
  const [gameData, setGameData] = useState({});
  const [alert, setAlert] = useState({});
  const [reloadApp, setReloadApp] = useState(false);

  useEffect(() => {
    const localToken = localStorage.getItem("userToken");
    if (localToken) {
      promiseRetry(
        () => {
          return getUserDataByToken(localToken);
        },
        (res) => {
          delete res.data.message;
          setUserData(res.data);
        },
        (err) => {
          const message = createErrorMessage(err);

          setAlert({
            show: true,
            message: message,
            type: 0,
            doThis: () => {},
            color: "rgba(200,0,0)",
            icon: "alert-circle",
          });
        }
      );
    }
  }, [setUserData, reloadApp]);

  return (
    <>
      <GlobalStyle />
      <AppContext.Provider
        value={{ reloadApp, setReloadApp, alert, setAlert, userData, setUserData, gameData, setGameData }}
      >
        {alert.show && <Alert />}
        <Background>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Game />} />
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
    height: 100vh;

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
