import styled from "styled-components";

export default function ClickButton({ choiceData, choicesChecked, setChoicesChecked }) {
  return (
    <Container
      style={choiceData.isChecked && { background: "#115c2d" }}
      onClick={async () => {
        setChoicesChecked((old) => {
          old[choiceData.id] = !old[choiceData.id];
          console.log(old);
          return { ...old };
        });
      }}
    >
      {choiceData.value}
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
