import styled from "styled-components";

export default function Answer({ answerData }) {
  let style;
  if (answerData.isCorrect === true) {
    style = { backgroundColor: "var(--game-answers-true-color)" };
  } else if (answerData.isCorrect === false) {
    style = { backgroundColor: "var(--game-answers-false-color)" };
  } else {
    style = { backgroundColor: "var(--game-answers-none-color)" };
  }

  return <Container style={style}>{answerData.id}</Container>;
}

const Container = styled.div.attrs(({ style }) => ({
  style,
}))`
  & {
    width: 25px;
    height: 25px;

    border-radius: 50%;

    margin: 3px;

    font-size: 14px;

    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    justify-self: center;
  }
`;
