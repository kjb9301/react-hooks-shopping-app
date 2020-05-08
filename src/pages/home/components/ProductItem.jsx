import React, { useContext } from 'react';
import styled from 'styled-components';

import { GlobalDispatchContext } from 'contexts/ProductContext';

const ProductItem = ({ listItem }) => {
  const dispatch = useContext(GlobalDispatchContext);
  const handleClickProd = (product) => {
    dispatch({
      type: 'GET_PRODUCT',
      payload: product,
    });
  };
  return (
    <Wrapper>
      <Container onClick={() => handleClickProd(listItem)}>
        <ImgSection>
          <img className='item-img' src={listItem.img} alt={listItem.name} />
        </ImgSection>
        <ContentSection>
          <p className='item-name'>{listItem.name}</p>
          <p className='item-provider'>
            <span>판매자 :</span>
            {listItem.provider}
          </p>
          <p className='item-price'>
            <span>가격 :</span>
            {listItem.price}원
          </p>
        </ContentSection>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 2px 1px 0 lightgray;

  &:hover {
    cursor: pointer;
  }
`;

const ImgSection = styled.section`
  flex: 2;

  .item-img {
    max-width: 100%;
    height: auto;
  }
`;

const ContentSection = styled.section`
  flex: 1;
  padding: 15px;
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 5px;

    span {
      margin-right: 5px;
    }
  }

  .item-name {
    border-bottom: 1px solid gray;
    padding-bottom: 5px;
    font-weight: bold;
  }
`;

export default ProductItem;
