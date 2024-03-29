import { useAppContext } from "contexts/AppContext";
import { Animation, useAnimate } from "react-animate-with-css";
import styled from "styled-components";
import {
  renderNewQuestion,
  saveAnswer,
} from "../../../functions/game-functions";

export default function Key({
  value,
  children,
}: {
  value: any;
  children: any;
}) {
  const { gameData, setGameData, questionData, setQuestionData } =
    useAppContext();

  const { animate } = useAnimate();

  const myAnswer = questionData?.answer;

  const configGameData = gameData?.config;

  const style = {
    gridArea: `a${value}`,
    backgroundColor:
      value === "enter"
        ? "var(--keyboard-buttom-enter-color)"
        : value === "backspace"
          ? "var(--keyboard-buttom-backspace-color)"
          : "var(--keyboard-buttom-number-color)",
    width: value === "enter" || value === "backspace" ? "75px" : "55px",
  };

  return (
    <Animation
      id={`keyboard-key-${value}`}
      style={{ ...style, backgroundColor: "none" }}
    >
      <Container
        id={`keyboard-key-${value}`}
        style={style}
        onClick={() => {
          animate({
            id: `keyboard-key-${value}`,
            name: "fadeIn",
            duration: 200,
          });
          const isNumber = !isNaN(value);
          if (isNumber) {
            return setQuestionData((old) => {
              return {
                ...old,
                answer: `${myAnswer}${value}`,
              };
            });
          }
          if (value === "backspace") {
            return setQuestionData((old) => {
              return {
                ...old,
                answer: myAnswer.slice(0, -1),
              };
            });
          }
          if (value === "enter") {
            if (myAnswer === "") {
              return;
            }
            else {
              saveAnswer({ setGameData, questionData });
            }

            if (
              Number(questionData.answer) !== Number(questionData.correctAnswer)
            ) {
              animate({ id: "gameScreen", name: "headShake", duration: 600 });
            }

            renderNewQuestion({
              setQuestionData: setQuestionData,
              configGameData: configGameData,
              setGameData: setGameData,
              type: "answering",
              isFirst: false,
            });
          }
        }}
      >
        {children}
      </Container>
    </Animation>
  );
}

const Container = styled.div.attrs(({ style }) => style)`
  & {
    border-radius: 10px;

    border: 3px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    height: 55px;

    justify-self: center;
  }
`;
