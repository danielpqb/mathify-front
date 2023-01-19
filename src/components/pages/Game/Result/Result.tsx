import { Animation } from "react-animate-with-css";
import styled from "styled-components";
import List from "./List";
import Restart from "./Restart";

export default function Result() {
  return (
    <Container>
      <Animation
        animateIn={{
          name: "fadeIn",
          duration: 1500,
          timing: "cubic-bezier(1.0, 0, 1.0, 1.0)",
        }}
      >
        <List />

        <Restart />
      </Animation>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;

    justify-content: space-between;
  }
`;
