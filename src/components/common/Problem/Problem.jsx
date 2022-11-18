import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../contexts/contexts";
import Box from "./Box";

export default function Problem() {
  const { gameData } = useContext(AppContext);

  const problemData = gameData?.currentQuestion?.problemData;

  return (
    <Container>
      {problemData?.map((element, index) => {
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
        "equals equals equals"
        "result result result";
    }
  }
`;
