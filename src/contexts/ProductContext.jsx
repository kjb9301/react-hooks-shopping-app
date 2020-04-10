import React, { createContext, useEffect, useReducer } from 'react';

export const GlobalStateContext = createContext();

const initialState = {
  productList: JSON.parse(localStorage.getItem('shoppingData')),
  basketList: [],
};

export const GlobalDispatchContext = createContext();

function globalReducer(state, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        productList: action.initData,
      };
    default:
      return console.log('unhandled type');
  }
}

export function GlobalContextProvider({ children }) {
  const [globalState, dispatch] = useReducer(globalReducer, initialState);

  if (!globalState.productList) return null;

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={globalState}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
}
