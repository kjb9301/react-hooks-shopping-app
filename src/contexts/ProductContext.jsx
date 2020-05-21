import React, { createContext, useReducer } from 'react';

export const GlobalStateContext = createContext();

const initialState = {
  productList: null,
  productOne: null,
  cartList: [],
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
        cartList: state.cartList.concat(action.data),
        productOne: null,
      };
    case 'ALL_CHECK':
      console.log(action.checked);
      return {
        ...state,
        cartList: state.cartList.map((item) => {
          return { ...item, checked: action.checked };
        }),
      };
    case 'CHECK_CART_PRODUCT':
      return {
        ...state,
        cartList: state.cartList.map((item) =>
          item.id === action.id ? { ...item, checked: !item.checked } : item
        ),
      };
    case 'REMOVE_IN_CART':
      return {
        ...state,
        cartList: state.cartList.filter((item) => item.id !== action.id),
      };
    case 'UPDATE_QUANTITY':
      const { id, value } = action.payload;
      return {
        ...state,
        cartList: state.cartList.map((item) =>
          item.id === id ? { ...item, quantity: value } : item
        ),
      };
    case 'POST_ORDERS':
      return {
        ...state,
        cartList: state.cartList.filter((item) => item.checked === false),
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
