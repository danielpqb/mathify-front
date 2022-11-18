import styled from "styled-components";

export default function Answer({ isCorrect }) {
  let style;
  if (isCorrect) {
    style = { backgroundColor: "#ff0101" };
  }

  return <Container style={style}></Container>;
}

const Container = styled.div.attrs(({ style }) => ({
  style,
}))`
  & {
    width: 50px;
    height: 50px;
  }
`;
