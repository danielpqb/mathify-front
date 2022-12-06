import styled from "styled-components";
import Value from "./Value";

export default function Line({ data, type }) {
  const filterValues = ["id", "solution", "myAnswer", "isCorrect"];

  let style = {
    gridTemplateColumns: filterValues
      .map((value, index) => {
        if (index === 0 || index === 3) {
          return "0.4fr ";
        } else if (index === 2) {
          return "0.6fr ";
        }
        return "1fr ";
      })
      .join(""),
  };

  if (type === "header") {
    style = {
      ...style,
      height: "50px",
      minHeight: "50px",
      borderRadius: "5px",
      borderTop: "3px solid rgba(255, 255, 255, 0.4)",
      borderBottom: "3px solid rgba(255, 255, 255, 0.4)",
    };
  }
  if (type === "answer" || type === "footer") {
    style = { ...style, height: "40px" };
  }

  const lineData =
    type === "answer"
      ? {
          ...data,
          timeSpent: `${(data?.timeSpent / 1000).toFixed(3)}s`,
          type: type,
        }
      : { ...data, type: type };

  return (
    <Container style={style}>
      {filterValues.map((columnName, index) => {
        const value = String(lineData[columnName]);

        return (
          <Value
            value={value}
            columnName={columnName}
            lineData={lineData}
            key={index}
          />
        );
      })}
    </Container>
  );
}

const Container = styled.div.attrs(({ style }) => style)`
  & {
    display: grid;

    min-height: 40px;

    text-align: center;
  }
`;
