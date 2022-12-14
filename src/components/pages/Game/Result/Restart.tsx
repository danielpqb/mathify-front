import { useAppContext } from "contexts/AppContext";
import { changeScreen, renderNewQuestion } from "functions/game-functions";
import styled from "styled-components";

export default function Restart() {
  const { gameData, setGameData, setQuestionData, setCounter } =
    useAppContext();

  const configGameData = gameData?.config;

  return (
    <Container
      onClick={() => {
        setCounter({
          show: true,
          inicialValue: 3000,
          tick: 1000,
          doThisWhenOver: () => {
            renderNewQuestion({
              setQuestionData: setQuestionData,
              configGameData: configGameData,
              setGameData: setGameData,
              type: "restartingGame",
              isFirst: true,
            });
            changeScreen(setGameData, "question");
          },
        });
      }}
    >
      Restart
    </Container>
  );
}

const Container = styled.div`
  & {
    background-color: var(--game-restart-buttom-color);

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
