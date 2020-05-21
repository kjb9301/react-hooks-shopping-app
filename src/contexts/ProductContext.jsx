import React, { createContext, useReducer } from 'react';

export const GlobalStateContext = createContext();

const initialState = {
  productList: null,
  basketList: null,
  productOne: null,
};

export const GlobalDispatchContext = createContext();

function globalReducer(state, action) {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return {
        ...state,
        productList: action.data,
      };
    case 'GET_PRODUCT':
      return {
        ...state,
        productOne: action.data,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        basketList: state.basketList.concat(action.data),
        productOne: null,
      };
    case 'ALL_CHECK':
      console.log(action.checked);
      return {
        ...state,
        basketList: state.basketList.map((item) => {
          return { ...item, checked: action.checked };
        }),
      };
    case 'CHECK_CART_PRODUCT':
      return {
        ...state,
        basketList: state.basketList.map((item) =>
          item.id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        ),
      };
    case 'REMOVE_IN_CART':
      return {
        ...state,
        basketList: state.basketList.filter((item) => item.id !== action.id),
      };
    case 'UPDATE_QUANTITY':
      const { id, value } = action.payload;
      return {
        ...state,
        basketList: state.basketList.map((item) =>
          item.id === id ? { ...item, quantity: value } : item
        ),
      };
    case 'POST_ORDERS':
      return {
        ...state,
        basketList: state.basketList.filter((item) => item.checked === false),
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
