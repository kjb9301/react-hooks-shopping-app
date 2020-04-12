import React, { useContext } from 'react';
import styled from 'styled-components';

import ProductInfo from 'pages/home/components/ProductInfo';
import { GlobalStateContext } from 'contexts/ProductContext';

const Info = ['상품명', '판매자', '상품가격', '배송비'];

const ShoppingDetail = ({
  detailData,
  selectedOption,
  checkBasket,
  HandleChangeOption,
}) => {
  // const { id } = detailData;
  // const selectedInfo = {id, selectedOption};
  const product = useContext(GlobalStateContext).selectedProd;
  console.log(product);
  if (!product) return null;
  return (
    <Wrapper>
      <ImgSection>
        <div className='box-img'>
          <img src={product.img} alt={product.name} />
        </div>
      </ImgSection>
      <ContentSection>
        <p className='detail-name'>
          <span>상품명 :</span>
          {product.name}
        </p>
        <p className='detail-provider'>
          <span>판매자 :</span>
          {product.provider}
        </p>
        <p className='detail-price'>
          <span>상품가격 :</span>
          {product.price}원
        </p>
        <p className='detail-ship-price'>
          <span>배송비 :</span>
          {product.shipping.price}원
        </p>
        <div className='detail-option'>
          <select onChange={HandleChangeOption}>
            <option value=''>--옵션선택--</option>
            {product.options.map((option, index) => {
              return (
                <option
                  key={index}
                  value={option.id}
                >{`${option.color} / ${option.size}`}</option>
              );
            })}
          </select>
        </div>
        <div className='detail-btn'>
          {/* <button onClick={() => checkBasket(selectedInfo)}>장바구니 담기</button> */}
        </div>
      </ContentSection>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.12);
`;

const ImgSection = styled.div`
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: center;

  .box-img {
    width: 200px;
    height: 300px;

    img {
      max-width: 100%;
      min-height: 100%;
    }
  }
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px 40px;

  p {
    margin: 0;
    margin-bottom: 10px;
  }

  span {
    margin-right: 5px;
  }
`;

export default ShoppingDetail;
