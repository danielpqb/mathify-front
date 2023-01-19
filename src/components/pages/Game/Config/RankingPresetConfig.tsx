import IonIcon from "components/common/IonIcon/IonIcon";
import { tierConfigs } from "constants/game-constants";
import { useAppContext } from "contexts/AppContext";
import { useState } from "react";
import { Animation, useAnimate } from "react-animate-with-css";
import styled from "styled-components";
import { ConfigData } from "../types";

export default function RankingPresetConfig() {
  const { configData, setConfigData } = useAppContext();
  const { animate } = useAnimate();

  const [openedTier, setOpenedTier] = useState("");

  const tiers = [
    { name: "bronze", color: "rgb(214, 163, 69)" },
    { name: "silver", color: "rgb(216, 216, 216)" },
    { name: "gold", color: "rgb(233, 196, 31)" },
    { name: "challenger", color: "rgb(220, 35, 50)" },
  ];

  const divisions = [
    { name: "I", number: 1 },
    { name: "II", number: 2 },
    { name: "III", number: 3 },
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
              if (!openedTier) {
                setOpenedTier(tier.name);

                setConfigData((old) => {
                  const tierName = tier.name;

                  const newer = {
                    ...old,
                    tier: { name: tierName, division: 0 },
                  };
                  return newer;
                });
              }
            }}
          >
            <Animation id={tier.name + "Bounce"}>
              <Animation
                id={tier.name + "Flip"}
                style={{ position: "relative" }}
              >
                <IonIcon
                  name="trophy-sharp"
                  style={{ fontSize: "35px", color: tier.color }}
                />
                {tier?.name === configData.tier?.name && (
                  <DivisionName>
                    {divisions[configData.tier?.division - 1]?.name}
                  </DivisionName>
                )}
              </Animation>
            </Animation>

            {openedTier === tier.name ? (
              <Divisions>
                {divisions.map((division, index) => {
                  return (
                    <Division
                      onClick={() => {
                        animate({
                          id: tier.name + "Bounce",
                          name: "bounce",
                        });
                        animate({ id: tier.name + "Flip", name: "flip" });

                        setConfigData((old) => {
                          const tierName = tier.name;
                          const tierDivision = division.number;

                          const defaultConfigs = tierConfigs[
                            (tierName + tierDivision) as keyof object
                          ] as ConfigData;

                          const newer = {
                            ...old,
                            ...defaultConfigs,
                            tier: {
                              name: tierName,
                              division: tierDivision,
                            },
                          };
                          return newer;
                        });

                        setOpenedTier(() => "");
                      }}
                      key={index}
                    >
                      {division.name}
                    </Division>
                  );
                })}
              </Divisions>
            ) : (
              <></>
            )}
          </Tier>
        );
      })}

      {openedTier && (
        <ExitDivisionSelection
          onClick={() => {
            setOpenedTier("");

            setConfigData((old) => {
              return {
                ...old,
                tier: undefined,
              };
            });
          }}
        ></ExitDivisionSelection>
      )}
    </Container>
  );
}

const Container = styled.div`
  & {
    position: relative;

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

const Divisions = styled.div`
  & {
    position: absolute;

    top: -50%;

    width: fit-content;
    height: fit-content;

    padding: 10px;

    gap: 1px;

    z-index: 2;
  }
`;

const Division = styled.div`
  & {
    width: 40px;
    height: 40px;

    background-color: #686868;
    border-radius: 10px;
    border: 2px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 10px;

    font-size: 16px;
  }
`;

const ExitDivisionSelection = styled.div`
  & {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: var(--doc-heigth);
    z-index: 1;
  }
`;

const DivisionName = styled.div`
  & {
    position: absolute;
    font-size: 15px;
    top: -6px;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.7);
  }
`;
