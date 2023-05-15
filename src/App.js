import { useEffect, useState } from "react";
// 外部套件
import axios from "axios";
// 內部資料
import logo from './assets/logo.svg';
import './assets/App.css';
import Input from './components/Input';
import './assets/all.scss';

// axios

function App() {
  const [text,setText] = useState('');
  const onChangeHandle = (e) => {
    setText(e.target.value);
  }

  useEffect(() => {
    (async()=>{
      console.log(process.env.REACT_APP_PATH);
      const path = process.env.REACT_APP_PATH
      const res = axios.get(path);
      console.log(res);
    })();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          lorem
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          <br/>
        </a>
        {text}
          <Input id='sampletest' text='這是一個' value={text} onChangeHandle={onChangeHandle}></Input>
          <button type="button" class="btn btn-primary">Primary</button>
      </header>
    </div>
  );
}

export default App;
