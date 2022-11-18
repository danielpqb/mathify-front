import { useContext, useEffect } from "react";
import styled from "styled-components";
import Answers from "../../../common/Answers/Answers";
import Problem from "../../../common/Problem/Problem";
import Keyboard from "../../../common/Keyboard/Keyboard";
import { AppContext } from "../../../../contexts/contexts";
import { renderNewQuestion } from "../../../../functions/app-functions";

export default function Question() {
  const { setAlert, gameData, setGameData } = useContext(AppContext);

  const timerWidth = window.innerWidth - 40;

  const questionTime = gameData?.currentQuestion?.timeLeft;

  useEffect(() => {
    if (questionTime > 0) {
      const interval = setInterval(() => {
        setGameData((old) => {
          return {
            ...old,
            currentQuestion: { ...old.currentQuestion, timeLeft: Math.max(questionTime - 50, 0) },
          };
        });
      }, 50);

      return () => clearInterval(interval);
    }

    renderNewQuestion(setGameData);
  }, [questionTime, setAlert, setGameData]);

  return (
    <Container>
      <Problem />
      <Keyboard />

      <Info>
        <Timer timerProgress={(timerWidth * questionTime) / gameData?.config?.questionTime} />
        <Answers />
      </Info>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;

    justify-content: space-between;
  }
`;

const Info = styled.div`
  & {
    flex-direction: column;

    justify-content: flex-end;
  }
`;

const Timer = styled.div.attrs(({ timerProgress }) => ({
  style: {
    width: timerProgress + "px",
  },
}))`
  & {
    align-self: flex-start;
    height: 10px;
    background-color: #c50000;
  }
`;
