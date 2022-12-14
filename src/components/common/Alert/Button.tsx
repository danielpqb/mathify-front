import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import React, { ReactNode } from "react";

export default function Button({
  children,
  disabled,
  style,
  onClick,
}: {
  children: ReactNode;
  disabled?: boolean;
  style?: React.CSSProperties;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Container
      onClick={disabled ? () => { } : onClick}
      style={{ ...style, background: undefined, filter: undefined, border: undefined }}
    >
      <Background
        backgroundColor={style?.background as string}
        filter={style?.filter as string}
        border={style?.border as string}
      />

      {disabled ? (
        <ThreeDots
          height="13"
          width="51"
          color="#FFFFFF"
          ariaLabel="three-dots-loading"
        />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

const Container = styled.button.attrs((style) => style)`
  & {
    position: relative;
    overflow: hidden;

    cursor: pointer;

    width: 100%;
    height: 45px;

    border: none;
    border-radius: 5px;

    box-sizing: content-box;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const Background = styled.div<{ backgroundColor: string; filter: string; border: string }>`
  & {
    position: absolute;
    z-index: -1;
    background: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : "#505050")};
    filter: ${({ filter }) => (filter ? filter : "")};
    border: ${({ border }) => (border ? border : "")};
  }
`;

const Text = styled.div`
  & {
    color: #ffffff;
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
  }
`;
