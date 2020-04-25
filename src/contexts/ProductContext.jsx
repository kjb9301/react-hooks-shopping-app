import React, { createContext, useReducer } from 'react';

export const GlobalStateContext = createContext();

const initialState = {
  productList: JSON.parse(localStorage.getItem('shoppingData')),
  basketList: null,
  productOne: null,
  selectedProd: null,
};

export const GlobalDispatchContext = createContext();

function globalReducer(state, action) {
  switch (action.type) {
    case 'GET_PRODUCT':
      console.log(action);
      return {
        ...state,
        productOne: action.payload,
      };
    case 'ADD_TO_BASKET':
      return {
        ...state,
        basketList: state.basketList.concat(action.payload),
      };
    case 'ALL_CHECK':
      return {
        ...state,
        basketList: state.basketList.map((item) => {
          return { ...item, checked: !item.checked };
        }),
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
