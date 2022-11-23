import { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../../contexts/contexts";
import { renderNewGame } from "../../../functions/app-functions";
import Game from "../Game/Game";

export default function Config() {
  const { setGameData } = useContext(AppContext);
  const [isGameStarted, setIsGameStarted] = useState(false);

  return (
    <Container>
      {isGameStarted ? (
        <Game />
      ) : (
        <StartButton
          onClick={() => {
            renderNewGame(setGameData);
            setIsGameStarted((old) => !old);
          }}
        >
          Start
        </StartButton>
      )}
    </Container>
  );
}

const Container = styled.div`
  & {
  }
`;

const StartButton = styled.div`
  & {
    background-color: #213a7e;

    border-radius: 10px;

    border: 4px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    max-width: 150px;
    height: 60px;

    justify-self: center;
  }
`;
