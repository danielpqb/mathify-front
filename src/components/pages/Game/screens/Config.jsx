import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../../contexts/contexts";
import { changeScreen } from "../../../../functions/app-functions";

export default function Config() {
  const { setGameData } = useContext(AppContext);

  return (
    <Container
      onClick={() => {
        changeScreen(setGameData, "question");
      }}
    ></Container>
  );
}

const Container = styled.div`
  & {
  }
`;
