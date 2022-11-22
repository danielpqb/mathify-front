import { useContext, useEffect } from "react";
import styled from "styled-components";
import Answers from "../../../common/Answers/Answers";
import Problem from "../../../common/Problem/Problem";
import Keyboard from "../../../common/Keyboard/Keyboard";
import { AppContext } from "../../../../contexts/contexts";
import { renderNewQuestion } from "../../../../functions/game-functions";

export default function Question() {
  const { gameData, setGameData, questionData, setQuestionData } = useContext(AppContext);

  const timerWidth = window.innerWidth - 40;

  const { timeLeft, id, startTimestamp } = questionData;

  const configGameData = gameData?.config;

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setQuestionData((old) => {
          return {
            ...old,
            timeLeft: Math.max(timeLeft - 50, 0),
          };
        });
      }, 50);

      return () => clearInterval(interval);
    }

    if (timeLeft === 0) {
      setGameData((old) => {
        const _new = { ...old };
        _new.answers[id - 1].isCorrect = false;
        _new.answers[id - 1].timeSpent = Date.now() - startTimestamp;
        return _new;
      });

      return renderNewQuestion({
        setQuestionData: setQuestionData,
        configGameData: configGameData,
        setGameData: setGameData,
        type: "timeEnded",
      });
    }

    return renderNewQuestion({
      setQuestionData: setQuestionData,
      configGameData: configGameData,
      setGameData: setGameData,
      type: "firstRendering",
    });
  }, [configGameData, id, setGameData, setQuestionData, startTimestamp, timeLeft]);

  return (
    <Container>
      <Problem />
      <Keyboard />

      <Info>
        <Timer timerProgress={(timerWidth * timeLeft) / gameData?.config?.questionTime} />
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
