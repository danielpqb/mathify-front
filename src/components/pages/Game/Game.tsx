import { useAppContext } from "contexts/AppContext";
import { renderNewGame } from "functions/app-functions";
import { useEffect } from "react";
import styled from "styled-components";
import Question from "./Question";
import Result from "./Result/Result";

export default function Game() {
  const { gameData, setGameData } = useAppContext();

  useEffect(() => {
    renderNewGame({ setGameData });
  }, [setGameData]);

  const screen = gameData?.screen;

  let render;
  switch (screen) {
  case "result":
    render = <Result />;
    break;

  case "question":
    render = <Question />;
    break;

  default:
    render = `Game screen '${screen}' not found.`;
    break;
  }

  return <Container>{render}</Container>;
}

const Container = styled.div`
  & {
    text-align: center;
  }
`;
