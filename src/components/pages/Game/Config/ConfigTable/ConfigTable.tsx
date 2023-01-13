import { defaultGameConfig } from "constants/game-constants";
import { Animation } from "react-animate-with-css";
import styled from "styled-components";
import ConfigParam from "./ConfigParam";

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

export type ConfigParamData = {
  name: string;
  text: string;
  type: string;
  placeholder:
    | string
    | {
        from: number | string;
        to: number | string;
      };
  unit: string | string[];
  choices?: string[];
};

export default function ConfigTable() {
  return (
    <Container>
      {configParamsData.map((configParamData, index) => {
        return (
          <ConfigParam
            configParamData={configParamData as ConfigParamData}
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

    height: calc(100% - 60px);

    overflow-y: auto;
  }
`;
