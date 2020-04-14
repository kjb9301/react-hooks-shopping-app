import React, { createContext, useEffect, useReducer } from 'react';

export const GlobalStateContext = createContext();

const initialState = {
  productList: JSON.parse(localStorage.getItem('shoppingData')),
  basketList: [],
  productOne: null,
  selectedProd: null,
};

export const GlobalDispatchContext = createContext();

function globalReducer(state, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        productList: action.initData,
      };
    case 'GET_PRODUCT':
      console.log(action);
      return {
        ...state,
        productOne: action.payload,
      };
    case 'SET_PRODUCT':
      console.log(action.payload);
      return {
        ...state,
        selectedProd: action.payload,
      };
    case 'ADD_BASKET':
      console.log(action.payload);
      return {
        ...state,
        basketList: state.basketList.concat(action.payload),
      };
    default:
      return console.log('unhandled action type');
  }
}

export function GlobalContextProvider({ children }) {
  const [globalState, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={globalState}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
}
