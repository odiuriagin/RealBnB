import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Modal from './modal';
import Splash from './splash/splash';
import GreetingContainer from './greeting/greeting_container';
import {ProtectedRoute, AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <ProtectedRoute exact path="/index" component={GreetingContainer} />
      <AuthRoute exact path="/" component={Splash} />
    </Switch>
  </div>
)

export default App;
