import SettingsButton from "components/others/SettingsButton";
import PlayButton from "components/others/PlayButton";
import styled from "styled-components";
import Header from "./Header";
import Lottie from "react-lottie";

import signs from "../../../assets/signs.json";
import { Animation } from "react-animate-with-css";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const winWidth = Math.min(window.innerWidth, 700);
  const winHeight = Math.min(window.innerHeight, 700);
  const portrait = window.matchMedia("(orientation: portrait)").matches
    ? true
    : false;

  return (
    <Container>
      <Animation id="homePage">
        <Animation
          animateIn={{
            name: "fadeIn",
            duration: 1500,
            timing: "cubic-bezier(1.0, 0, 1.0, 1.0)",
          }}
        >
          <Header />
        </Animation>

        <Logo>
          <Animation animateIn={{ name: "fadeInDownBig" }}>
            <Lottie
              options={{ ...defaultOptions, animationData: signs }}
              width={portrait ? winWidth : winHeight}
              height={portrait ? winWidth : winHeight}
              isStopped={false}
              isPaused={false}
            />
          </Animation>
        </Logo>

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
      </Animation>
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
    bottom: 7vh;
    height: fit-content;
    flex-direction: column;
  }
`;

const Logo = styled.div`
  & {
    position: absolute;
    bottom: 7vh;
  }

  * {
    pointer-events: none;
  }
`;
