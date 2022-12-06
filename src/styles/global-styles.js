import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --fontsize: 26px;

    --background-a-color: #afafaf;
    --background-b-color: #252525;

    --config-true-color: rgb(0, 115, 45);
    --config-false-color: rgba(180, 30, 30, 0.5);
    
    --keyboard-buttom-enter-color: #11257c;
    --keyboard-buttom-backspace-color: #BC2525;
    --keyboard-buttom-number-color: #747474;
    
    --problem-operator-color: #ccb220;
    --problem-operate-color: #3044b8;
    --problem-equals-color: #1b743e;
    --problem-result-color: #F15412;
    
    --question-timer-color: #BC2525;
    
    --game-start-buttom-color: rgb(30, 60, 130);
    --game-restart-buttom-color: rgb(180, 170, 0);

    --game-answers-true-color: #287211;
    --game-answers-false-color: #BC2525;
    --game-answers-none-color: #747474;
    
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
    margin: 0px;
    padding: 0px;
    vertical-align: middle;
    box-sizing: border-box;
    font-family: "Roboto Slab";
    font-style: normal;
    font-weight: 400;
    font-size: var(--fontsize);
    line-height: 100%;
    color: white;
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
    margin: 30px 0px;
  }

  a:hover {
    opacity: 0.6;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
