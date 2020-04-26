import React from 'react';
import styled from 'styled-components';

import Nav from './Nav';

function Template({ children }) {
  return (
    <>
      <Nav />
      <Main>{children}</Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  height: 100%;
`;

export default Template;
