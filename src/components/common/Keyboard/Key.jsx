import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../contexts/contexts";
import { renderNewQuestion } from "../../../functions/app-functions";

export default function Key({ value, children }) {
  const { gameData, setGameData } = useContext(AppContext);

  const myAnswer = gameData?.currentQuestion?.answer;
  const id = gameData?.currentQuestion?.id;
  const startTimestamp = gameData?.currentQuestion?.startTimestamp;

  return (
    <Container
      onClick={() => {
        const isNumber = !isNaN(Number(value));
        if (isNumber) {
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

          if (myAnswer === "") {
            return console.log("Empty answer!");
          }
          if (Number(myAnswer) === answer) {
            console.log("Correct answer!");

            setGameData((old) => {
              const _new = { ...old };
              _new.answers[id - 1].isCorrect = true;
              _new.answers[id - 1].timeSpent = Date.now() - startTimestamp;
              return _new;
            });
          } else {
            console.log("Incorrect answer!");

            setGameData((old) => {
              const _new = { ...old };
              _new.answers[id - 1].isCorrect = false;
              _new.answers[id - 1].timeSpent = Date.now() - startTimestamp;
              return _new;
            });
          }

          renderNewQuestion(setGameData);
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