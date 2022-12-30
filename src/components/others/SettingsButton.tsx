import Button from "components/common/Dummy/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SettingsButton() {
  const navigate = useNavigate();

  return (
    <Container
      onClick={() => {
        navigate("/settings");
      }}
    >
      Settings
    </Container>
  );
}

const Container = styled(Button)`
  & {
    background: var(--game-settings-buttom-color);
  }
`;
