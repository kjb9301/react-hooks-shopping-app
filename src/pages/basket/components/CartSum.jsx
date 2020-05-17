import React, { useContext, useMemo, useCallback } from 'react';
import styled from 'styled-components';

import {
  GlobalStateContext,
  GlobalDispatchContext,
} from 'contexts/ProductContext';

function CartSum() {
  const { productList, basketList } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  const getTotalPrice = () => {
    const priceSum = basketList.reduce((acc, cur) => {
      return cur.checked ? acc + cur.price * cur.quantity : acc + 0;
    }, 0);

    return priceSum;
  };

  const totalPrice = useMemo(() => getTotalPrice(), [basketList]);

  const handleClickOrder = () => {
    const result = window.confirm('주문하시겠습니까?');
    if (result) {
      const orderList = getOrderList();
      const updatedProductList = updateProductList(orderList);
      dispatch({ type: 'POST_ORDERS' });
      postOrders(updatedProductList);
    } else {
      return;
    }
  };

  const getOrderList = () => {
    const orderList = basketList.filter((item) => item.checked === true);
    return orderList;
  };

  const updateProductList = (orderList) => {
    orderList.forEach((orderItem) => {
      productList.map((productItem) => {
        if (orderItem.id === productItem.id) {
          const updatedOptions = productItem.options.map((option) =>
            option.id === orderItem.option.id
              ? { ...option, stock: option.stock - orderItem.quantity }
              : { ...option }
          );
          productItem.options = updatedOptions;
        }
      });
    });
    return productList;
  };

  const postOrders = (updatedProductList) => {
    localStorage.setItem('shoppingData', JSON.stringify(updatedProductList));
  };

  return (
    <Wrapper>
      <div className='box-price'>
        <span>{totalPrice}</span>
        <span>원</span>
      </div>
      <div className='box-btn'>
        <button type='submit' className='btn-order' onClick={handleClickOrder}>
          주문하기
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 300px;
  min-height: 60px;
  display: flex;
  border-radius: 10px;
  border: 2px solid #000000;

  .box-price {
    flex: 2;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 10px;
  }

  .box-btn {
    flex: 1;
    border-radius: 10px;

    .btn-order {
      border: none;
      width: 100%;
      height: 100%;
      background-color: black;
      color: #ffffff;
    }
  }
`;

export default CartSum;
