import React, { useState } from 'react';
import styled from 'styled-components';

function BasketItem({ item }) {
  console.log(item);
  const [quantity, setQuantity] = useState(item.quantity);
  const handleQuantity = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <Wrapper className='item-box'>
      <li className='item-chk'>
        <input type='checkbox' checked={item.checked} />
      </li>
      <li className='item-img'>
        <div className='img'>
          <img src={item.image} alt={item.name} />
        </div>
      </li>
      <li className='item-name'>{item.name}</li>
      <li className='item-provider'>{item.provider}</li>
      <li className='item-option'>{`${item.option.color} / ${item.option.size}`}</li>
      <li className='item-quantity'>
        <input type='number' value={quantity} onChange={handleQuantity} />
      </li>
      <li className='item-price'>{item.price}원</li>
      <li className='item-ship-price'>{item.shipping.price}원</li>
      <li className='item-btn'>
        <button type='button'>삭제</button>
      </li>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  box-sizing: border-box;
  border-bottom: 1px solid gray;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
  }

  .item-img {
    width: 200px;

    img {
      max-height: 100%;
    }
  }

  .item-chk {
    width: 50px;
  }

  .item-name,
  .item-provider,
  .item-option {
    width: 120px;
  }

  .item-quantity {
    width: 80px;

    input {
      width: 100%;
    }
  }

  .item-price,
  .item-ship-price,
  .item-btn {
    width: 80px;
  }
`;

export default BasketItem;
