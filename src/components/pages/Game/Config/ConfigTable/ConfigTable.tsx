import styled from "styled-components";
import { defaultGameConfig } from "../../../../../../constants/game-constants";
import ConfigParam from "./components/ConfigParam";

export default function ConfigTable() {
  const configParamsData = [
    {
      name: "questionTime",
      text: "Max time per question",
      type: "input",
      placeholder: defaultGameConfig.questionTime,
      unit: "seconds",
    },
    {
      name: "allowedOperators",
      text: "Allowed operations",
      type: "multi-choice",
      choices: Object.keys(defaultGameConfig.allowedOperators),
    },
    {
      name: "numberOfQuestions",
      text: "Questions per game",
      type: "input",
      placeholder: defaultGameConfig.numberOfQuestions,
      unit: "",
    },
    {
      name: "rangeOfNumbers",
      text: "Range of numbers",
      type: "input-range",
      placeholder: defaultGameConfig.rangeOfNumbers,
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
