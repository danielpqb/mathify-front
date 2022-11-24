import { useContext, useEffect } from "react";
import styled from "styled-components";
import Answers from "../../../components/common/Answers/Answers";
import Problem from "../../../components/common/Problem/Problem";
import Keyboard from "../../../components/common/Keyboard/Keyboard";
import { AppContext } from "../../../contexts/contexts";
import { renderNewQuestion, saveAnswer } from "../../../functions/game-functions";

export default function Question() {
  const { gameData, setGameData, questionData, setQuestionData } = useContext(AppContext);

  const timerWidth = window.innerWidth - 80;

  const { timeLeft, lastTickTimestamp } = questionData;
  const _questionData = questionData;

  const configGameData = gameData?.config;

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setQuestionData((old) => {
          const now = Date.now();
          return {
            ...old,
            timeLeft: Math.max(timeLeft - (now - (lastTickTimestamp ? lastTickTimestamp : now)), 0),
            lastTickTimestamp: now,
          };
        });
      }, 50);

      return () => clearInterval(interval);
    }

    if (timeLeft === 0) {
      saveAnswer({ setGameData, questionData: _questionData, isCorrect: false });

      return renderNewQuestion({
        setQuestionData: setQuestionData,
        configGameData: configGameData,
        setGameData: setGameData,
        type: "timeEnded",
        isFirst: false,
      });
    }

    return renderNewQuestion({
      setQuestionData: setQuestionData,
      configGameData: configGameData,
      setGameData: setGameData,
      type: "firstRendering",
      isFirst: true,
    });
  }, [_questionData, configGameData, lastTickTimestamp, setGameData, setQuestionData, timeLeft]);

  return (
    <Container>
      <TopInfo>
        <Problem />
      </TopInfo>

      <Info>
        <Keyboard />
        <Timer timerProgress={(timerWidth * timeLeft) / gameData?.config?.questionTime} />
        <Answers />
      </Info>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;
    justify-content: flex-end;

    height: 100%;
  }
`;

const TopInfo = styled.div`
  & {
    height: 100%;
  }
`;

const Info = styled.div`
  & {
    flex-direction: column;

    height: fit-content;

    justify-self: flex-end;
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

    border: 2px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    margin: 15px 0px;

    @media (max-height: 400px) {
      margin-bottom: 0px;
    }
  }
`;
