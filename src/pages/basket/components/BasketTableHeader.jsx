import React from 'react';
import styled from 'styled-components';

function BasketTableHeader({ checkedTF, onCheck }) {
  console.log(checkedTF);
  return (
    <Wrapper>
      <li className='th-chk'>
        <input type='checkbox' checked={checkedTF} onClick={onCheck} />
      </li>
      <li className='th-img'></li>
      <li className='th-name'>상품명</li>
      <li className='th-provider'>판매자</li>
      <li className='th-option'>선택옵션</li>
      <li className='th-quantity'>수량</li>
      <li className='th-price'>금액</li>
      <li className='th-ship-price'>배송비</li>
      <li className='btn'></li>
    </Wrapper>
  );
}

const Wrapper = styled.ul`
  /* flex: 0.1; */
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    /* flex: 1; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding: 10px 0;
    /* background-color: rgb(250, 232, 198); */
  }

  .th-chk {
    width: 50px;
  }

  .th-img {
    width: 200px;
  }

  .th-name {
    width: 120px;
  }

  .th-provider {
    width: 120px;
  }

  .th-option {
    width: 120px;
  }

  .th-quantity,
  .th-price,
  .th-ship-price,
  .btn {
    width: 80px;
  }
`;

export default BasketTableHeader;
