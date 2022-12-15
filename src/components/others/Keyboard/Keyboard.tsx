import IonIcon from "components/common/IonIcon/IonIcon";
import styled from "styled-components";
import Key from "./Key";

export default function Keyboard() {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, "backspace", 0, "enter"];

  return (
    <Container>
      {keys.map((value, index) => {
        return (
          <Key
            value={value}
            key={index}
          >
            {value === "backspace" ? (
              <IonIcon
                name="backspace"
                style={{ color: "var(--fontcolor)", fontSize: "26px" }}
              />
            ) : value === "enter" ? (
              <IonIcon
                name="arrow-forward"
                style={{ color: "var(--fontcolor)", fontSize: "26px" }}
              />
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
    grid-template-areas:
      ". a1 a2 a3 ."
      ". a4 a5 a6 ."
      ". a7 a8 a9 ."
      "abackspace abackspace a0 aenter aenter";
    grid-auto-flow: column;
    gap: 10px;

    width: fit-content;
    height: fit-content;

    justify-content: flex-end;

    @media (orientation: landscape) {
      grid-template-areas:
        ". a1 a2 a3 a4 a5 ."
        "abackspace a6 a7 a8 a9 a0 aenter";
    }
  }
`;
