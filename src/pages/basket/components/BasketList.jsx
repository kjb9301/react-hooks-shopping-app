import React, { useContext } from 'react';
import styled from 'styled-components';

import BasketItem from './BasketItem';
import { GlobalStateContext } from 'contexts/ProductContext';

function BasketList() {
  const basketList = useContext(GlobalStateContext).basketList;
  console.log(basketList);
  if (!basketList) return null;
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
  border: 1px solid red;
`;

export default BasketList;
