import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import * as Pages from 'pages';
import { GlobalContextProvider } from 'contexts/ProductContext';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <GlobalContextProvider>
          <Switch>
            <Route exact path='/' component={Pages.Home} />
            <Route path='/cart' component={Pages.Basket} />
          </Switch>
        </GlobalContextProvider>
      </BrowserRouter>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
  }

  #root {
    height: 100%;
  }

  a {
    text-decoration: none;
    color: rgb(107, 106, 106);

    &:visited {
      text-decoration: none;
      color: rgb(107, 106, 106);
    }
  }
`;

export default App;
