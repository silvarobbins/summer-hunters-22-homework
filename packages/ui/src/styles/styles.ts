import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
    box-sizing: inherit;
    width: 100%;
  }

  // Scrollbar styles 
  html {
    scrollbar-width: thin;
  }

  body::-webkit-scrollbar {
    width: 6px;
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--black);
    border-radius: 10px;
  }

  body {
    margin: 0 auto;
    font-family: 'Poppins';
  }

  ul {
    list-style: inside;
    list-style-position: outside;
    .sub {
      margin-left: 2em;
    }
  }

  li, ol {
    list-style: inside;
    list-style-position: outside;
  }

  a {
    text-decoration: none;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  @keyframes characterBounce {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-40px)
    }
  }

  @keyframes eatAnimation {
    0% {
      transform: translate(85px, 30px);
    }
    100% {
      transform: translate(0px, 0px);
      transform: scale(0.6);
    }
  }

  @keyframes playAnimation {
    0% {
      transform: translate(85px, 50px);
    }
    100% {
      transform: translate(-87px, 50px);
    }
  }

  @keyframes sleepAnimation {
    0% {
      transform: translate(0px, 0px);
      transform: scale(0.9);
    }
    100% {
      transform: translate(-10px, 10px);
    }
  }
`;

