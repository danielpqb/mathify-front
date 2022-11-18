import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../contexts/contexts";
import { createProblemData } from "../../../functions/app-functions";

export default function Key({ value, children }) {
  const { gameData, setGameData } = useContext(AppContext);

  const myAnswer = gameData?.currentQuestion?.answer;

  return (
    <Container
      onClick={() => {
        if (!isNaN(Number(value))) {
          return setGameData((old) => {
            return {
              ...old,
              currentQuestion: { ...old.currentQuestion, answer: `${myAnswer}${value}` },
            };
          });
        }
        if (value === "backspace") {
          return setGameData((old) => {
            return {
              ...old,
              currentQuestion: { ...old.currentQuestion, answer: myAnswer.slice(0, -1) },
            };
          });
        }
        if (value === "enter") {
          const answer = gameData.currentQuestion.problemData.filter((element) => {
            return element.isAnswer;
          })[0].value;

          if (myAnswer !== "" && Number(myAnswer) === answer) {
            console.log("Correct answer!");
          } else {
            console.log("Incorrect answer!");
          }

          setGameData((old) => {
            return {
              ...old,
              currentQuestion: { problemData: createProblemData(), answer: "", time: old.config.questionTime },
            };
          });
        }
      }}
    >
      {children}
    </Container>
  );
}

const Container = styled.div`
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
