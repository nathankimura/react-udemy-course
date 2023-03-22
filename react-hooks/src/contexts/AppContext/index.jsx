import { createContext, useReducer } from 'react';
import { globalState } from './data';
import { reducer } from '../Reducers/reducer';
import { actions } from '../Actions/actions';

export const GlobalContext = createContext();

// eslint-disable-next-line
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return (
    <GlobalContext.Provider value={{ state, changeTitle }}>
      {children}
    </GlobalContext.Provider>
  );
};
