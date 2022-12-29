import VideoBackground from "components/common/Dummy/VideoBackground";
import StartButton from "components/others/StartButton";
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
        <StartButton />
        <Settings
          onClick={() => {
            navigate("/game");
          }}
        >
          Settings
        </Settings>
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
    background: #5f3838;

    object-fit: cover;
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

const Settings = styled.div`
  & {
    background-color: var(--game-start-buttom-color);

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
