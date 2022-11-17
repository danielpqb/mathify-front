import styled from "styled-components";

export default function Key({ children }) {
  return (
    <Container
      onClick={(e) => {
        console.log(e.target.innerText);
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
  }
`;
