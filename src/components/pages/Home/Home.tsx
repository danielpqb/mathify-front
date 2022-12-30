import VideoBackground from "components/common/Dummy/VideoBackground";
import SettingsButton from "components/others/SettingsButton";
import PlayButton from "components/others/PlayButton";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <VideoBackground src={"videos/background.mp4"} />

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
  }
`;
