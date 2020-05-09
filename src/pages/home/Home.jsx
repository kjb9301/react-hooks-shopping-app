import React from 'react';
import styled from 'styled-components';

import Template from 'components/Template';
import ProductList from './components/ProductList';
import ProductInfo from './components/ProductInfo';

function Home() {
  return (
    <Template>
      <ListWrapper>
        <ProductList />
      </ListWrapper>
      <DetailWrapper>
        <ProductInfo />
      </DetailWrapper>
    </Template>
  );
}

const ListWrapper = styled.section`
  flex: 3;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-auto-rows: minmax(auto, auto);
  gap: 5%;
  padding: 20px;
  overflow: hidden scroll;

  @media (max-width: 1360px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const DetailWrapper = styled.section`
  flex: 1.5;
  padding: 10px 30px;
`;

export default Home;
