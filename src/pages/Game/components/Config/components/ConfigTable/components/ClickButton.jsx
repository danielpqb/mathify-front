import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../../../../../contexts/contexts";

export default function ClickButton({ choice, configParamData }) {
  const { configData, setConfigData } = useContext(AppContext);

  return (
    <Container
      style={
        configData[configParamData.name] && configData[configParamData.name][choice]
          ? { background: "var(--config-true-color)", opacity: "1" }
          : {}
      }
      onClick={() => {
        setConfigData((old) => {
          const newer = {};
          newer[configParamData.name] = { ...old[configParamData.name] };
          newer[configParamData.name][choice] = !old[configParamData.name][choice];
          console.log(newer);
          return { ...old, ...newer };
        });
      }}
    >
      {choice}
    </Container>
  );
}

const Container = styled.div.attrs(({ style }) => style)`
  & {
    width: 100%;

    padding: 3px 5px;

    font-size: calc(var(--fontsize) + 5px);

    background: var(--config-false-color);
    opacity: 0.6;

    border-radius: 10px;
    border: 3px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
