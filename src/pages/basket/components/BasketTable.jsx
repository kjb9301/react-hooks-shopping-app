import React from 'react';
import styled from 'styled-components';

import BasketTableHeader from './BasketTableHeader';
import BasketList from './BasketList';

function BasketTable() {
  return (
    <Wrapper>
      <BasketTableHeader />
      <BasketList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
`;

export default BasketTable;
