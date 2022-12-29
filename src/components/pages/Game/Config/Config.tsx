import StartButton from "components/others/StartButton";
import { useAppContext } from "contexts/AppContext";
import { useEffect } from "react";
import styled from "styled-components";
import { defaultGameConfig } from "../../../../constants/game-constants";
import ConfigTable from "./ConfigTable/ConfigTable";
import RankingPresetConfig from "./RankingPresetConfig";

export default function Config() {
  const {
    setConfigData,
  } = useAppContext();

  useEffect(() => {
    setConfigData((old) => {
      const newer = { ...old, ...defaultGameConfig };

      return newer;
    });
  }, [setConfigData]);

  return (
    <Container>
      <ConfigTable />
      <RankingPresetConfig />

      <StartButton />
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;
    padding: 0px 10px;
  }
`;
