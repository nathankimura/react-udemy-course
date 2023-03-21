import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    console.log('É o atualizas');
  });

  const handleClickMinus = () => {
    setCounter((prev) => prev - 1);
  };
  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClickMinus}>-</button>
    </div>
  );
}

export default App;
