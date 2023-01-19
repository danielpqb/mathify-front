import IonIcon from "components/common/IonIcon/IonIcon";
import { tierConfigs } from "constants/game-constants";
import { useAppContext } from "contexts/AppContext";
import { Animation, useAnimate } from "react-animate-with-css";
import styled from "styled-components";
import { ConfigData } from "../types";

export default function RankingPresetConfig() {
  const { configData, setConfigData } = useAppContext();
  const { animate } = useAnimate();

  const tiers = [
    { name: "bronze", color: "rgb(214, 163, 69)" },
    { name: "silver", color: "rgb(216, 216, 216)" },
    { name: "gold", color: "rgb(233, 196, 31)" },
    { name: "challenger", color: "rgb(220, 35, 50)" },
  ];

  return (
    <Container>
      {tiers.map((tier, index) => {
        return (
          <Tier
            key={index}
            style={
              configData?.tier?.name === tier.name
                ? { border: "3px solid rgba(51, 255, 0, 0.3)" }
                : {}
            }
            onClick={() => {
              animate({ id: tier.name + "bounce", name: "bounce" });
              animate({ id: tier.name + "flip", name: "flip" });

              setConfigData((old) => {
                const tierName = tier.name;
                const tierDivision = 3;

                const defaultConfigs = tierConfigs[
                  (tierName + tierDivision) as keyof object
                ] as ConfigData;

                const newer = {
                  ...old,
                  ...defaultConfigs,
                  tier: { name: tierName, division: 3 },
                };

                return newer;
              });
              return;
            }}
          >
            <Animation id={tier.name + "bounce"}>
              <Animation id={tier.name + "flip"}>
                <IonIcon
                  name="trophy-sharp"
                  style={{ fontSize: "35px", color: tier.color }}
                ></IonIcon>
              </Animation>
            </Animation>
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
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 10px;
  }
`;
