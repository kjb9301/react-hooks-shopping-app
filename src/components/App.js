import React, { Component } from 'react';
import './App.scss';
import Header from './common/Header';
import { Route } from 'react-router-dom';
import { MainPage, BasketPage } from 'pages';

class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Route exact path="/" component={MainPage}/>
        <Route path="/basket" component={BasketPage}/>
      </div>
    );
  }
}

export default App;
