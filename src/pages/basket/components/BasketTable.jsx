import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import BasketTableHeader from './BasketTableHeader';
import BasketList from './BasketList';
import { GlobalDispatchContext } from 'contexts/ProductContext';

function BasketTable() {
  const [checkedTF, onChecked] = useState(true);
  const dispatch = useContext(GlobalDispatchContext);
  const handleCheck = () => {
    onChecked(!checkedTF);
    dispatch({ type: 'ALL_CHECK' });
  };
  return (
    <Wrapper>
      <BasketTableHeader checkedTF={checkedTF} onCheck={handleCheck} />
      <BasketList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 90%;
  margin: auto;
`;

export default BasketTable;
