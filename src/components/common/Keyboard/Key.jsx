import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../contexts/contexts";
import { renderNewQuestion, saveAnswer } from "../../../functions/game-functions";

export default function Key({ value, children }) {
  const { gameData, setGameData, questionData, setQuestionData } = useContext(AppContext);

  const myAnswer = questionData?.answer;

  const configGameData = gameData?.config;

  const style = { gridArea: `a${value}` };

  return (
    <Container
      style={style}
      onClick={() => {
        const isNumber = !isNaN(Number(value));
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
          const answer = questionData.problemData.filter((element) => {
            return element.isAnswer;
          })[0].value;

          if (myAnswer === "") {
            return console.log("Empty answer!");
          }
          if (Number(myAnswer) === answer) {
            console.log("Correct answer!");
            saveAnswer({ setGameData, questionData, isCorrect: true });
          } else {
            console.log("Incorrect answer!");
            saveAnswer({ setGameData, questionData, isCorrect: false });
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
  );
}

const Container = styled.div.attrs(({ style }) => ({
  style,
}))`
  & {
    background-color: #213a7e;

    border-radius: 10px;

    border: 4px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    width: 60px;
    height: 60px;

    justify-self: center;
  }
`;
