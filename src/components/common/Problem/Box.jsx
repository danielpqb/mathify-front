import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../contexts/contexts";

export default function Box({ boxData }) {
  const { gameData } = useContext(AppContext);

  const myAnswer = gameData?.currentQuestion?.answer;

  let style = {};
  switch (boxData.type) {
    case "operator":
      style = { backgroundColor: "#666666", height: "35px", fontSize: "30px" };
      break;
    case "operate":
      style = { backgroundColor: "#297e21" };
      break;
    case "result":
      style = { backgroundColor: "#aca546", gridArea: "result" };
      break;
    default:
      style = { backgroundColor: "#666666", gridArea: "equals", height: "35px", fontSize: "30px" };
      break;
  }
  if (boxData.isAnswer) {
    style = { ...style, backgroundColor: "#252525", border: "5px solid rgba(201, 0, 0, 0.7)" };
  }

  return <Container style={style}>{boxData.isAnswer ? (myAnswer === "" ? "???" : myAnswer) : boxData.value}</Container>;
}

const Container = styled.div.attrs(({ style }) => ({
  style,
}))`
  & {
    border-radius: 10px;

    border: 3px solid rgba(0, 0, 0, 0.7);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    min-width: 50px;
    width: fit-content;
    height: 50px;

    letter-spacing: 1px;

    padding: 0px 10px;

    justify-self: center;
  }
`;
