import React from 'react';
import styled from 'styled-components';

import Template from 'components/common/Template';
import ProductList from 'pages/home/components/ProductList';
import ProductInfo from 'pages/home/components/ProductInfo';

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
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-auto-rows: minmax(auto, auto);
  overflow: hidden scroll;
`;

const DetailWrapper = styled.section`
  flex: 1.5;
  padding: 10px 20px;
`;

export default Home;
