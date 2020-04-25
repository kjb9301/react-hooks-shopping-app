import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';
import { GlobalContextProvider } from 'contexts/ProductContext';

function Template({ children }) {
  return (
    <>
      <Nav />
      <Main>
        {/* <GlobalContextProvider>{children}</GlobalContextProvider> */}
        {children}
      </Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  border: 1px solid blue;
  height: 100%;
`;

export default Template;
