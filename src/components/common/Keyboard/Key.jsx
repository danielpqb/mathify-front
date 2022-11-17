import styled from "styled-components";

export default function Key({ value, children }) {
  return (
    <Container
      onClick={() => {
        console.log(value);
      }}
    >
      {children}
    </Container>
  );
}

const Container = styled.div`
  & {
    background-color: #213a7e;

    border-radius: 10px;

    border: 4px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    width: 60px;
    height: 60px;

    justify-self: center;
  }
`;
