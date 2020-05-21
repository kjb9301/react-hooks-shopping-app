import React, { useContext } from 'react';
import styled from 'styled-components';

import CartItem from './CartItem';
import { GlobalStateContext } from 'contexts/ProductContext';

function CartList() {
  const { cartList } = useContext(GlobalStateContext);

  if (cartList.length < 1) {
    return <None>장바구니에 담긴 상품이 없습니다.</None>;
  }

  return (
    <Wrapper>
      {cartList.map((item) => {
        return <CartItem key={item.id} item={item} />;
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const None = styled.div`
  border-bottom: 1px solid gray;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CartList;
