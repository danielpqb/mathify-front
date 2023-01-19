import { ReactNode } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";

import Counter from "./components/common/Counter/Counter";
import ProtectedRoute from "./components/common/ProtectedRoute";

import { useAppContext } from "./contexts/AppContext";
import Alert from "components/common/Alert/Alert";
import Game from "components/pages/Game/Game";
import Config from "components/pages/Game/Config/Config";
import SignIn from "components/pages/SignIn";
import SignUp from "components/pages/SignUp";
import Home from "components/pages/Home/Home";
import { useUserContext } from "contexts/UserContext";
import { useKeyboardListener } from "hooks/useKeyboardListener";

export default function App() {
  const { questionData, alert, counter } = useAppContext();

  const { token } = useUserContext();

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
              path="/game"
              element={
                questionData.problemData ? <Game /> : <Navigate to="/home" />
              }
            />
            <Route
              path="/settings"
              element={<Config />}
            />
            <Route
              element={
                <ProtectedRoute
                  token={token}
                  noTokenPath={"/home"}
                />
              }
            >
              <Route
                path="/user"
                element={<></>}
              />
              <Route
                path="*"
                element={<Navigate to="/home" />}
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
