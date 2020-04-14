import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as Pages from 'pages';

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
      <Switch>
        <Route exact path='/' component={Pages.Home} />
        <Route path='/basket' component={Pages.Basket} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
