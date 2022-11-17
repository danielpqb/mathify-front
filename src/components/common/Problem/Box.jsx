import styled from "styled-components";

export default function Box({ boxData }) {
  let style = {};
  switch (boxData.type) {
    case "operator":
      style = { backgroundColor: "#21787e" };
      break;
    case "operate":
      style = { backgroundColor: "#297e21" };
      break;
    case "result":
      style = { backgroundColor: "#aca546", gridArea: "result" };
      break;
    default:
      style = { backgroundColor: "#91918d", gridArea: "equals" };
      break;
  }

  return <Container style={style}>{boxData.value}</Container>;
}

const Container = styled.div.attrs(({ style }) => ({
  style,
}))`
  & {
    border-radius: 10px;

    border: 4px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    min-width: 50px;
    width: fit-content;
    height: 50px;

    letter-spacing: 1px;

    padding: 0px 10px;

    justify-self: center;
  }
`;
