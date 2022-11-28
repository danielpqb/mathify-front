import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../../../contexts/contexts";
import { changeScreen, renderNewQuestion } from "../../../../../functions/game-functions";

export default function Restart() {
  const { gameData, setGameData, setQuestionData } = useContext(AppContext);

  const configGameData = gameData?.config;

  return (
    <Container
      onClick={() => {
        renderNewQuestion({
          setQuestionData: setQuestionData,
          configGameData: configGameData,
          setGameData: setGameData,
          type: "restartingGame",
          isFirst: true,
        });
        changeScreen(setGameData, "question");
      }}
    >
      Restart
    </Container>
  );
}

const Container = styled.div`
  & {
    background-color: #7e7c21;

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
