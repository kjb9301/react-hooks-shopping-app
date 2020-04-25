import React from 'react';
import styled from 'styled-components';

function CartSum() {
  return (
    <Wrapper>
      <div className='box-sum'>
        <span>100</span>
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
