import styled from "styled-components";
import Value from "./Value";

export default function Line({ data, type }) {
  const lineData =
    type === "answer"
      ? {
          ...data,
          timeSpent: `${(data?.timeSpent / 1000).toFixed(3)}s`,
          type: type,
        }
      : { ...data, type: type };

  const filterValues = ["id", "myAnswer", "correctAnswer", "isCorrect", "timeSpent"];

  return (
    <Container>
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

const Container = styled.div`
  & {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    height: 60px;

    text-align: center;
  }
`;
