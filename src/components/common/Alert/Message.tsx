import styled from "styled-components";

import { useAppContext } from "../../../contexts/AppContext";

export default function Message() {
  const { alert } = useAppContext();

  const { message = "Alert!", messageStyle } = alert;

  return <Container style={messageStyle}>{message}</Container>;
}

const Container = styled.div.attrs((messageStyle) => messageStyle)`
  && {
    flex-wrap: wrap;
    overflow-y: auto;

    color: black;
    font-size: 22px;
    font-weight: 500;
    line-height: 25px;

    white-space: pre-line;
    word-break: break-word;
    text-align: center;
    vertical-align: middle;

    margin-top: 35px;

    min-height: 15vh;
    height: fit-content;
  }
`;
