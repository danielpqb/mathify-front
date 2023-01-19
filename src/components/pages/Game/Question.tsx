import { useEffect } from "react";
import styled from "styled-components";
import Answers from "../../others/Answers/Answers";
import Problem from "../../others/Problem/Problem";
import Keyboard from "../../others/Keyboard/Keyboard";
import {
  renderNewQuestion,
  saveAnswer,
} from "../../../functions/game-functions";
import { useAppContext } from "contexts/AppContext";
import { Animation, useAnimate } from "react-animate-with-css";

export default function Question() {
  const { gameData, setGameData, questionData, setQuestionData } =
    useAppContext();
  const { animate } = useAnimate();

  const timerMaxWidth =
    window.innerWidth -
    (window.matchMedia("(min-height: 400px)").matches ? 10 : 0);

  const { timeLeft, lastTickTimestamp } = questionData;
  const _questionData = questionData;

  const configGameData = gameData?.config;

  const timerWidth =
    (timerMaxWidth * timeLeft) / (configGameData?.questionTime as number);

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setQuestionData((old) => {
          const now = Date.now();
          return {
            ...old,
            timeLeft: Math.max(
              timeLeft - (now - (lastTickTimestamp ? lastTickTimestamp : now)),
              0
            ),
            lastTickTimestamp: now,
          };
        });
      }, 50);

      return () => clearInterval(interval);
    }

    if (timeLeft === 0) {
      saveAnswer({ setGameData, questionData: _questionData });

      if (Number(questionData.answer) !== Number(questionData.correctAnswer)) {
        animate({ id: "gameScreen", name: "headShake", duration: 600 });
      }

      return renderNewQuestion({
        setQuestionData: setQuestionData,
        configGameData: configGameData,
        setGameData: setGameData,
        type: "timeEnded",
        isFirst: false,
      });
    }
  }, [
    _questionData,
    configGameData,
    lastTickTimestamp,
    setGameData,
    setQuestionData,
    timeLeft,
  ]);

  return (
    <Container>
      <Animation id="gameScreen">
        <TopInfo>
          <Problem />
        </TopInfo>

        <Info>
          <Keyboard />
          <Timer style={{ width: `${timerWidth}px` }} />
          <Answers />
        </Info>
      </Animation>
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

const Timer = styled.div`
  & {
    align-self: flex-start;
    height: 10px;
    background-color: var(--question-timer-color);

    border: 2px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    margin-top: 15px;
    margin-bottom: 5px;

    @media (max-height: 400px) {
      margin-bottom: 0px;
    }
  }
`;
