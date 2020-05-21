import React, { useContext } from 'react';
import styled from 'styled-components';

import BasketItem from './BasketItem';
import { GlobalStateContext } from 'contexts/ProductContext';

function BasketList() {
  const { basketList } = useContext(GlobalStateContext);

  if (basketList.length < 1) {
    return <None>장바구니에 담긴 상품이 없습니다.</None>;
  }

  return (
    <Wrapper>
      {basketList.map((item) => {
        return <BasketItem key={item.id} item={item} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const None = styled.div`
  border-bottom: 1px solid gray;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default BasketList;
