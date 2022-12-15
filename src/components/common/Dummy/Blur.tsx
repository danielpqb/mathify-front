import styled from "styled-components";

export default function Blur() {
  return <Container></Container>;
}

const Container = styled.div`
  & {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: var(--doc-heigth);
    z-index: 20;
    background: rgba(0, 0, 0, 0.7);
    filter: blur(1);
  }
`;
