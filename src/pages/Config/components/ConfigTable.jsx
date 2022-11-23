import styled from "styled-components";

export default function ConfigTable() {
  return (
    <Container>
      <ConfigParam>
        <Name>Questions:</Name>
        <Value>
          10
          <Unit></Unit>
        </Value>
      </ConfigParam>

      <ConfigParam>
        <Name>QuestionTime:</Name>
        <Value>
          15000
          <Unit>ms</Unit>
        </Value>
      </ConfigParam>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;
  }
`;

const ConfigParam = styled.div`
  & {
    height: 150px;
  }
`;

const Name = styled.div`
  & {
    width: fit-content;
    margin-right: 5px;
  }
`;

const Value = styled.div`
  & {
    width: fit-content;
  }
`;

const Unit = styled.div`
  & {
    width: fit-content;
  }
`;
