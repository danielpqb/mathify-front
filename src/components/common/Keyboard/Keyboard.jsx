import styled from "styled-components";
import Key from "./Key";

export default function Keyboard() {
  const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9, "clear", 0, "enter"];

  return (
    <Container>
      {keys.map((value, index) => {
        return <Key key={index}>{value}</Key>;
      })}
    </Container>
  );
}

const Container = styled.div`
  & {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;

    width: 90%;
    max-width: 300px;
    height: 300px;
  }
`;
