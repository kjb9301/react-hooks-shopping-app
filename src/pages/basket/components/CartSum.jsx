import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';

import { GlobalStateContext } from 'contexts/ProductContext';

function CartSum() {
  const { basketList } = useContext(GlobalStateContext);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const totalSum = basketList.reduce((acc, cur) => {
      return cur.checked ? acc + cur.price : acc + 0;
    }, 0);
    setTotalPrice(totalSum);
  }, [basketList, totalPrice]);

  return (
    <Wrapper>
      <div className='box-sum'>
        <span>{totalPrice}</span>
        <span>원</span>
      </div>
      <div className='box-btn'>
        <button type='submit'>주문하기</button>
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

  .box-sum {
    flex: 2;
    border: 1px solid red;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }

  .box-btn {
    flex: 1;

    button {
      border: none;
      width: 100%;
      height: 100%;
      background-color: black;
      color: #ffffff;
    }
  }
`;

export default CartSum;
