import React, { useEffect, useContext } from 'react';

import ProductItem from 'pages/home/components//ProductItem';
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from 'contexts/ProductContext';

const ProductList = () => {
  const dispatch = useContext(GlobalDispatchContext);
  useEffect(() => {
    const initData = JSON.parse(localStorage.getItem('shoppingData'));
    dispatch({
      type: 'GET_PRODUCTS',
      payload: initData,
    });
  }, []);
  const productList = useContext(GlobalStateContext).productList;
  console.log(productList);
  if (!productList) return null;
  return (
    <>
      {productList.map((listItem) => {
        return <ProductItem key={listItem.id} listItem={listItem} />;
      })}
    </>
  );
};

export default ProductList;
