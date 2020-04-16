import React from 'react';
import styled from 'styled-components';

function BasketTableHeader() {
  return (
    <Wrapper>
      <li className='text-img'></li>
      <li className='text-name'>상품명</li>
      <li className='text-provider'>판매자</li>
      <li className='text-option'>선택옵션</li>
      <li className='text-option'>수량</li>
      <li className='text-price'>금액</li>
      <li className='text-ship-price'>배송비</li>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  flex: 0.1;
  display: flex;
  list-style: none;
  padding: 0;

  li {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    margin: 2px;
    background-color: rgb(250, 232, 198);
  }
`;

export default BasketTableHeader;
