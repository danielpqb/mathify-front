import styled from "styled-components";
import ConfigParam from "./components/ConfigParam";

export default function ConfigTable() {
  const configParamsData = [
    {
      name: "time",
      text: "Max time per question",
      type: "input",
      placeholder: "15",
      unit: "s",
    },
    {
      name: "operations",
      text: "Allowed operations",
      type: "multi-choice",
      choices: [
        { id: 1, value: "+", isChecked: true },
        { id: 2, value: "-", isChecked: true },
        { id: 3, value: "×", isChecked: true },
        { id: 4, value: "÷", isChecked: true },
      ],
    },
    {
      name: "questions",
      text: "Questions per game",
      type: "input",
      placeholder: "10",
    },
  ];

  return (
    <Container>
      {configParamsData.map((configParamData, index) => {
        return (
          <ConfigParam
            configParamData={configParamData}
            key={index}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;

    justify-content: flex-start;

    padding: 0px 10px;
  }
`;
