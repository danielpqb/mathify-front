import { Animation } from "components/common/Animate/AnimationContext";
import InputBox from "components/others/InputBox/InputBox";
import { useAppContext } from "contexts/AppContext";
import { filterInput } from "functions/regex-functions";
import React from "react";
import styled from "styled-components";
import { ConfigData } from "../../types";
import ClickButton from "./ClickButton";
import { ConfigParamData } from "./ConfigTable";

export default function ConfigParam({
  configParamData,
}: {
  configParamData: ConfigParamData;
}) {
  const { configData, setConfigData } = useAppContext();

  let inputValues: string | { from: string; to: string } = "";
  // eslint-disable-next-line no-prototype-builtins
  if (configData?.hasOwnProperty(configParamData.name)) {
    inputValues = configData[configParamData.name as keyof object];
  }

  const unitStyle = {
    margin: "0px 5px",
    backgroundColor: "#4b4b4b",
    borderRadius: "10px",
    border: "4px solid rgba(0, 0, 0, 0.4)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    height: "40px",
    padding: "0px 5px",
  };

  const inputBoxStyle = {
    background: "#242424",
    border: "2px solid black",
    width: "60px",
    margin: "0px",
    height: "fit-content",
  };

  const innerInputStyle = {
    padding: "0px 5px",
  };

  return (
    <Container>
      <Title>{configParamData.text}:</Title>

      {configParamData.type === "multi-choice" && (
        <ParamChoices configParamData={configParamData} />
      )}

      {configParamData.type === "input" && (
        <div>
          <InputBox
            style={inputBoxStyle}
            inputStyle={innerInputStyle}
            value={inputValues}
            placeholder={configParamData.placeholder}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setConfigData((old) => {
                const value: string = filterInput({
                  value: e.target.value,
                  type: "only-numbers",
                  size: 2,
                });
                const newer = { ...old };
                newer[configParamData.name as keyof object] = value as never;
                return newer;
              });
            }}
          />
          <Unit style={configParamData.unit ? unitStyle : {}}>
            {configParamData.unit}
          </Unit>
        </div>
      )}

      {configParamData.type === "input-range" && (
        <div>
          <Unit style={configParamData.unit ? unitStyle : {}}>
            {configParamData.unit[0]}
          </Unit>
          <InputBox
            style={inputBoxStyle}
            inputStyle={innerInputStyle}
            value={(inputValues as unknown as { from: any }).from}
            placeholder={(configParamData.placeholder as { from: any }).from}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setConfigData((old) => {
                const value = filterInput({
                  value: e.target.value,
                  type: "only-numbers",
                  size: 2,
                });
                const newer = { ...old } as any;
                newer[configParamData.name as keyof object] = {
                  ...(newer[configParamData.name as keyof object] as object),
                  from: value,
                };
                return newer as ConfigData;
              });
            }}
          />
          <Unit style={configParamData.unit ? unitStyle : {}}>
            {configParamData.unit[1]}
          </Unit>
          <InputBox
            style={inputBoxStyle}
            inputStyle={innerInputStyle}
            value={(inputValues as unknown as { to: any }).to}
            placeholder={(configParamData.placeholder as { to: any }).to}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setConfigData((old) => {
                const value = filterInput({
                  value: e.target.value,
                  type: "only-numbers",
                  size: 2,
                });
                const newer = { ...old } as any;
                newer[configParamData.name as keyof object] = {
                  ...(newer[configParamData.name as keyof object] as object),
                  to: value,
                };
                return newer as ConfigData;
              });
            }}
          />
        </div>
      )}
    </Container>
  );
}

export function ParamChoices({
  configParamData,
}: {
  configParamData: ConfigParamData;
}) {
  return (
    <Choices>
      {(configParamData.choices as []).map((choice, index) => {
        return (
          <Animation
            key={index}
            id={choice}
          >
            <ClickButton
              choice={choice}
              configParamData={configParamData}
            />
          </Animation>
        );
      })}
    </Choices>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;
    height: fit-content;
    margin-bottom: 10px;

    background-color: #4b4b4b;
    border-radius: 10px;
    border: 4px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 10px 10px;
  }
`;

const Title = styled.div`
  & {
    padding-bottom: 10px;

    text-align: center;

    font-size: 20px;
  }
`;

const Choices = styled.div`
  & {
    gap: 5px;
  }
`;

const Unit = styled.div.attrs(({ style }) => style)`
  & {
    width: fit-content;

    opacity: 0.7;

    font-size: 20px;
  }
`;
