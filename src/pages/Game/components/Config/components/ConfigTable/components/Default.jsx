import styled from "styled-components";

export default function Default() {
  const options = [
    {
      name: "time",
      isOneChoice: true,
      buttons: [{ txt: "15s" }, { txt: "10s" }, { txt: "5s" }],
    },
    {
      name: "operations",
      isOneChoice: false,
      buttons: [{ txt: "+-" }, { txt: "×÷" }],
    },
    {
      name: "questions",
      isOneChoice: true,
      buttons: [{ txt: "5" }, { txt: "7" }, { txt: "10" }],
    },
  ];

  return (
    <Container>
      {options.map((option, index) => {
        return (
          <ConfigParam key={index}>
            <Name>{option.name}:</Name>
            {option.buttons.map((button, i) => {
              return <Value key={i}>{button.txt}</Value>;
            })}
            <Unit>{option.unit}</Unit>
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

const Value = styled.div`
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
