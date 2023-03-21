import P from 'prop-types';
import React, { useCallback, useState } from 'react';
import './App.css';

const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho, renderizou');
  return <button onClick={() => incrementButton(100)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  const incrementButton = useCallback((num) => {
    setCounter((c) => c + num);
  }, []);

  console.log('Pai renderizou');

  return (
    <div className="App">
      <p>Teste 1</p>
      <h1>C1: {counter}</h1>
      <Button incrementButton={incrementButton} />
    </div>
  );
}

export default App;
