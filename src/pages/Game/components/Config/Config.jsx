import { useContext, useEffect } from "react";
import styled from "styled-components";
import { defaultGameConfig } from "../../../../constants/game-constants";
import { AppContext } from "../../../../contexts/contexts";
import { renderNewGame } from "../../../../functions/app-functions";
import { saveConfigs } from "../../../../functions/game-functions";
import ConfigTable from "./components/ConfigTable/ConfigTable";

export default function Config() {
  const { setGameData, setConfigData, configData } = useContext(AppContext);

  useEffect(() => {
    setConfigData((old) => {
      const newer = { ...old, ...defaultGameConfig };

      return newer;
    });
  }, [setConfigData]);

  return (
    <Container>
      <ConfigTable />

      <StartButton
        onClick={() => {
          saveConfigs(setGameData, configData);
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
    min-height: 50px;
    max-height: 50px;

    justify-self: center;
    margin-top: 10px;
  }
`;
