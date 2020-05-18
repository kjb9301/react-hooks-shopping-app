import React, { useState, useContext, useCallback } from 'react';
import styled from 'styled-components';

import BasketTableHeader from './BasketTableHeader';
import BasketList from './BasketList';
import { GlobalDispatchContext } from 'contexts/ProductContext';

function BasketTable() {
  const [allCheck, setAllCheck] = useState(true);
  const dispatch = useContext(GlobalDispatchContext);

  const onChangeCheckAll = useCallback(
    (e) => {
      console.log(e.target.checked);
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
