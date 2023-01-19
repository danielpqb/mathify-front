import { GameDataAnswer } from "components/pages/Game/types";
import { useEffect, useMemo } from "react";
import { Animation, useAnimate } from "react-animate-with-css";
import styled from "styled-components";

export default function Answer({
  answerData,
}: {
  answerData: Partial<GameDataAnswer>;
}) {
  const { animate } = useAnimate();

  let style;
  if (answerData.isCorrect === true) {
    style = { backgroundColor: "var(--game-answers-true-color)" };
  }
  else if (answerData.isCorrect === false) {
    style = { backgroundColor: "var(--game-answers-false-color)" };
  }
  else {
    style = { backgroundColor: "var(--game-answers-none-color)" };
  }

  useEffect(() => {
    if (answerData.isCorrect) {
      console.log("id", answerData.id);
      animate({
        id: `answer-circle-${answerData.id}`,
        name: "flip",
      });
    }
    else{
      animate({
        id: `answer-circle-${answerData.id}`,
        name: "bounceIn",
      });
    }
  }, [style.backgroundColor]);

  return (
    <Animation
      id={`answer-circle-${answerData.id}`}
      style={{ height: "fit-content", width: "fit-content" }}
    >
      <Container style={style}>{answerData.id}</Container>
    </Animation>
  );
}

const Container = styled.div`
  & {
    width: 25px;
    height: 25px;

    border-radius: 50%;

    margin: 3px;

    font-size: 14px;

    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    justify-self: center;
  }
`;
