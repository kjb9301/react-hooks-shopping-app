import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
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
    <BrowserRouter>
      <GlobalContextProvider>
        <Switch>
          <Route exact path='/' component={Pages.Home} />
          <Route path='/basket' component={Pages.Basket} />
        </Switch>
      </GlobalContextProvider>
    </BrowserRouter>
  );
}

export default App;
