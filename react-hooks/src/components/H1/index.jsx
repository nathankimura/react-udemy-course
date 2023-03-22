import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const H1 = () => {
  const theContext = useContext(GlobalContext);
  const {
    state: { title, counter },
  } = theContext;
  return (
    <h1>
      {title}, contador: {counter}
    </h1>
  );
};
