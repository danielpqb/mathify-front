import { useContext } from "react";
import styled from "styled-components";
import InputBox from "../../../../../../../components/common/InputBox/InputBox";
import { AppContext } from "../../../../../../../contexts/contexts";
import { filterInput } from "../../../../../../../functions/regex-functions";
import ClickButton from "./ClickButton";

export default function ConfigParam({ configParamData }) {
  const { configData, setConfigData } = useContext(AppContext);

  let inputValues = "";
  if (configData?.hasOwnProperty(configParamData.name)) {
    inputValues = configData[configParamData.name];
  }

  let unitStyle = {
    margin: "0px 5px",
    backgroundColor: "#4b4b4b",
    borderRadius: "10px",
    border: "4px solid rgba(0, 0, 0, 0.4)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    height: "40px",
    padding: "0px 5px",
  };

  let inputBoxStyle = {
    background: "#242424",
    border: "2px solid black",
    width: "60px",
    margin: "0px",
    height: "fit-content",
  };

  let innerInputStyle = {
    padding: "0px 5px",
  };

  return (
    <Container>
      <Title>{configParamData.text}:</Title>

      {configParamData.type === "multi-choice" && <ParamChoices configParamData={configParamData} />}

      {configParamData.type === "input" && (
        <div>
          <InputBox
            style={inputBoxStyle}
            inputStyle={innerInputStyle}
            value={inputValues}
            placeholder={configParamData.placeholder}
            onChange={(e) => {
              setConfigData((old) => {
                const value = filterInput({ value: e.target.value, type: "only-numbers", size: 2 });
                const newer = { ...old };
                newer[configParamData.name] = value;
                return newer;
              });
            }}
          />
          <Unit style={configParamData.unit ? unitStyle : {}}>{configParamData.unit}</Unit>
        </div>
      )}

      {configParamData.type === "input-range" && (
        <div>
          <Unit style={configParamData.unit ? unitStyle : {}}>{configParamData.unit[0]}</Unit>
          <InputBox
            style={inputBoxStyle}
            inputStyle={innerInputStyle}
            value={inputValues.from}
            placeholder={configParamData.placeholder.from}
            onChange={(e) => {
              setConfigData((old) => {
                const value = filterInput({ value: e.target.value, type: "only-numbers", size: 2 });
                const newer = { ...old };
                newer[configParamData.name] = {
                  ...newer[configParamData.name],
                  from: value,
                };
                return newer;
              });
            }}
          />
          <Unit style={configParamData.unit ? unitStyle : {}}>{configParamData.unit[1]}</Unit>
          <InputBox
            style={inputBoxStyle}
            inputStyle={innerInputStyle}
            value={inputValues.to}
            placeholder={configParamData.placeholder.to}
            onChange={(e) => {
              setConfigData((old) => {
                const value = filterInput({ value: e.target.value, type: "only-numbers", size: 2 });
                const newer = { ...old };
                newer[configParamData.name] = {
                  ...newer[configParamData.name],
                  to: value,
                };
                return newer;
              });
            }}
          />
        </div>
      )}
    </Container>
  );
}

export function ParamChoices({ configParamData }) {
  return (
    <Choices>
      {configParamData.choices.map((choice, index) => {
        return (
          <ClickButton
            key={index}
            choice={choice}
            configParamData={configParamData}
          />
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
  }
`;

const Unit = styled.div.attrs(({ style }) => style)`
  & {
    width: fit-content;

    opacity: 0.7;

    font-size: 20px;
  }
`;
