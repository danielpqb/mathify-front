import VideoBackground from "components/common/Dummy/VideoBackground";
import SettingsButton from "components/others/SettingsButton";
import PlayButton from "components/others/PlayButton";
import styled from "styled-components";
import Header from "./Header";
import { Animation } from "react-animate-with-css";
import Lottie from "react-lottie";

import mathSign from "../../../assets/mathSign.json";
import signs from "../../../assets/signs.json";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const winWidth = window.innerWidth;
  const winHeight = window.innerHeight;
  const portrait = window.matchMedia("(orientation: portrait)").matches ? true : false;

  return (
    <Container>
      <Animation
        animateIn={{
          name: "fadeIn",
          timing: "cubic-bezier(1.0, 0, 1.0, 1.0)",
        }}
      >
        <Header />
      </Animation>

      <div style={{ position: "absolute", margin: "auto" }}>
        {/* <Lottie
          options={{ ...defaultOptions, animationData: mathSign }}
          height={400}
          width={400}
          isStopped={false}
          isPaused={false}
        /> */}
        <Lottie
          options={{ ...defaultOptions, animationData: signs }}
          width={portrait ? winWidth : winHeight}
          height={portrait ? winWidth : winHeight}
          isStopped={false}
          isPaused={false}
        />
      </div>

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
