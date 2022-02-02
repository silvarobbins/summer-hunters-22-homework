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

  @keyframes characterMove {
    0% {
      transform: translateX(70px);
    }
    100% {
      transform: translateX(-70px);
    }
  }

  @keyframes characterBounce {
    0% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(-40px)
    }
  }
`;
