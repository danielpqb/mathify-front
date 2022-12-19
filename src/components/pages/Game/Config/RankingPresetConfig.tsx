import IonIcon from "components/common/IonIcon/IonIcon";
import { tierConfigs } from "constants/game-constants";
import { useAppContext } from "contexts/AppContext";
import styled from "styled-components";
import { ConfigData } from "../types";

export default function RankingPresetConfig() {
  const { configData, setConfigData } = useAppContext();

  const tiers = [
    { tier: "bronze", color: "rgb(214, 163, 69)" },
    { tier: "silver", color: "rgb(216, 216, 216)" },
    { tier: "gold", color: "rgb(233, 196, 31)" },
    { tier: "challenger", color: "rgb(220, 35, 50)" },
  ];

  return (
    <Container>
      {tiers.map((tier, index) => {
        return (
          <Tier
            key={index}
            style={
              configData.tier === `${tier.tier}3`
                ? { border: "3px solid rgba(51, 255, 0, 0.3)" }
                : {}
            }
            onClick={() => {
              setConfigData((old) => {
                const tierName = `${tier.tier}3`;
                const defaultConfigs = tierConfigs[tierName as keyof object] as ConfigData;

                const newer = { ...old, ...defaultConfigs, tier: tierName };

                return newer;
              });
              return;
            }}
          >
            <IonIcon
              name="trophy-sharp"
              style={{ fontSize: "35px", color: tier.color }}
            ></IonIcon>
          </Tier>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  & {
    align-self: flex-end;

    justify-content: space-around;

    height: fit-content;

    background-color: #4b4b4b;
    border-radius: 10px;
    border: 2px solid rgba(0, 0, 0, 0.4);
    border-bottom: 4px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 10px;
  }
`;

const Tier = styled.div`
  & {
    width: fit-content;
    height: fit-content;

    background-color: #4b4b4b;
    border-radius: 10px;
    border: 3px solid rgba(0, 0, 0, 0.3);
    //border: 3px solid rgba(51, 255, 0, 0.3);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 10px;
  }
`;
