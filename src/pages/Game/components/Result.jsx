import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../contexts/contexts";
import { changeScreen, renderNewQuestion } from "../../../functions/game-functions";

export default function Result() {
  const { gameData, setGameData, setQuestionData } = useContext(AppContext);

  const answers = gameData?.answers;

  const configGameData = gameData?.config;

  return (
    <Container>
      {answers?.map((element, index) => {
        const timeSpent = (element.timeSpent / 1000).toFixed(3);

        return (
          <ResultLine
            key={index}
          >{`id: ${element.id} | isCorrect: ${element.isCorrect} | timeSpent: ${timeSpent}s`}</ResultLine>
        );
      })}

      <Restart
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
      </Restart>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;
  }
`;

const ResultLine = styled.div`
  & {
    font-size: calc(var(--fontsize) - 10px);

    background-color: #213a7e;

    border-radius: 10px;

    border: 4px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    width: 90%;
    height: 60px;

    justify-self: center;
  }
`;

const Restart = styled.div`
  & {
    background-color: #7e7c21;

    border-radius: 10px;

    border: 4px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    max-width: 150px;
    height: 60px;

    justify-self: center;
  }
`;