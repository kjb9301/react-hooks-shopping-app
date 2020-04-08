import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as Pages from 'pages';
// import './App.scss';
import axios from 'axios';
import img from 'images/item.png';

import { GlobalContextProvider } from 'contexts/ProductContext';

const setInitData = async () => {
  await axios
    .get('dummy/goods.json')
    .then((res) => {
      console.log(222222);
      const goods = res.data.goods.map((good) => (good = { ...good, img }));
      localStorage.shoppingData = JSON.stringify(goods);
    })
    .catch((err) => {
      console.log(err);
    });
};

function App() {
  useEffect(() => {
    if (!localStorage.shoppingData) {
      console.log(111111);
      setInitData();
    } else {
      console.log(111111);
    }
  }, []);
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Pages.Home} />
          <Route path='/basket' component={Pages.Basket} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
