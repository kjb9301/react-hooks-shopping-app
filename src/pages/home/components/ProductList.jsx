import React, { useContext } from 'react';

import ProductItem from 'pages/home/components//ProductItem';
import { GlobalStateContext } from 'contexts/ProductContext';

const ProductList = () => {
  const productList = useContext(GlobalStateContext).productList;
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
