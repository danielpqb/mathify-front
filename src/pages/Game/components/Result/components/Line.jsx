import styled from "styled-components";
import Value from "./Value";

export default function Line({ data, type }) {
  const filterValues = ["id", "myAnswer", "correctAnswer", "timeSpent"];

  let style = {
    gridTemplateColumns: filterValues
      .map(() => {
        return "1fr ";
      })
      .join(""),
  };

  if (type === "header") {
    style = { ...style, height: "50px" };
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
      {filterValues.map((valueName, index) => {
        const value = String(lineData[valueName]);

        return (
          <Value
            value={value}
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

    height: 50px;

    text-align: center;
  }
`;
