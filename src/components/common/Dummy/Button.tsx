import styled, { StyledComponentProps } from "styled-components";

export default function Button(
  props: StyledComponentProps<"div", any, object, never>
) {
  return <Container {...props}>{props.children}</Container>;
}

const Container = styled.div`
  & {
    background-color: var(--game-play-buttom-color);

    border-radius: 10px;

    border: 4px solid rgba(0, 0, 0, 0.4);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    max-width: 150px;
    min-height: 50px;
    max-height: 50px;

    justify-self: center;
    margin-top: 10px;
  }

  &:hover {
    cursor: pointer;
  }
`;
