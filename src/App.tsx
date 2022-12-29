import { ReactNode } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";

import Counter from "./components/common/Counter/Counter";
import ProtectedRoute from "./components/common/ProtectedRoute";

import { useAppContext } from "./contexts/AppContext";
import { useConsoleLogVariables, useKeyboardListener } from "global-hooks";
import Alert from "components/common/Alert/Alert";
import Game from "components/pages/Game/Game";
import Config from "components/pages/Game/Config/Config";
import useToken from "hooks/api/useToken";
import SignIn from "components/pages/SignIn";
import SignUp from "components/pages/SignUp";
import Home from "components/pages/Home/Home";

export default function App() {
  const { gameData, alert, counter } = useAppContext();

  const token = useToken();

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
              path="/game"
              element={isGameStarted ? <Game /> : <Config />}
            />
            <Route
              path="/home"
              element={<Home />}
            />
            <Route
              path="/sign-in"
              element={<SignIn />}
            />
            <Route
              path="/sign-up"
              element={<SignUp />}
            />
            <Route
              element={
                <ProtectedRoute
                  token={token}
                  hasTokenPath={"/home"}
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

    position: relative;
    overflow: hidden;

    @media (max-height: 400px) {
      padding: 0px;
      border-radius: 0px;
    }
  }
`;
