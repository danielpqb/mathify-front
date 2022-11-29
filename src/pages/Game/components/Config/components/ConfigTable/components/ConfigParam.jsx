import { useEffect, useState } from "react";
import styled from "styled-components";
import InputBox from "../../../../../../../components/common/InputBox/InputBox";
import ClickButton from "./ClickButton";

export default function ConfigParam({ configParamData }) {
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
        <div style={{ height: "100%" }}>
          <InputBox
            style={inputBoxStyle}
            inputStyle={innerInputStyle}
            placeholder={configParamData.placeholder}
          />
          <Unit style={configParamData.unit && unitStyle}>{configParamData.unit}</Unit>
        </div>
      )}

      {configParamData.type === "input-range" && (
        <div>
          <Unit style={configParamData.unit && unitStyle}>{configParamData.unit[0]}</Unit>
          <InputBox
            style={inputBoxStyle}
            inputStyle={innerInputStyle}
            placeholder={configParamData.placeholder[0]}
          />
          <Unit style={configParamData.unit && unitStyle}>{configParamData.unit[1]}</Unit>
          <InputBox
            style={inputBoxStyle}
            inputStyle={innerInputStyle}
            placeholder={configParamData.placeholder[1]}
          />
        </div>
      )}
    </Container>
  );
}

export function ParamChoices({ configParamData }) {
  const [choicesChecked, setChoicesChecked] = useState();

  useEffect(() => {
    let defaultChoicesChecked = {};
    for (let i = 0; i < configParamData.choices.length; i++) {
      defaultChoicesChecked[configParamData.choices[i].id] = configParamData.choices[i].isChecked;
    }
    setChoicesChecked(defaultChoicesChecked);
  }, [configParamData.choices, setChoicesChecked]);

  return (
    <Choices>
      {configParamData.choices.map((choiceData, index) => {
        return (
          <ClickButton
            key={index}
            choiceData={choiceData}
            choicesChecked={choicesChecked}
            setChoicesChecked={setChoicesChecked}
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
