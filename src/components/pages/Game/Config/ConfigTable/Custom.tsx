import styled from "styled-components";

export default function Custom() {
  const options = [
    { name: "questions", value: "10", unit: "" },
    { name: "question time", value: "15000", unit: "ms" },
    { name: "test1", value: "5", unit: "" },
  ];

  return (
    <Container>
      {options.map((element, index) => {
        return (
          <ConfigParam key={index}>
            <Name>{element.name}:</Name>
            <Value
              defaultValue={element.value}
              type={"text"}
              maxLength={2}
            />
            <Unit>{element.unit}</Unit>
          </ConfigParam>
        );
      })}
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;

    justify-content: flex-start;
  }
`;

const ConfigParam = styled.div`
  & {
    height: 60px;

    align-self: flex-start;

    width: fit-content;
  }
`;

const Name = styled.div`
  & {
    width: fit-content;
    margin-right: 5px;

    background-color: #213a7e;
    border-radius: 10px;
    border: 4px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    padding: 10px;
  }
`;

const Value = styled.input`
  & {
    width: fit-content;

    padding: 10px;

    background-color: #213a7e;
    border-radius: 10px;
    border: 4px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

const Unit = styled.div`
  & {
    width: fit-content;
  }
`;
