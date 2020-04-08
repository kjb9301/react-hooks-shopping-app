import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';

import ShoppingList from 'components/main/ShoppingList';
import img from 'images/item.png';

function ListContainer() {
  const [shoppingData, setShoppingData] = useState([]);

  // const setInitData = () => {
  //   axios
  //     .get('dummy/goods.json')
  //     .then((res) => {
  //       const goods = res.data.goods.map((good) => (good = { ...good, img }));
  //       console.log(goods);
  //       localStorage.shoppingData = JSON.stringify(goods);
  //     })
  //     .then(() => {
  //       const initData = JSON.parse(localStorage.getItem('shoppingData'));
  //       setShoppingData(initData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   if (!localStorage.shoppingData) {
  //     setInitData();
  //   } else {
  //     const initData = JSON.parse(localStorage.getItem('shoppingData'));
  //     setShoppingData(initData);
  //   }
  // }, []);

  return <ShoppingList shoppingList={shoppingData} />;
}

export default ListContainer;
