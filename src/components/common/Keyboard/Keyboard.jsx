import styled from "styled-components";
import Key from "./Key";

export default function Keyboard() {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, "backspace", 0, "enter"];

  return (
    <Container>
      {keys.map((value, index) => {
        return (
          <Key value={value} key={index}>
            {value === "backspace" ? (
              <ion-icon name="backspace"></ion-icon>
            ) : value === "enter" ? (
              <ion-icon name="arrow-forward"></ion-icon>
            ) : (
              value
            )}
          </Key>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  & {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;

    width: fit-content;
    height: fit-content;
  }
`;
