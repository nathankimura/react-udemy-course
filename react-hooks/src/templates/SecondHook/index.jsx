import { useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch.js';
import './styles.css';

const POSTS_URL =
  'https://jsonplaceholder.typicode.com/posts/';

function App() {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch(
    POSTS_URL + postId,
    {
      method: 'GET',
      headers: {
        abc: '1' + postId,
      },
    },
  );

  useEffect(() => {
    console.log('ID do post', postId);
  }, [postId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const handleClick = (id) => {
    setPostId(id);
  };

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((p) => (
            <div
              key={`post-${p.id}`}
              onClick={() => handleClick(p.id)}
            >
              <p>{p.title}</p>
            </div>
          ))
        ) : (
          <div onClick={() => handleClick('')}>
            <p>{result.title}</p>
          </div>
        )}
      </div>
    );
  }

  return <h1>Oi</h1>;
}

export default App;
