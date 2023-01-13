import VideoBackground from "components/common/Dummy/VideoBackground";
import SettingsButton from "components/others/SettingsButton";
import PlayButton from "components/others/PlayButton";
import styled from "styled-components";
import Header from "./Header";
import { Animation } from "react-animate-with-css";

export default function Home() {
  return (
    <Container>
      <Animation animateIn={{ name: "fadeIn", duration: 2000, timing: "cubic-bezier(1.0, 0, 1.0, 1.0)" }}>
        <VideoBackground src={"videos/math.mp4"} />
      </Animation>

      <Animation animateIn={{ name: "fadeIn", duration: 2000, timing: "cubic-bezier(1.0, 0, 1.0, 1.0)" }}>
        <Header />
      </Animation>

      <Buttons>
        <Animation animateIn={{ name: "backInLeft" }}>
          <PlayButton />
        </Animation>
        <Animation animateIn={{ name: "backInRight" }}>
          <SettingsButton />
        </Animation>
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
