import { ReactNode, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";

import Counter from "./components/common/Counter/Counter";
import ProtectedRoute from "./components/common/ProtectedRoute";

import { useAppContext } from "./contexts/AppContext";
import { useConsoleLogVariables, useKeyboardListener } from "global-hooks";
import Alert from "components/common/Alert/Alert";
import Game from "components/pages/Game/Game";
import Config from "components/pages/Game/Config/Config";

export default function App() {
  const { gameData, setUserData, alert, counter } = useAppContext();

  const isGameStarted = gameData?.isGameStarted;

  //useConsoleLogVariables();
  useKeyboardListener();

  return (
    <>
      {alert?.show && <Alert />}
      {counter?.show && <Counter />}

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
            <Route element={<ProtectedRoute token={localStorage.getItem("userToken")} />}>
              <Route
                path="*"
                element={<Navigate to="/" />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Background>
    </>
  );
}

function Background({ children }: { children: ReactNode }) {
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

    background-color: var(--background-a-color);

    @media (max-height: 400px) {
      padding: 0px;
    }
  }
`;

const Layer2 = styled.div`
  & {
    border-radius: 20px;

    padding: 10px 0px;
    border: 3px solid var(--background-border-color);

    @media (max-height: 400px) {
      padding: 0px;
      border-radius: 0px;
    }
  }
`;
