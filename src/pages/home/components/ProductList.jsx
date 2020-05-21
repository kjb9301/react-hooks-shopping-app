import React, { useEffect, useContext } from 'react';
import axios from 'axios';

import ProductItem from './ProductItem';
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from 'contexts/ProductContext';

import img from 'images/item.png';

const ProductList = () => {
  const dispatch = useContext(GlobalDispatchContext);
  const { productList } = useContext(GlobalStateContext);

  useEffect(() => {
    if (!localStorage.productData) {
      setDataInLocalstorage();
    } else {
      getProducts();
    }
  }, []);

  const setDataInLocalstorage = async () => {
    await axios
      .get('data/goods.json')
      .then((res) => {
        const products = res.data.goods.map(
          (good) => (good = { ...good, img })
        );
        localStorage.productData = JSON.stringify(products);
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

  if (!productList) return null;

  return (
    <>
      {productList.map((item) => {
        return <ProductItem key={item.id} listItem={item} />;
      })}
    </>
  );
};

export default ProductList;
