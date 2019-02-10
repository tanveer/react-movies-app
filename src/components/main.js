import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Detail from './detail'
import Home from './home'

const Main = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/detail" component={Detail} />
    </Switch>
  );
}

export default Main;