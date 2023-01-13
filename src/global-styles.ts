import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --fontsize: 26px;
    --fontcolor: rgb(255, 255, 255);

    --background-a-color: rgb(40, 40, 40);
    --background-border-color: rgb(175, 175, 175);

    --config-true-color: rgb(0, 115, 45);
    --config-false-color: rgba(180, 30, 30, 0.5);

    --keyboard-buttom-enter-color: rgb(20, 125, 40);
    --keyboard-buttom-backspace-color: rgb(190, 40, 40);
    --keyboard-buttom-number-color: rgb(110, 110, 110);

    --problem-operator-color: rgba(0, 120, 80, 0.8);
    --problem-operate-color: rgba(0, 70, 180, 0.8);
    --problem-equals-color: rgba(110, 110, 110, 0.4);
    --problem-result-border-color: rgba(218, 207, 0, 1);

    --question-timer-color: rgb(150, 40, 40);

    --game-play-buttom-color: rgba(0, 50, 115, 1);
    --game-restart-buttom-color: rgb(150, 60, 0);
    --game-settings-buttom-color: rgba(0, 85, 15, 1);
    --game-save-buttom-color: rgba(0, 95, 120, 1);

    --game-answers-true-color: rgba(40, 115, 15, 0.9);
    --game-answers-false-color: rgba(190, 40, 40, 0.9);
    --game-answers-none-color: rgba(110, 110, 110, 0.9);

    --result-answers-header-color: transparent;
    --result-answers-line-color: rgb(70, 70, 70);

    --result-infobox-header-color: rgb(60, 70, 70);
    --result-infobox-value-color: rgb(90, 100, 100);

    --doc-heigth: 100%;
  }

  /* Hide scrollbar */
  body::-webkit-scrollbar {
    display: none; /* Chrome, Safari and Opera */
  }
  body {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }

  html,
  body {
    height: var(--doc-heigth);
  }

  * {
    background: none;
    border: none;
    margin: 0;
    padding: 0;
    vertical-align: middle;
    box-sizing: border-box;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: var(--fontsize);
    line-height: 100%;
    color: var(--fontcolor);
    outline: none;
  }

  *:focus {
    outline: none;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  input {
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 100%;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    font-size: 15px;
    color: #FFFFFF;
  }

  a:hover {
    opacity: 0.6;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
