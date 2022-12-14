import { useAppContext } from "contexts/AppContext";
import { useEffect } from "react";
import styled from "styled-components";
import { defaultGameConfig } from "../../../../constants/game-constants";
import { renderNewGame } from "../../../../functions/app-functions";
import { saveConfigs, renderNewQuestion } from "../../../../functions/game-functions";
import ConfigTable from "./ConfigTable/ConfigTable";

export default function Config() {
  const { setGameData, setConfigData, configData, setAlert, setCounter, setQuestionData } = useAppContext();

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
          const isSaved = saveConfigs({ setGameData, configData, setAlert });
          if (isSaved) {
            renderNewGame({ setGameData });
            setGameData((old) => {
              return { ...old, isGameStarted: true };
            });
            setCounter({
              show: true,
              inicialValue: 3000,
              tick: 1000,
              doThisWhenOver: () => {
                setGameData((old) => {
                  renderNewQuestion({
                    setQuestionData: setQuestionData,
                    configGameData: old.config,
                    setGameData: setGameData,
                    type: "firstRendering",
                    isFirst: true,
                  });
                  return old;
                });
              },
            });
          }
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
    background-color: var(--game-start-buttom-color);

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
