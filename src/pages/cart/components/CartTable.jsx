import React, { useState, useContext, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import CartTableHeader from './CartTableHeader';
import CartList from './CartList';
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from 'contexts/ProductContext';

function CartTable() {
  const [allCheck, setAllCheck] = useState(true);
  const { cartList } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  useEffect(() => {
    const hasAllCheck = cartList.every((item) => item.checked);
    setAllCheck(hasAllCheck);
  }, [cartList]);

  const onChangeCheckAll = useCallback(
    (e) => {
      setAllCheck(!allCheck);
      dispatch({ type: 'ALL_CHECK', checked: e.target.checked });
    },
    [allCheck]
  );

  return (
    <Wrapper>
      <CartTableHeader
        allCheck={allCheck}
        onChangeCheckAll={onChangeCheckAll}
      />
      <CartList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`;

export default CartTable;
