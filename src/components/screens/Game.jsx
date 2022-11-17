import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../../contexts/contexts";
import { createProblemData } from "../../functions/app-functions";
import Keyboard from "../common/Keyboard/Keyboard";
import Problem from "../common/Problem/Problem";

export default function Game() {
  const { setAlert, gameData, setGameData } = useContext(AppContext);

  const timerWidth = window.innerWidth - 40;

  const questionTime = gameData?.currentQuestion?.time;

  useEffect(() => {
    if (questionTime > 0) {
      const interval = setInterval(() => {
        setGameData({
          ...gameData,
          currentQuestion: { ...gameData.currentQuestion, time: Math.max(questionTime - 50, 0) },
        });
      }, 50);
      return () => clearInterval(interval);
    }

    setGameData({
      ...gameData,
      currentQuestion: { problemData: createProblemData(), answer: "", time: gameData.config.questionTime },
    });

    // setAlert({
    //   show: true,
    //   message: "Time has ended!",
    //   type: 0,
    //   doThis: () => {},
    //   color: "rgba(200,0,0)",
    //   icon: "alert-circle",
    // });
  }, [gameData, questionTime, setAlert, setGameData]);

  return (
    <Container>
      <Question>
        <Problem />
        <Keyboard />
        <Timer timerProgress={(timerWidth * questionTime) / gameData.config.questionTime} />
      </Question>
    </Container>
  );
}

const Container = styled.div`
  & {
  }
`;

const Question = styled.div`
  & {
    flex-direction: column;

    justify-content: space-between;
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
