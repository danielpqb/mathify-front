import { useAnimate } from "components/common/Animate/AnimationContext";
import { useAppContext } from "contexts/AppContext";
import styled from "styled-components";
import { ConfigParamData } from "./ConfigTable";

export default function ClickButton({
  choice,
  configParamData,
}: {
  choice: string;
  configParamData: ConfigParamData;
}) {
  const { configData, setConfigData } = useAppContext();
  const { animate } = useAnimate();

  return (
    <Container
      style={
        configData[configParamData.name as keyof object] &&
        (configData[configParamData.name as keyof object] as any)[choice]
          ? { background: "var(--config-true-color)", opacity: "1" }
          : {}
      }
      onClick={() => {
        animate({ id: choice, name: "flipInX", duration: 400 });

        setConfigData((old) => {
          const newer = {} as any;
          newer[configParamData.name as keyof object] = {
            ...(old[configParamData.name as keyof object] as object),
          };
          (newer[configParamData.name as keyof object] as any)[choice] =
            !old[configParamData.name as keyof object][choice];
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
  &:hover {
    cursor: pointer;
  }
`;
