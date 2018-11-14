import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Modal from './modal';
import Splash from './splash/splash';
import GreetingContainer from './index/greeting_container';
import Index from './index/index';
import {ProtectedRoute, AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <ProtectedRoute exact path="/index" component={Index} />
      <AuthRoute exact path="/" component={Splash} />
    </Switch>
  </div>
)

export default App;
