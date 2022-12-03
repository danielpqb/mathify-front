import { useContext } from "react";
import styled from "styled-components";

import { AppContext } from "../../../contexts/contexts";
import SubmitButton from "./SubmitButton";

export default function Alert() {
  const { alert, setAlert } = useContext(AppContext);

  const { color, icon, message, fontColor, doThis, type } = alert;

  return (
    <>
      <Blur />

      <Container>
        <AlertIcon color={color}>
          <ion-icon name={icon ? icon : "checkmark-circle"}></ion-icon>
        </AlertIcon>

        <Message>{message ? message : "Alert!"}</Message>

        {type === 1 ? (
          <>
            <ColoredButton
              color={color}
              fontColor={fontColor}
            >
              <SubmitButton
                onClick={() => {
                  doThis();
                  setAlert({});
                }}
              >
                Ok
              </SubmitButton>
            </ColoredButton>

            <ColoredButton
              color={"#ececec"}
              fontColor={"#505050"}
            >
              <SubmitButton
                onClick={() => {
                  setAlert({});
                }}
              >
                Cancel
              </SubmitButton>
            </ColoredButton>
          </>
        ) : type === 2 ? (
          <></>
        ) : (
          <>
            <ColoredButton
              color={color}
              fontColor={fontColor}
            >
              <SubmitButton
                onClick={() => {
                  setAlert({});
                }}
              >
                Ok
              </SubmitButton>
            </ColoredButton>
          </>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 21;
    width: 90vw;
    max-width: 450px;
    height: fit-content;
    padding: 15px;
    background: rgba(220, 220, 220, 1);
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgba(150, 150, 150, 0.8);
    border: 2px solid rgba(0, 0, 0, 0.1);
  }
  button {
    cursor: pointer;
    margin-top: 10px;
    &:hover {
      filter: brightness(0.6);
    }
  }
  div {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  * {
    font-family: "Arial";
  }
`;

const Blur = styled.div`
  && {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 20;
    background: rgba(0, 0, 0, 0.7);
    filter: blur(1);
  }
`;

const Message = styled.div`
  && {
    color: black;
    font-size: 20px;
    margin-top: 40px;
    margin-bottom: 30px;
    white-space: pre-line;
    word-break: break-word;
    text-align: center;
  }
`;

const AlertIcon = styled.div`
  && {
    position: absolute;
    top: -35px;
    background: rgba(220, 220, 220, 1);
    border-radius: 50%;
    width: fit-content;
    height: fit-content;
  }
  ion-icon {
    color: ${({ color }) => (color ? color : "rgb(30, 130, 200)")};
    font-size: 70px;
    filter: drop-shadow(1px 2px 1px rgba(0, 0, 0, 0.2));
  }
`;

const ColoredButton = styled.div`
  button {
    background: ${({ color }) => color};
    color: ${({ fontColor }) => fontColor};
    border: 2px solid rgba(0, 0, 0, 0.1);
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  }
`;
