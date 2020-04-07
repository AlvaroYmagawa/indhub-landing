import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

// CUSTOM IMPORTS
import colors from './colors';
import fonts from './fonts';

export default createGlobalStyle`
  /* RESET ALL DEFAULT CSS STYLE */
  *{
    font-family: 'Helvetica Neue';
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html { font-size: 10px; }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    background: ${colors.primary};
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  /* DEFAULT FONT SIZE*/
  h1{
    font: ${fonts.title} 'Roboto', sans-serif;
    font-weight: bold;
  }

  h2{
    font: ${fonts.miniTitle} 'Roboto', sans-serif;
    font-weight: bold;
  }

  input, button{
    font: ${fonts.regular} 'Roboto', sans-serif;
  }

  small{
    font: ${fonts.small} 'Roboto', sans-serif;
  }

  /* DEFAULT BUTTON STYLE */
  button {
    background: ${colors.accent};
    cursor: pointer;
    border: none;

    &:focus{
      outline: 0;
    }

    &:active{
      outline: none;
      border: none;
    }
  }
`;
