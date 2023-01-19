import { Animation } from "components/common/Animate/AnimationContext";
import SaveButton from "components/others/SaveButton";
import styled from "styled-components";
import ConfigTable from "./ConfigTable/ConfigTable";
import RankingPresetConfig from "./RankingPresetConfig";

export default function Config() {
  return (
    <Container id={"config"}>
      <Animation
        animateIn={{
          name: "fadeIn",
          duration: 500,
          timing: "cubic-bezier(1.0, 0, 1.0, 1.0)",
        }}
      >
        <ConfigTable />
        <RankingPresetConfig />

        <SaveButton />
      </Animation>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;
    padding: 0px 10px;

    max-width: 500px;
  }
`;
