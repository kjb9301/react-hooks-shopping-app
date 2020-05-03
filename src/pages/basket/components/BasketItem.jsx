import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';

import { GlobalDispatchContext } from 'contexts/ProductContext';

function BasketItem({ item }) {
  const dispatch = useContext(GlobalDispatchContext);

  const handleQuantity = useCallback(
    (e) => {
      const quantity = Number(e.target.value);
      updateQuantity(quantity);
    },
    [item.quantity]
  );

  const updateQuantity = (quantity) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: {
        id: item.id,
        value: quantity,
      },
    });
  };

  const handleChangeCheck = useCallback(() => {
    dispatch({
      type: 'CHECK_CART_PRODUCT',
      payload: item.id,
    });
  }, [item.checked]);

  const handleClickRemove = () => {
    dispatch({
      type: 'REMOVE_IN_CART',
      id: item.id,
    });
  };

  return (
    <Wrapper className='item-box'>
      <li className='item-chk'>
        <input
          type='checkbox'
          checked={item.checked}
          onChange={handleChangeCheck}
        />
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
        <input
          type='number'
          value={item.quantity}
          onChange={handleQuantity}
          min='1'
        />
      </li>
      <li className='item-price'>{item.price}원</li>
      <li className='item-ship-price'>{item.shipping.price}원</li>
      <li className='item-btn'>
        <button type='button' onClick={handleClickRemove}>
          삭제
        </button>
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
