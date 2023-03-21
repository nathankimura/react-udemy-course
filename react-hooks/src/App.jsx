import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [reverse, setReverse] = useState(false);

  const handleClick = () => {
    setReverse(!reverse);
    setCount((prev) => prev + 1);
  };

  const checkReverse = reverse ? 'logo-react-reverse' : '';

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className={`logo-react ${checkReverse}`}
            alt="React logo"
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button className="reverse-button" onClick={handleClick}>
        click to reverse
      </button>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
