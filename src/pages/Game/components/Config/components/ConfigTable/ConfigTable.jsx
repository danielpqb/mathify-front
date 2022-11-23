import { useState } from "react";
import styled from "styled-components";
import Custom from "./components/Custom";
import Default from "./components/Default";

export default function ConfigTable() {
  const [isCustomConfig, setIsCustomConfig] = useState(false);

  return (
    <Container>
      {isCustomConfig ? <Custom /> : <Default />}

      <ToggleButton
        onClick={() => {
          setIsCustomConfig((old) => !old);
        }}
      >
        Custom Setup
      </ToggleButton>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;

    justify-content: flex-start;
  }
`;

const ToggleButton = styled.div`
  & {
    width: fit-content;
    height: 40px;
    margin: 5px;
    padding: 10px;

    background-color: #213a7e;
    border-radius: 10px;
    border: 4px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
