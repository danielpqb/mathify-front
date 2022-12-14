import IonIcon from "components/common/IonIcon/IonIcon";
import styled from "styled-components";

export type LineData = {
  type: string;
  isCorrect: boolean;
};

export default function Value({
  value,
  columnName,
  lineData,
}: {
  value: string | JSX.Element;
  columnName: string;
  lineData: LineData;
}) {
  let style;

  if (lineData.type === "header" || lineData.type === "footer") {
    style = {
      backgroundColor: "var(--result-answers-header-color)",
      borderRadius: "0px",
      border: "none",
      boxShadow: "none",
    };
  }
  else {
    style = { backgroundColor: "var(--result-answers-line-color)" };

    if (columnName === "isCorrect") {
      if (lineData.isCorrect) {
        style = { ...style, color: "var(--game-answers-true-color)" };
        value = (
          <IonIcon
            name="checkmark-circle"
            style={{
              color: style.color,
              fontSize: "26px",
            }}
            divStyle={{
              filter:
                "drop-shadow(1px 2px 1px rgba(0, 0, 0, 0.4)) brightness(1.2)",
            }}
          />
        );
      }
      else {
        style = { ...style, color: "var(--game-answers-false-color)" };
        value = (
          <IonIcon
            name="close-circle"
            style={{
              color: style.color,
              fontSize: "26px",
            }}
            divStyle={{
              filter:
                "drop-shadow(1px 2px 1px rgba(0, 0, 0, 0.4)) brightness(1.2)",
            }}
          />
        );
      }
    }
  }

  return <Container style={style}>{value}</Container>;
}

const Container = styled.div`
  & {
    font-size: calc(var(--fontsize) - 10px);

    border-radius: 10px;

    border: 2px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    justify-self: center;

    padding: 0px 5px;
  }
`;
