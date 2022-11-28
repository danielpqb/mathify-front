import styled from "styled-components";
import List from "./components/List";
import Restart from "./components/Restart";

export default function Result() {
  return (
    <Container>
      <List />

      <Restart />
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;

    justify-content: space-between;
  }
`;
