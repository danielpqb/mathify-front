import styled from "styled-components";

import { useAppContext } from "../../contexts/AppContext";

export default function Home() {
  const { setAlert } = useAppContext();

  return (
    <Container>
      <div
        style={{ background: "black" }}
        onClick={() => {
          setAlert({
            show: true,
            type: "ok-cancel",
          });
        }}
      ></div>
    </Container>
  );
}

const Container = styled.div`
  & {
    width: 100vw;

    padding: 5px;

    background-color: var(--background-a-color);
  }
`;
