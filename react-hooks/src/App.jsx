import { useEffect, useState } from 'react';
import './App.css';

const eventFn = () => {
  console.log('h1 clicado');
};

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  const handleClick2 = () => {
    setCounter2((prev) => prev + 1);
  };

  // componentDidUpdate - executa toda vez que o component atualiza
  // useEffect(() => {
  //   console.log('É o atualizas');
  // });

  // componentDidMount - executa uma vez, assim que a página carrega
  useEffect(() => {
    console.log('É o montas');
    document.querySelector('h1').addEventListener('click', eventFn);

    // componentWillUmount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  // com dependência - executa toda vez que a dependência mudar
  useEffect(() => {
    console.log('Contador mudou para:', counter);
  }, [counter, counter2]);

  return (
    <div className="App">
      <p>Teste 4</p>
      <h1>
        C1: {counter} C2: {counter2}
      </h1>
      <button onClick={handleClick}>+</button>
      <button onClick={handleClick2}>+(2)</button>
    </div>
  );
}

export default App;
