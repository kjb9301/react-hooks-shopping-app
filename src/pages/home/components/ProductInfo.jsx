import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import ProductOption from 'pages/home/components/ProductOption';
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from 'contexts/ProductContext';

const ProductInfo = () => {
  const [selectedOption, selectOption] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const product = useContext(GlobalStateContext).productOne;
  const basketList = useContext(GlobalStateContext).basketList;
  const dispatch = useContext(GlobalDispatchContext);
  console.log(basketList);
  const handleChangeOption = (e) => {
    selectOption(e.target.value);
  };

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const preprocessData = () => {
    const optionIdx = product.options.findIndex(
      (option) => option.id === Number(selectedOption)
    );
    const option = product.options[optionIdx];

    const data = {
      id: product.id,
      name: product.name,
      provider: product.provider,
      price: product.price,
      option,
      quantity,
      shipping: product.shipping,
    };
    return data;
  };

  const addToBasket = (data) => {
    dispatch({
      type: 'ADD_TO_BASKET',
      payload: data,
    });
  };

  const checkBasket = () => {
    if (!selectedOption) return alert('옵션을 선택해 주십시오.');
    const checkTF = basketList.some(
      (item) =>
        item.id === product.id && item.option.id === Number(selectedOption)
    );
    if (checkTF) {
      alert('이미 장바구니에 존재합니다.');
    } else {
      const data = preprocessData();
      addToBasket(data);
    }
  };

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
          <span>{product.price}원</span>
        </p>
        <p className='detail-ship-price'>
          <span>배송비 :</span>
          {product.shipping.price}원
        </p>
        <ProductOption
          options={product.options}
          onChangeOption={handleChangeOption}
        />
        <div className='info-quantity'>
          <span>수량 :</span>
          <input
            type='number'
            value={quantity}
            onChange={handleChangeQuantity}
            min='1'
            max='50'
          />
        </div>
        <div className='detail-btn'>
          <button onClick={checkBasket}>장바구니 담기</button>
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

  .info-quantity {
    margin-bottom: 10px;
  }

  .detail-btn {
    button {
      width: 100%;
      height: 100%;
      border-radius: 20px;
      font-size: 30px;
      background-color: rgb(235, 233, 231);
      border: none;
      cursor: pointer;
      font-weight: bold;
    }

    @media (max-width: 1360px) {
      button {
        font-size: 10px;
      }
    }
  }
`;

export default ProductInfo;
