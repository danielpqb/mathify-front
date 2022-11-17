import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../../../contexts/contexts";
import { createProblemData } from "../../../functions/app-functions";
import Box from "./Box";

export default function Problem() {
  const { gameData, setGameData } = useContext(AppContext);

  useEffect(() => {
    if (!gameData.currentQuestion) {
      setGameData({ ...gameData, currentQuestion: { problemData: createProblemData(), answer: "" } });
    }
    // console.log(gameData);
  }, [gameData, setGameData]);

  return (
    <Container>
      {gameData.currentQuestion?.problemData?.map((element, index) => {
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
