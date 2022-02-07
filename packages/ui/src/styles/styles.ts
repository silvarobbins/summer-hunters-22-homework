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

  ul, li, ol {
    list-style: none;
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

  classname:active {
    @keyframes eatAnimation {
    0% {
      transform: translate(85px, 30px);
    }
    100% {
      transform: translate(0px, 0px);
      transform: scale(0.6);
    }
    }
  }
`;
