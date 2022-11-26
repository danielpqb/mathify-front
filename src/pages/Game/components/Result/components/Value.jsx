import styled from "styled-components";

export default function Value({ value, lineData }) {
  let style;

  lineData.type === "header" || lineData.type === "footer"
    ? (style = { backgroundColor: "var(--result-answers-header-color)" })
    : (style = { backgroundColor: "var(--result-answers-line-color)" });

  return <Container style={style}>{value}</Container>;
}

const Container = styled.div.attrs(({ style }) => style)`
  & {
    font-size: calc(var(--fontsize) - 10px);

    border-radius: 10px;

    border: 4px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    justify-self: center;
  }
`;
