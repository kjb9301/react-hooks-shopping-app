import React, { useState, useContext, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import BasketTableHeader from './BasketTableHeader';
import BasketList from './BasketList';
import {
  GlobalStateContext,
  GlobalDispatchContext,
} from 'contexts/ProductContext';

function BasketTable() {
  const [allCheck, setAllCheck] = useState(true);
  const { basketList } = useContext(GlobalStateContext);
  const dispatch = useContext(GlobalDispatchContext);

  useEffect(() => {
    const hasAllCheck = basketList.every((item) => item.checked);
    setAllCheck(hasAllCheck);
  }, [basketList]);

  const onChangeCheckAll = useCallback(
    (e) => {
      setAllCheck(!allCheck);
      dispatch({ type: 'ALL_CHECK', checked: e.target.checked });
    },
    [allCheck]
  );

  return (
    <Wrapper>
      <BasketTableHeader
        allCheck={allCheck}
        onChangeCheckAll={onChangeCheckAll}
      />
      <BasketList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`;

export default BasketTable;
