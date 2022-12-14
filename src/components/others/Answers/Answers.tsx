import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../contexts/contexts";
import Answer from "./Answer";

export default function Answers() {
  const { gameData } = useContext(AppContext);

  const answers: [] = gameData?.answers;

  return (
    <Container>
      {answers?.map((element, index) => {
        return <Answer
          answerData={element}
          key={index} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-wrap: wrap;

    height: fit-content;
  }
`;
