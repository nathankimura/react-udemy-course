import { useLocation } from 'react-router-dom';
import './styles.css';

export function About() {
  const { state } = useLocation();

  return (
    <div>
      <h1>About page</h1>
      <p>{state}</p>
    </div>
  );
}
