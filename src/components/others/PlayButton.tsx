import Button from "components/common/Dummy/Button";
import { ConfigData } from "components/pages/Game/types";
import { useAppContext } from "contexts/AppContext";
import { renderNewGame } from "functions/app-functions";
import { renderNewQuestion, saveConfigs } from "functions/game-functions";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function PlayButton() {
  const navigate = useNavigate();

  const {
    setGameData,
    configData,
    setAlert,
    setCounter,
    setQuestionData,
  } = useAppContext();

  return (
    <Container
      onClick={() => {
        const isSaved = saveConfigs({ setGameData, configData, setAlert });
        if (isSaved) {
          renderNewGame({ setGameData });
          setCounter({
            show: true,
            inicialValue: 3000,
            tick: 1000,
            doThisWhenOver: () => {
              setGameData((old) => {
                renderNewQuestion({
                  setQuestionData: setQuestionData,
                  configGameData: old.config as ConfigData,
                  setGameData: setGameData,
                  type: "firstRendering",
                  isFirst: true,
                });
                return old;
              });
              navigate("/game");
            },
          });
        }
      }}
    >
      Play
    </Container>
  );
}

const Container = styled(Button)`
  & {
  }
`;
