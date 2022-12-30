import Button from "components/common/Dummy/Button";
import { useAppContext } from "contexts/AppContext";
import { saveConfigs } from "functions/game-functions";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SaveButton() {
  const navigate = useNavigate();

  const { setGameData, configData, setAlert } = useAppContext();

  return (
    <Container
      onClick={() => {
        saveConfigs({ setGameData, configData, setAlert });
        navigate("/home");
      }}
    >
      Save
    </Container>
  );
}

const Container = styled(Button)`
  & {
    background: var(--game-save-buttom-color);
  }
`;
