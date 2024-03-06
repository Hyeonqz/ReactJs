import logo from './logo.svg';
import './App.css';
import {createGlobalStyle} from "styled-components";

function App() {
  const GlobalStyle = createGlobalStyle`
    body {
      background: #e9ecef;
    }
  `;

  return (
    <>
      <GlobalStyle />
      <div>안녕하세요</div>
    </>

  );
}

export default App;
