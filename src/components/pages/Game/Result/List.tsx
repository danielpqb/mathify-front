import { useAppContext } from "contexts/AppContext";
import { Animation } from "react-animate-with-css";
import styled from "styled-components";
import { GameDataAnswer } from "../types";
import Info from "./Info";
import Line from "./Line";

export default function List() {
  const { gameData } = useAppContext();

  const answers = gameData?.answers;

  const headerData = {
    id: "Id",
    isCorrect: "✓",
    timeSpent: "Time",
    myAnswer: "Answer",
    correctAnswer: "Correct Answer",
    solution: "Solution",
  };

  return (
    <Container>
      <Info answers={answers as GameDataAnswer[]} />

      <Animation animateIn={{ name: "fadeInUp" }}>
        <Line
          type={"header"}
          data={headerData}
        />
        <ListBody>
          {answers?.map((answerData, index) => {
            return (
              <Line
                key={index}
                type={"answer"}
                data={answerData}
              />
            );
          })}
        </ListBody>
      </Animation>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;
    justify-content: flex-start;

    padding: 0px 5px;

    height: calc(100% - 60px);

    max-width: 500px;
  }
`;

const ListBody = styled.div`
  & {
    flex-direction: column;
    justify-content: flex-start;

    overflow-y: auto;
  }
`;
