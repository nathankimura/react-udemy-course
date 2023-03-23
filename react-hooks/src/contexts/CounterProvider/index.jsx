import P from 'prop-types';
import { useReducer } from 'react';
import { data } from '../CounterProvider/data';

import { CounterContext } from './context';
import { reducer } from './reducer';

export const CounterProvider = ({ children }) => {
  const [counterState, counterDispatch] = useReducer(reducer, data);
  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

CounterProvider.propTypes = {
  children: P.node.isRequired,
};
