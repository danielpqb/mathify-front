import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

export default function SubmitButton({ children, disabled, onClick }) {
  return (
    <Container onClick={onClick}>
      {disabled ? <ThreeDots height="13" width="51" color="#FFFFFF" ariaLabel="three-dots-loading" /> : <>{children}</>}
    </Container>
  );
}

const Container = styled.button`
  & {
    cursor: pointer;
    background: #1877f2;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 33px;
    color: #ffffff;
    width: 100%;
    height: 60px;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    font-size: 20px;
    &:hover {
      filter: brightness(0.8);
    }
  }
`;
