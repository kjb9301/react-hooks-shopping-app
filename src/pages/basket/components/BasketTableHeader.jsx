import React from 'react';
import styled from 'styled-components';

function BasketTableHeader({ allCheck, onChangeCheckAll }) {
  return (
    <Wrapper>
      <li className='th-chk'>
        <input type='checkbox' checked={allCheck} onChange={onChangeCheckAll} />
      </li>
      <li className='th-img'></li>
      <li className='th-name'>상품명</li>
      <li className='th-provider'>판매자</li>
      <li className='th-option'>선택옵션</li>
      <li className='th-quantity'>수량</li>
      <li className='th-price'>금액</li>
      <li className='th-ship-price'>배송비</li>
      <li className='btn' />
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding: 10px;
  }

  .th-chk {
    width: 5%;
  }

  .th-img,
  .th-name {
    width: 18%;
  }

  .th-provider,
  .th-option {
    width: 12%;
  }

  .th-quantity {
    width: 7%;
  }

  .th-price,
  .th-ship-price {
    width: 10%;
  }

  .btn {
    width: 8%;
  }
`;

export default BasketTableHeader;
