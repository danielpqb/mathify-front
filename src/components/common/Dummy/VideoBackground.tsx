import styled from "styled-components";

export default function VideoBackground({ src }: { src: string }) {
  return (
    <Container
      autoPlay
      loop
      muted
    >
      <source src={src}></source>
    </Container>
  );
}

const Container = styled.video`
  & {
    position: absolute;
    top: 0px;


    height: var(--doc-heigth);
    @media (orientation: landscape) {
      height: 100vw;
    }
  }
`;
