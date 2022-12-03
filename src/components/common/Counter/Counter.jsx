import { useContext, useEffect } from "react";
import styled from "styled-components";

import { AppContext } from "../../../contexts/contexts";

export default function Counter() {
  const { counter, setCounter } = useContext(AppContext);

  const { doThisWhenOver = () => {}, inicialValue = 5000, tick = 2000 } = counter;

  useEffect(() => {
    if (inicialValue > 0) {
      const interval = setInterval(() => {
        setCounter((old) => {
          return { ...old, inicialValue: Math.max(old.inicialValue - tick, 0) };
        });
      }, tick);

      return () => {
        clearInterval(interval);
      };
    }

    if (inicialValue === 0) {
      setCounter((old) => {
        return { ...old, show: false };
      });
      doThisWhenOver();
    }
  }, [doThisWhenOver, inicialValue, setCounter, tick]);

  return (
    <>
      <Blur />

      <Container>{inicialValue / 1000}</Container>
    </>
  );
}

const Container = styled.div`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 21;

    font-family: "Arial";
    font-size: 30vw;
    width: 90vw;
    height: fit-content;
    padding: 15px;
  }
`;

const Blur = styled.div`
  && {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 20;
    background: rgba(0, 0, 0, 0.7);
    filter: blur(1);
  }
`;
