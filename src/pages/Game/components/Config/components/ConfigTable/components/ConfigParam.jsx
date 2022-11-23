import styled from "styled-components";
import ClickButton from "./ClickButton";

export default function ConfigParam({ configParamData }) {
  return (
    <Container>
      <Name>{configParamData.name}:</Name>

      {configParamData.buttons.map((buttonData, index) => {
        return <ClickButton key={index} buttonData={buttonData} isToggle={configParamData.isOneChoice} />;
      })}

      <Unit>{configParamData.unit}</Unit>
    </Container>
  );
}

const Container = styled.div`
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

const Unit = styled.div`
  & {
    width: fit-content;
  }
`;
