import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import ShoppingList from 'components/main/ShoppingList';
import ShoppingDetail from 'components/main/ShoppingDetail';
import img from 'images/item.png';
import { GlobalStateContext } from 'contexts/ProductContext';

function ProdListContainer() {
  const productList = useContext(GlobalStateContext).productList;
  const [selectedProd, selectProd] = useState('');
  if (!productList) return null;

  return (
    <>
      <ShoppingList shoppingList={productList} />
      <ShoppingDetail />
    </>
  );
}

export default ProdListContainer;
