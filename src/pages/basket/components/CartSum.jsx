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
  const [status, setStatus] = useState(false);
  const dispatch = useContext(GlobalDispatchContext);

  const getTotalPrice = () => {
    const priceSum = basketList.reduce((acc, cur) => {
      return cur.checked ? acc + cur.price * cur.quantity : acc + 0;
    }, 0);

    return priceSum;
  };

  const totalPrice = useMemo(() => getTotalPrice(), [basketList]);

  const handleClickOrder = () => {
    getOrder();
    const result = window.confirm('주문?');
    setStatus(result);
    if (result) {
      // postOrders();
    } else {
      return;
    }
  };

  // const handleClickOrder = () => {
  //   getOrder();
  //   const result = window.confirm('주문하시겠습니까?');
  //   if (result) {
  //     handleStatus();
  //     postOrders();
  //   } else {
  //     return;
  //   }
  // };

  // const handleStatus = useCallback(() => {
  //   setStatus(!status);
  // }, [status]);

  console.log('productList', productList);
  console.log('orderList', orderList);
  console.log('status', status);

  const getOrder = () => {
    dispatch({
      type: 'GET_ORDERS',
    });
  };

  // const postOrders = useEffect(() => {
  //   dispatch({
  //     type: 'POST_ORDERS',
  //   });
  // }, [status]);

  const postOrders = useEffect(() => {
    const newArr =
      productList &&
      productList.map((item) => {
        orderList &&
          orderList.map((order) => {
            if (item.id === order.id) {
              return { ...item, stock: item.stock - order.quantity };
            }
            return;
          });
      });
    console.log(newArr);
  }, [status]);

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
