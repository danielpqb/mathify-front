import styled from "styled-components";

export default function ClickButton({ choice, choicesChecked, setChoicesChecked }) {
  return (
    <Container
      style={choicesChecked && choicesChecked[choice] ? { background: "#115c2d" } : {}}
      onClick={() => {
        setChoicesChecked((old) => {
          const newer = { ...old };
          newer[choice] = !newer[choice];
          return newer;
        });
      }}
    >
      {choice}
    </Container>
  );
}

const Container = styled.div.attrs(({ style }) => style)`
  & {
    width: 100%;

    padding: 0px 5px;
    margin: 10px;

    background: #63170d;
    border-radius: 10px;
    border: 4px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;
