import './App.css';
import {createGlobalStyle} from "styled-components";
import User from "./api/User";
import {useState} from "react";

function App() {
  const GlobalStyle = createGlobalStyle`
    body {
      background: #e9ecef;
    }
  `;
  const heavyWork = () => {
    console.log('무겁다')
    return ['홍길동','바보'];
  }
  const [time, setTime] = useState(1);
  const [names, setNames] = useState(() => {
    return heavyWork();
  });
  const [input, setInput] = useState('');


  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  const handleUpload = () => {
    setNames( (prevState) => {
      return([input, ...prevState])
    });
  };
  const handleClick = () => {
    let newTime;
    if (time >= 12) {
      newTime = 1;
    }
    else {
      newTime = time+1;
    }
    setTime(newTime);
  }

  return (
    <>
      <div>
        <input type='text' value={input} onChange={handleInputChange} />
        <button type='button' onClick={handleUpload}>upload</button>
      </div>
        {names.map((name,idx) => {
          return <p key={idx}>{name}</p>
        })

        }
      <br />
      <span>현재 시각 : {time}시</span>
      <button onClick={handleClick}>update</button>
      <br /><br /><hr />
        <User />
    </>

  );
}

export default App;
