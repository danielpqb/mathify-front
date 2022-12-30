import PlayButton from "components/others/PlayButton";
import SaveButton from "components/others/SaveButton";
import { useAppContext } from "contexts/AppContext";
import { useEffect } from "react";
import styled from "styled-components";
import ConfigTable from "./ConfigTable/ConfigTable";
import RankingPresetConfig from "./RankingPresetConfig";

export default function Config() {
  return (
    <Container>
      <ConfigTable />
      <RankingPresetConfig />

      <SaveButton />
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;
    padding: 0px 10px;
  }
`;
