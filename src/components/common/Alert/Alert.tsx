import styled from "styled-components";

import { useAppContext } from "../../../contexts/AppContext";
import IonIcon from "../IonIcon/IonIcon";
import Blur from "../Dummy/Blur";
import Button from "./Button";
import Message from "./Message";
import Layout from "./Layout";
import * as AlertTypes from "./types";
import { defineProps } from "./functions";

export default function Alert() {
  const { alert, setAlert } = useAppContext();

  const { type, style, doThis, icon } = defineProps(alert);

  let renderButtons;
  switch (type) {
  case "ok-cancel":
    renderButtons = (
      <>
        <Button
          style={{
            background: style.mainColor,
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.3)",
            marginTop: "10px",
          }}
          onClick={() => {
            doThis();
            setAlert({});
          }}
        >
            Ok
        </Button>

        <Button
          style={{
            background: style.mainColor,
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.3)",
            marginTop: "10px",
            filter: "grayscale(100%) invert(15%)",
          }}
          onClick={() => {
            setAlert({});
          }}
        >
            Cancel
        </Button>
      </>
    );
    break;

  default:
    renderButtons = (
      <>
        <Button
          style={{
            background: style.mainColor,
            border: "1px solid rgba(0, 0, 0, 0.1)",
            boxShadow: "2px 4px 10px rgba(0, 0, 0, 0.3)",
            marginTop: "10px",
          }}
          onClick={() => {
            doThis();
            setAlert({});
          }}
        >
            Ok
        </Button>
      </>
    );
    break;
  }

  return (
    <>
      <Blur />

      <Container alertStyle={style as AlertTypes.StyleType}>
        <Layout alertStyle={style as AlertTypes.StyleType} />

        <IonIcon
          name={icon}
          style={{
            fontSize: `${style.iconSize}px`,
            color: style.mainColor,
            filter: "brightness(1.03)",
          }}
          divStyle={{
            position: "absolute",
            top: `-${style.iconSize / 2 - 5}px`,
            width: "fit-content",
            height: "fit-content",
          }}
        />

        <Message />

        {renderButtons}
      </Container>
    </>
  );
}

const Container = styled.div<{ alertStyle: AlertTypes.StyleType }>`
  & {
    position: fixed;
    margin: auto;
    top: ${({ alertStyle }) => alertStyle.iconSize / 2}px;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 21;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 90vw;
    max-width: 450px;
    height: fit-content;

    max-height: calc(var(--doc-heigth) - 70px);
    padding: 15px;
  }

  div {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  * {
    font-family: "Fira Sans";
  }
`;
