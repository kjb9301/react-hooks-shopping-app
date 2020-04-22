import React from 'react';
import styled from 'styled-components';

import Template from 'components/common/Template';
import BasketPageContainer from 'containers/BasketPage/BasketPageContainer';
import BasketTable from './components/BasketTable';
import PayTable from './components/PayTable';
function Basket() {
  return (
    <Template>
      <BasketSection>
        <BasketTable />
      </BasketSection>
      {/* <PaySection>
        <PayTable />
      </PaySection> */}
    </Template>
  );
}

const BasketSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const PaySection = styled.section`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.12);
  border: 1px solid blue;
`;

export default Basket;
