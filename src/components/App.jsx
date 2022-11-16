import React, { useEffect } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";

import Alert from "./common/Alert/Alert";
import ProtectedRoute from "./common/ProtectedRoute";
import Game from "./screens/Game";
import { GlobalStyle } from "../styles/global-styles";
import { AppContext } from "../contexts/contexts";
import { createErrorMessage } from "../functions/api-functions";
import getUserDataByToken from "../services/mathify-api";
import { promiseRetry } from "../services/promise-retry";

export default function App() {
  const [userData, setUserData] = useState({});
  const [alert, setAlert] = useState({});
  const [reloadApp, setReloadApp] = useState(false);

  useEffect(() => {
    const localToken = localStorage.getItem("userToken");
    if (localToken) {
      promiseRetry(
        getUserDataByToken(localToken),
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
      <AppContext.Provider value={{ reloadApp, setReloadApp, alert, setAlert, userData, setUserData }}>
        {alert.show && <Alert />}
        <Container>
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
        </Container>
      </AppContext.Provider>
    </>
  );
}

const Container = styled.div`
  & {
    width: 300px;
    height: 300px;

    background-color: red;
  }
`;
