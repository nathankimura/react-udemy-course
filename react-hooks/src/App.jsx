import P from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import './App.css';

const Post = ({ post }) => {
  console.log('Filho renderizou');
  return (
    <div className="post" key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number.isRequired,
    title: P.string.isRequired,
    body: P.string.isRequired,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  console.log('Pai renderizou');

  // componentDidMount

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((result) => result.json())
      .then((result) => setPosts(result));
  }, []);

  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => <Post key={post.id} post={post} />)
        );
      }, [posts])}
      {posts.length <= 0 && <p>Carregando posts</p>}
    </div>
  );
}

export default App;
