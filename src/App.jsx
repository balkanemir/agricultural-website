import "./App.css";
import Home from "./pages/Home";
import { createGlobalStyle } from "styled-components";
import Glorich from "./Glorich-SemiBold.woff";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Glorich';
    src:  url(${Glorich}) format('woff');
    font-weight: normal;
    font-style: normal;;
    font-display: block;
  }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
};

export default App;
