import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export function Redirect() {
  const [counter, setCounter] = useState(5);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setCounter((t) => t - 1);
    }, 1000);

    if (counter <= 0) {
      navigate('/about');
    }
  });
  return (
    <div>
      <h1>Being redirected in: {counter}</h1>
    </div>
  );
}
