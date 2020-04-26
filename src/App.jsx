import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import * as Pages from 'pages';

import { GlobalContextProvider } from 'contexts/ProductContext';

import axios from 'axios';
import img from 'images/item.png';

const setInitData = async () => {
  await axios
    .get('dummy/goods.json')
    .then((res) => {
      const goods = res.data.goods.map((good) => (good = { ...good, img }));
      localStorage.shoppingData = JSON.stringify(goods);
    })
    .catch((err) => {
      console.log(err);
    });
};

function App() {
  setInitData();
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <GlobalContextProvider>
          <Switch>
            <Route exact path='/' component={Pages.Home} />
            <Route path='/basket' component={Pages.Basket} />
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

    &:visited {
      text-decoration: none;
      color: rgb(107, 106, 106);
    }
  }
`;

export default App;
