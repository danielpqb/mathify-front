import IonIcon from "components/common/IonIcon/IonIcon";
import styled from "styled-components";

export default function Value({ value, columnName, lineData }: { value: any; columnName: any; lineData: any }) {
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
        value = <IonIcon name="checkmark-circle" />;
      }
      else {
        style = { ...style, color: "var(--game-answers-false-color)" };
        value = <IonIcon name="close-circle" />;
      }
    }
  }

  return <Container style={style}>{value}</Container>;
}

const Container = styled.div.attrs(({ style }) => style)`
  & {
    font-size: calc(var(--fontsize) - 10px);

    border-radius: 10px;

    border: 2px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    justify-self: center;

    padding: 0px 5px;
  }

  ion-icon {
    color: ${(style) => style.color};
    filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, 0.4)) brightness(1.2);
  }
`;
