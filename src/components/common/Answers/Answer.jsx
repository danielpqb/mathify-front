import styled from "styled-components";

export default function Answer({ answerData }) {
  let style;
  if (answerData.isCorrect === true) {
    style = { backgroundColor: "#287211" };
  } else if (answerData.isCorrect === false) {
    style = { backgroundColor: "#8d0000" };
  } else {
    style = { backgroundColor: "#969696" };
  }

  return <Container style={style}>{answerData.id}</Container>;
}

const Container = styled.div.attrs(({ style }) => ({
  style,
}))`
  & {
    width: 30px;
    height: 30px;

    border-radius: 50%;

    margin: 3px;

    font-size: 16px;

    border: 2px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    justify-self: center;
  }
`;
