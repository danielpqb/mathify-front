import styled from "styled-components";
import ConfigParam from "./components/ConfigParam";

export default function ConfigTable() {
  const configParamsData = [
    {
      name: "time",
      text: "Max time per question",
      type: "input",
      placeholder: "15",
      unit: "seconds",
    },
    {
      name: "operations",
      text: "Allowed operations",
      type: "multi-choice",
      choices: ["+", "-", "×", "÷"],
    },
    {
      name: "questions",
      text: "Questions per game",
      type: "input",
      placeholder: "10",
    },
    {
      name: "range",
      text: "Range of numbers",
      type: "input-range",
      placeholder: ["0", "9"],
      unit: ["from", "to"],
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

    height: calc(100% - 60px);

    overflow-y: auto;
  }
`;
