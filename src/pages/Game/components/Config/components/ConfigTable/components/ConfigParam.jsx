import { useMemo, useState } from "react";
import styled from "styled-components";
import InputBox from "../../../../../../../components/common/InputBox/InputBox";
import ClickButton from "./ClickButton";

export default function ConfigParam({ configParamData }) {
  return (
    <Container>
      <Title>{configParamData.text}:</Title>

      {configParamData.type === "multi-choice" && <ParamChoices configParamData={configParamData} />}

      {configParamData.type === "input" && (
        <div>
          <InputBox
            style={{ background: "#242424", border: "2px solid black", width: "calc(2ch + 20px)" }}
            inputStyle={{}}
            placeholder={configParamData.placeholder}
          />
          <Unit style={configParamData.unit && { margin: "0px 5px" }}>{configParamData.unit}</Unit>
        </div>
      )}
    </Container>
  );
}

export function ParamChoices({ configParamData }) {
  let defaultChoicesChecked = {};
  for (let i = 0; i < configParamData.choices.length; i++) {
    defaultChoicesChecked[configParamData.choices[i].id] = configParamData.choices[i].isChecked;
  }

  const [choicesChecked, setChoicesChecked] = useState(defaultChoicesChecked);

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

    padding: 10px 15px;
  }
`;

const Title = styled.div`
  & {
    padding: 10px 0px;

    text-align: center;
  }
`;

const Choices = styled.div`
  & {
    padding: 10px 0px;
  }
`;

const Unit = styled.div.attrs(({ style }) => style)`
  & {
    width: fit-content;

    opacity: 0.7;
  }
`;
