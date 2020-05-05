import React from 'react';
import styled from 'styled-components';

import Template from 'components/Template';
import BasketTable from './components/BasketTable';
import CartSum from './components/CartSum';

function Basket() {
  return (
    <Template>
      <BasketSection>
        <BasketTable />
        <CartSum />
      </BasketSection>
    </Template>
  );
}

const BasketSection = styled.section`
  width: 100%;
  height: 100%;
`;

export default Basket;
