import styled from "styled-components";
import { countProps, sumProps } from "../../../../functions/result-functions";
import InfoBox from "./InfoBox";

export default function Info({ answers }: { answers: any }) {
  let style;

  return (
    <Container style={style}>
      <InfoBox
        header={"Accuracy"}
        value={`${((countProps({ prop: "isCorrect", withValue: true, data: answers }) / answers.length) * 100).toFixed(
          1
        )}%`}
      />
      <InfoBox
        header={"Time"}
        value={`${(
          sumProps({ prop: "timeSpent", data: answers } as {
            prop: any;
            withValue: any;
            data: any;
          }) / 1000
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
