import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import ShoppingList from 'components/main/ShoppingList';
import img from 'images/item.png';
import { GlobalStateContext } from 'contexts/ProductContext';

function ListContainer() {
  const productList = useContext(GlobalStateContext).productList;
  console.log(productList);

  return <ShoppingList shoppingList={productList} />;
}

export default ListContainer;
