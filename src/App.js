import './App.scss';
import React from 'react';
import GetInTouch from './components/GetInTouch/GetInTouch';
import InitialScreen from './components/InitialScreen/InitialScreen';

import { Component } from 'react'; 
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CancelScreen from './components/CancelScreen/CancelScreen';

export default class App extends Component {

  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={InitialScreen} />
          <Route path="/cancel" component={CancelScreen} />
          <Route path="/getintouch" component={GetInTouch}/>
        </Switch>
      </BrowserRouter>
    )
  }
}