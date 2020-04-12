import React from 'react';
import styled from 'styled-components';

function ProductInfo({ title }) {
  return (
    <Wrapper>
      <span className='text-title'>{title}</span>
      <span>:</span>
      <span className='text-content'></span>
    </Wrapper>
  );
}

const Wrapper = styled.p`
  margin: 0;
  margin-bottom: 10px;
  border: 1px solid red;
`;

export default ProductInfo;
