import styled from "styled-components";
import ConfigParam from "./ConfigParam";

export default function Default() {
  const configParamsData = [
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
      {configParamsData.map((configParamData, index) => {
        return <ConfigParam configParamData={configParamData} key={index} />;
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
