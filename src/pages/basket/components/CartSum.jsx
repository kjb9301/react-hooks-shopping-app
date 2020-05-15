import React, {
  useState,
  useContext,
  useCallback,
  useEffect,
  useMemo,
} from 'react';
import styled from 'styled-components';

import {
  GlobalStateContext,
  GlobalDispatchContext,
} from 'contexts/ProductContext';

function CartSum() {
  console.log('cartSum render');
  const { productList, basketList, orderList } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  const getTotalPrice = () => {
    const priceSum = basketList.reduce((acc, cur) => {
      return cur.checked ? acc + cur.price * cur.quantity : acc + 0;
    }, 0);

    return priceSum;
  };

  const totalPrice = useMemo(() => getTotalPrice(), [basketList]);

  const orderConfirm = () => {
    const result = window.confirm('주문?');
    return result;
  };

  const handleClickOrder = async () => {
    await getOrder();
    const result = orderConfirm();
    console.log(result);
    if (result) {
      await postOrders();
    } else {
      return;
    }
  };

  console.log('productList', productList);
  console.log('orderList', orderList);

  const getOrder = () => {
    dispatch({
      type: 'GET_ORDERS',
    });
  };

  const postOrders = () => {
    console.log('porstOrders', orderList);
    for (let i = 0; i < orderList.length; i++) {
      for (let j = 0; j < productList.length; j++) {
        if (orderList[i].id === productList[j].id) {
          console.log(orderList[i].id);
        }
      }
    }
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
