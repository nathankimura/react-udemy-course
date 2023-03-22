import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const Paragraph = () => {
  const context = useContext(GlobalContext);
  const {
    state: { body },
  } = context;
  return <p>{body}</p>;
};
