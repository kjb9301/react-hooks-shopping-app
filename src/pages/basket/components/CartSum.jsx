import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import { GlobalStateContext } from 'contexts/ProductContext';

function CartSum() {
  const { basketList } = useContext(GlobalStateContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalSum = basketList.reduce((acc, cur) => {
      return cur.checked ? acc + cur.price * cur.quantity : acc + 0;
    }, 0);
    setTotalPrice(totalSum);
  }, [basketList, totalPrice]);

  return (
    <Wrapper>
      <div className='box-price'>
        <span>{totalPrice}</span>
        <span>원</span>
      </div>
      <div className='box-btn'>
        <button type='submit' className='btn-order'>
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
