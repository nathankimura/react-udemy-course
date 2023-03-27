import './style.css';
import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <div className="menuClass">
      <Link to="/">Home</Link>
      <Link to="/about" state={'This is state from About'}>
        About
      </Link>
      <Link to="/posts">Posts</Link>
      <Link to="/posts/10">Post 10</Link>
      <Link to="/posts/10?batata=batatinha">Post batata</Link>
      <Link to="/redirect">Redirect</Link>
    </div>
  );
};
