import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  // componentDidUpdate - executa toda vez que o component atualiza
  useEffect(() => {
    console.log('É o atualizas');
  });

  // componentDidMount - executa uma vez, assim que a página carrega
  useEffect(() => {
    console.log('É o montas');
  }, []);

  // com dependência - executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('Contador mudou para:', counter);
  }, [counter]);

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
