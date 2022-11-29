import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../../../contexts/contexts";
import { countProps, sumProps } from "../../../../../functions/result-functions";
import Line from "./Line";

export default function List() {
  const { gameData } = useContext(AppContext);

  const answers = gameData?.answers;

  const headerData = {
    id: "Id",
    isCorrect: "Correct",
    timeSpent: "Time",
    myAnswer: "My Answer",
    correctAnswer: "Correct Answer",
  };

  const footerData = {
    id: "",
    isCorrect: countProps({ prop: "isCorrect", withValue: true, data: answers }),
    timeSpent: `${(sumProps({ prop: "timeSpent", data: answers }) / 1000).toFixed(3)}s`,
    myAnswer: "",
    correctAnswer: "",
  };

  return (
    <Container>
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
        <Line
          type={"footer"}
          data={footerData}
        />
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
  }
`;

const ListBody = styled.div`
  & {
    flex-direction: column;
    justify-content: flex-start;

    overflow-y: auto;
  }
`;
