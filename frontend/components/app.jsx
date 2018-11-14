import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Modal from './modal';
import Splash from './splash/splash';

const App = () => (
  <div>
    <Splash />
    <Modal />
  </div>
)

export default App;
