import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../contexts/contexts";
import { renderNewGame } from "../../functions/app-functions";
import ConfigTable from "./components/ConfigTable";

export default function Config() {
  const { setGameData } = useContext(AppContext);

  return (
    <Container>
      <ConfigTable />

      <StartButton
        onClick={() => {
          renderNewGame(setGameData);
          setGameData((old) => {
            return { ...old, isGameStarted: true };
          });
        }}
      >
        Start
      </StartButton>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;
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
