import { useAppContext } from "contexts/AppContext";
import styled from "styled-components";
import Answer from "./Answer";

export default function Answers() {
  const { gameData } = useAppContext();

  const answers = gameData?.answers;

  return (
    <Container>
      {answers?.map((element, index) => {
        return (
          <Answer
            answerData={element}
            key={index}
          />
        );
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
