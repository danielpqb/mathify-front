import styled from "styled-components";
import { countProps, sumProps } from "../../../../functions/result-functions";
import { GameDataAnswer } from "../types";
import InfoBox from "./InfoBox";

export default function Info({ answers }: { answers: GameDataAnswer[] }) {
  let style;

  return (
    <Container style={style}>
      <InfoBox
        header={"Accuracy"}
        value={`${(
          (countProps({ prop: "isCorrect", withValue: true, data: answers }) /
            answers.length) *
          100
        ).toFixed(1)}%`}
      />
      <InfoBox
        header={"Time"}
        value={`${(
          sumProps({ prop: "timeSpent", data: answers }) / 1000
        ).toFixed(3)}s`}
      />
    </Container>
  );
}

const Container = styled.div.attrs(({ style }) => style)`
  & {
    border-radius: 10px;

    align-items: flex-start;

    height: fit-content;

    gap: 5px;

    margin-bottom: 10px;

    flex-wrap: wrap;
  }
`;
