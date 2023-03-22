import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const Paragraph = () => {
  const handleClick = () => {
    setState({ ...state, counter: counter + 1 });
  };

  const theContext = useContext(GlobalContext);
  const {
    state: { body, counter },
    state,
    setState,
  } = theContext;
  return <p onClick={handleClick}>{body}</p>;
};
