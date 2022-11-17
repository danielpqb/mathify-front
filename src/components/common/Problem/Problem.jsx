import React from "react";
import styled from "styled-components";
import Box from "./Box";

export default function Problem() {
  const problemData = {
    boxesData: [
      { type: "operate", value: "1", isAnswer: false },
      { type: "operator", value: "x", isAnswer: false },
      { type: "operate", value: "3", isAnswer: false },
      { type: "equals", value: "=" },
      { type: "result", value: "301", isAnswer: true },
    ],
  };

  return (
    <Container>
      {problemData.boxesData.map((element, index) => {
        return <Box boxData={element} key={index}></Box>;
      })}
    </Container>
  );
}

const Container = styled.div`
  & {
    column-gap: 10px;

    max-height: 250px;

    @media (max-width: 1100px) {
      display: grid;
      grid-template-areas:
        ". . ."
        ". equals ."
        ". result .";
    }
  }
`;
