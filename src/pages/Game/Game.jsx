import { useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../../contexts/contexts";
import { renderNewGame } from "../../functions/app-functions";
import Question from "./components/Question";
import Result from "./components/Result/Result";

export default function Game() {
  const { gameData, setGameData } = useContext(AppContext);

  useEffect(() => {
    renderNewGame(setGameData);
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
  }
`;
