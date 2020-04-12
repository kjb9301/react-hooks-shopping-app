import React, { useContext } from 'react';
import styled from 'styled-components';
// import './ShoppingDetail.scss';

import { GlobalStateContext } from 'contexts/ProductContext';

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
  // if (!product) return null;
  return (
    <Wrapper className='detail-wrapper'>
      {/* {detailData !== ''?
        <div className="detail-box">
          <div className="detail-left">
            <img src={detailData.img} alt={detailData.name}/>
          </div>
          <div className="detail-right">
            <div className="detail-text">
              <div className="detail-name">상품명:<span>{detailData.name}</span></div>
              <div className="detail-provider">판매자:<span>{detailData.provider}</span></div>
              <div className="detail-price">상품가격:<span>{detailData.price}원</span></div>
              <div className="detail-ship-price">배송비:<span>{detailData.shipping.price}원</span></div>
              <div className="detail-option">
                <select onChange={HandleChangeOption}>
                  <option value=''>--옵션선택--</option>
                  {detailData.options.map((option,index) => {
                    return (<option key={index} value={option.id}>{`${option.color} / ${option.size}`}</option>)
                  })}
                </select>
              </div>
            </div>
            <div className="detail-btn">
              <button onClick={() => checkBasket(selectedInfo)}>장바구니 담기</button>
            </div>
          </div>
        </div>
      :
        <div></div>
      } */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 60%;
  padding-top: 60px;
  padding-left: 30px;
  border: 1px solid red;
`;

export default ShoppingDetail;
