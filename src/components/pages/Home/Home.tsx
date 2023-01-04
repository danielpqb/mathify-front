import VideoBackground from "components/common/Dummy/VideoBackground";
import SettingsButton from "components/others/SettingsButton";
import PlayButton from "components/others/PlayButton";
import styled from "styled-components";
import Header from "./Header";

export default function Home() {
  return (
    <Container>
      <VideoBackground src={"videos/math.mp4"} />

      <Header />

      <Buttons>
        <PlayButton />
        <SettingsButton />
      </Buttons>
    </Container>
  );
}

const Container = styled.div`
  & {
    flex-direction: column;
    justify-content: flex-start;

    position: absolute;
    top: 0px;
    height: 100%;
  }
`;

const Buttons = styled.div`
  & {
    position: fixed;
    bottom: 10vh;
    height: fit-content;
    flex-direction: column;

    width: unset;
  }
`;
