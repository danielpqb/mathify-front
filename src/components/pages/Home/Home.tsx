import VideoBackground from "components/common/Dummy/VideoBackground";
import SettingsButton from "components/others/SettingsButton";
import PlayButton from "components/others/PlayButton";
import styled from "styled-components";
import Header from "./Header";
import { Animation } from "react-animate-with-css";

export default function Home() {
  return (
    <Container>
      <Animation
        animateIn={{
          name: "fadeIn",
          timing: "cubic-bezier(1.0, 0, 1.0, 1.0)",
        }}
      >
        <VideoBackground src={"videos/math.mp4"} />

        <Header />
      </Animation>

      <Buttons>
        <div>
          <Animation animateIn={{ name: "backInLeft" }}>
            <PlayButton />
          </Animation>
        </div>
        <div>
          <Animation animateIn={{ name: "backInRight" }}>
            <SettingsButton />
          </Animation>
        </div>
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
