import React from "react";
import styled from "styled-components";

export default function Game() {
  return <Container>Game</Container>;
}

const Container = styled.div`
  & {
    width: 100px;
    height: 100px;

    background-color: red;
  }
`;
