import React, { useEffect, useContext } from 'react';
import axios from 'axios';

import ProductItem from 'pages/home/components//ProductItem';
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from 'contexts/ProductContext';

import img from 'images/item.png';

const ProductList = () => {
  console.log('productList render');
  const dispatch = useContext(GlobalDispatchContext);
  const { productList } = useContext(GlobalStateContext);

  useEffect(() => {
    console.log(!localStorage.productData);
    if (!localStorage.productData) {
      setInitData();
    } else {
      console.log('get products');
      getProducts();
    }
  }, []);

  const setInitData = async () => {
    await axios
      .get('data/goods.json')
      .then((res) => {
        const goods = res.data.goods.map((good) => (good = { ...good, img }));
        localStorage.productData = JSON.stringify(goods);
      })
      .then(() => {
        getProducts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getProducts = () => {
    const productData = JSON.parse(localStorage.getItem('productData'));
    dispatch({
      type: 'GET_PRODUCTS',
      data: productData,
    });
  };
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
