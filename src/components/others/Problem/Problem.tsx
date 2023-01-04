import { useAppContext } from "contexts/AppContext";
import styled from "styled-components";
import Box from "./Box";

export default function Problem() {
  const { questionData } = useAppContext();

  const problemData = questionData?.problemData;

  return (
    <Container>
      {problemData?.map((element, index) => {
        return (
          <Box
            boxData={element}
            key={index}
          ></Box>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  & {
    column-gap: 10px;

    max-height: 180px;

    display: grid;
    grid-template-areas:
      ". . ."
      "equals equals equals"
      "result result result";
  }
`;
