import styled from "styled-components";

export default function Answer({ answerData }) {
  let style;
  if (answerData.isCorrect === true) {
    style = { backgroundColor: "#287211" };
  } else if (answerData.isCorrect === false) {
    style = { backgroundColor: "#8d0000" };
  } else {
    style = { backgroundColor: "#9b9807" };
  }

  return <Container style={style}>{answerData.id}</Container>;
}

const Container = styled.div.attrs(({ style }) => ({
  style,
}))`
  & {
    width: 50px;
    height: 50px;

    border-radius: 50%;
  }
`;
