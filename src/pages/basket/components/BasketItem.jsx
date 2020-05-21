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
      id: item.id,
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
        <img src={item.image} alt={item.name} />
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

const Wrapper = styled.ul`
  border-bottom: 1px solid gray;
  display: flex;
  padding: 0;
  margin: 0;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .item-img {
    width: 18%;

    img {
      max-width: 100%;
      height: auto;
    }
  }

  .item-chk {
    width: 5%;
  }

  .item-name {
    width: 18%;
  }

  .item-provider,
  .item-option {
    width: 12%;
  }

  .item-quantity {
    width: 7%;

    input {
      width: 100%;
    }
  }

  .item-price,
  .item-ship-price {
    width: 10%;
  }

  .item-btn {
    width: 8%;
  }
`;

export default BasketItem;
