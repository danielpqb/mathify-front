import styled, { StyledProps } from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import React from "react";

export default function SubmitButton({
  children,
  disabled,
  onClick,
  style,
}: {
  children: React.ReactNode;
  disabled: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style: React.CSSProperties;
}) {
  return (
    <Container
      onClick={onClick}
      style={style}
    >
      {disabled ? (
        <ThreeDots
          height="13"
          width="51"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
        />
      ) : (
        <>{children}</>
      )}
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
