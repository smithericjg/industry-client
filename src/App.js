import './App.scss';
import React from 'react';

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
          <Route path="/save" component={CancelScreen} />
        </Switch>
      </BrowserRouter>
    )
  }
}