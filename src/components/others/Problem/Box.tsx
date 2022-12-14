import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../contexts/contexts";

export default function Box({ boxData }: { boxData: any }) {
  const { questionData } = useContext(AppContext);

  const myAnswer = questionData?.answer;

  let style = {};
  switch (boxData.type) {
  case "operator":
    style = { backgroundColor: "var(--problem-operator-color)", height: "30px", minWidth: "40px", fontSize: "30px" };
    break;
  case "operate":
    style = { backgroundColor: "var(--problem-operate-color)" };
    break;
  case "result":
    style = { backgroundColor: "var(--problem-result-color)", gridArea: "result" };
    break;
  default:
    style = { backgroundColor: "var(--problem-equals-color)", gridArea: "equals", height: "35px", fontSize: "30px" };
    break;
  }
  if (boxData.isAnswer) {
    style = { ...style, backgroundColor: "var(--default-color-one)", border: "4px dashed #e20000" };
  }

  return <Container style={style}>{boxData.isAnswer ? (myAnswer === "" ? "???" : myAnswer) : boxData.value}</Container>;
}

const Container = styled.div.attrs(({ style }) => style)`
  & {
    border-radius: 10px;

    border: 1px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    min-width: 50px;
    width: fit-content;
    height: 50px;

    letter-spacing: 1px;

    padding: 0px 10px;

    justify-self: center;

    padding-bottom: 2px;
  }
`;
