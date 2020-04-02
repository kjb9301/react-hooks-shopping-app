import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as Pages from 'pages';
import './App.scss';

import Header from './components/common/Header';

function App() {
  return (
    <div className='wrapper'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Pages.Home} />
          <Route path='/basket' component={Pages.Basket} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
