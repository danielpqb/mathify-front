import { ReactNode, useEffect, useMemo } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";

import Counter from "./components/common/Counter/Counter";
import ProtectedRoute from "./components/common/ProtectedRoute";

import { requestUserData } from "./global-functions";
import { useAppContext } from "./contexts/AppContext";
import Home from "./components/pages/Home";
import { useConsoleLogVariables } from "global-hooks";
import Alert from "components/common/Alert/Alert";

export default function App() {
  const { setUserData, alert, counter } = useAppContext();

  useConsoleLogVariables();

  useEffect(() => {
    const localToken = localStorage.getItem("userToken");
    if (localToken) {
      requestUserData(localToken, setUserData);
    }
  }, [setUserData]);

  return (
    <>
      {alert?.show && <Alert />}
      {counter?.show && <Counter />}

      <Background>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Home />} />
            <Route
              element={
                <ProtectedRoute token={localStorage.getItem("userToken")} />
              }
            >
              <Route
                path="*"
                element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Background>
    </>
  );
}

function Background({ children }: { children: ReactNode }) {
  return <Layer1>{children}</Layer1>;
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
