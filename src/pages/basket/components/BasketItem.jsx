import React from 'react';
import styled from 'styled-components';

function BasketItem({ item }) {
  console.log(item);
  return (
    <Wrapper className='item-box'>
      <div className='item-img'>
        <div className='img'>
          <img src={item.image} alt={item.name} />
        </div>
      </div>
      <div className='item-name'>{item.name}</div>
      <div className='item-provider'>{item.provider}</div>
      <div className='item-option'>{`${item.option.color} / ${item.option.size}`}</div>
      <div className='item-option'>{`${item.quantity}`}</div>
      <div className='item-price'>{item.price}원</div>
      <div className='item-ship-price'>{item.shipping.price}원</div>
      <div className='item-btn'>
        <div className='btn-order'>
          <button>주문</button>
        </div>
        <div className='btn-delete'>
          <button>삭제</button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  border: 1px solid red;
  min-height: 80px;
  box-sizing: border-box;

  .item-img {
    padding: 5px;
    border: 1px solid blue;

    img {
      max-height: 100%;
    }
  }
`;

export default BasketItem;
