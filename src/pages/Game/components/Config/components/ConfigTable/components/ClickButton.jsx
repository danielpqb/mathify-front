import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../../../../../contexts/contexts";

export default function ClickButton({ choice, configParamData }) {
  const { configData, setConfigData } = useContext(AppContext);

  return (
    <Container
      style={
        configData[configParamData.name] && configData[configParamData.name][choice] ? { background: "#115c2d" } : {}
      }
      onClick={() => {
        setConfigData((old) => {
          const newer = { ...old };
          newer[configParamData.name][choice] = !newer[configParamData.name][choice];
          return newer;
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

    padding: 0px 5px;
    margin: 10px;

    background: #63170d;
    border-radius: 10px;
    border: 4px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
