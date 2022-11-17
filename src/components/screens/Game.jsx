import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../contexts/contexts";

export default function Game() {
  const { setAlert, gameData } = useContext(AppContext);

  const timerWidth = window.innerWidth - 40;

  const [timerTime, setTimerTime] = useState(gameData.config.questionTime);

  useEffect(() => {
    if (timerTime > 0) {
      const interval = setInterval(() => {
        setTimerTime(Math.max(timerTime - 50, 0));
      }, 50);
      return () => clearInterval(interval);
    }

    setAlert({
      show: true,
      message: "Time has ended!",
      type: 0,
      doThis: () => {},
      color: "rgba(200,0,0)",
      icon: "alert-circle",
    });
  }, [setAlert, timerTime]);

  return (
    <Container>
      <Question></Question>
      <Timer timerProgress={(timerWidth * timerTime) / gameData.config.questionTime}></Timer>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;

    padding-bottom: 20px;
  }
`;

const Question = styled.div`
  & {
    flex-direction: column;
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
