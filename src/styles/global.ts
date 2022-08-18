import { createGlobalStyle } from 'styled-components';

export const GlobalCSS = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body,html,#root{
    width: 100%;
    height: 100vh;

    font-family: ${({ theme }) => theme.fonts.rubik};
    font-size: 1rem;

    background: ${({ theme }) => theme.colors.neutral.lightGray};
  }

  button{
    cursor: pointer;
  }

  input,button{
    border:  0;
    outline: 0;
  }
  ul,ol{
    list-style: none;
  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;
