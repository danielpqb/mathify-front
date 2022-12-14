import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../../../contexts/contexts";
import Info from "./Info";
import Line from "./Line";

export default function List() {
  const { gameData } = useContext(AppContext);

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
      <Info answers={answers} />

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
