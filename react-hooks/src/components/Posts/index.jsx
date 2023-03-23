import { useContext, useEffect, useRef } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import {
  incrementCounter,
  decrementCounter,
} from '../../contexts/CounterProvider/actions';

export const Posts = () => {
  const isMounted = useRef(true);
  const postsContext = useContext(PostsContext);
  const counterContext = useContext(CounterContext);
  const { postsState, postsDispatch } = postsContext;
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <h2>Counter: {counterState.counter}</h2>
      <button onClick={() => incrementCounter(counterDispatch)}>+</button>
      <button onClick={() => decrementCounter(counterDispatch)}>-</button>
      <h1>POSTS</h1>
      {postsState.loading && (
        <p>
          <strong>Carregando posts...</strong>
        </p>
      )}
      {postsState.posts.length > 0 &&
        postsState.posts.map((p) => <p key={p.id}>{p.title}</p>)}
    </div>
  );
};
