import { useContext, useRef } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const H1 = () => {
  const context = useContext(GlobalContext);
  const inputRef = useRef();

  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>
        {context.state.title}
      </h1>
      <input type="text" ref={inputRef} />
    </>
  );
};
