import React from 'react';
import styled from 'styled-components';

import Template from 'components/Template';
import CartTable from './components/CartTable';
import CartSum from './components/CartSum';

function Cart() {
  return (
    <Template>
      <CartSection>
        <CartTable />
        <CartSum />
      </CartSection>
    </Template>
  );
}

const CartSection = styled.section`
  width: 100%;
  height: 100%;
`;

export default Cart;
