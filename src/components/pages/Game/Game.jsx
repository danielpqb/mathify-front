import { useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../../../contexts/contexts";
import { renderNewGame } from "../../../functions/app-functions";
import Config from "./screens/Config";
import Question from "./screens/Question";
import Result from "./screens/Result";

export default function Game() {
  const { gameData, setGameData } = useContext(AppContext);

  useEffect(() => {
    renderNewGame(setGameData);
  }, [setGameData]);

  const screen = gameData?.screen;

  let render;
  switch (screen) {
    case "config":
      render = <Config />;
      break;
    case "result":
      render = <Result />;
      break;

    default:
      render = <Question />;
      break;
  }

  return <Container>{render}</Container>;
}

const Container = styled.div`
  & {
  }
`;
