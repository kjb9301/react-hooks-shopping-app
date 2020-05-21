import React, { useContext, useMemo, useCallback } from 'react';
import styled from 'styled-components';

import {
  GlobalStateContext,
  GlobalDispatchContext,
} from 'contexts/ProductContext';

function CartSum() {
  const { productList, cartList } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  const getTotalPrice = () => {
    const priceSum = cartList.reduce((acc, cur) => {
      return cur.checked
        ? acc + (cur.price * cur.quantity + cur.shipping.price)
        : acc + 0;
    }, 0);

    return priceSum;
  };

  const totalPrice = useMemo(() => getTotalPrice(), [cartList]);

  const onClickOrder = useCallback(() => {
    const orderList = getOrderList();
    if (orderList.length < 1) return alert('선택된 상품이 없습니다.');
    const result = window.confirm('주문하시겠습니까?');
    if (result) {
      const updatedProductList = updateProductList(orderList);
      dispatch({ type: 'POST_ORDERS' });
      postOrders(updatedProductList);
    } else {
      return;
    }
  }, [cartList]);

  const getOrderList = () => {
    const orderList = cartList.filter((item) => item.checked === true);
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
        return productItem;
      });
    });
    return productList;
  };

  const postOrders = (updatedProductList) => {
    localStorage.setItem('productData', JSON.stringify(updatedProductList));
  };

  return (
    <Wrapper>
      <div className='box-price'>
        <span>{totalPrice}</span>
        <span>원</span>
      </div>
      <div className='box-btn'>
        <button type='submit' className='btn-order' onClick={onClickOrder}>
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
