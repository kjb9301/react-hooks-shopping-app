import React from 'react';
import styled from 'styled-components';

import PayTableHeader from './PayTableHeader';
import PayList from './PayList';

function PayTable() {
  return (
    <Wrapper>
      <PayTableHeader />
      <PayList />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default PayTable;
