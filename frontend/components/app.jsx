import React from 'react';
import {Switch, Route } from 'react-router-dom';
import Modal from './modal';
import Splash from './splash/splash';
import Index from './index/index';
import Show from './show/show';
import TripsContainer from './trips/trips_container';
import { ProtectedRoute, AuthRoute } from '../util/route_util';
import ReviewFormContainer from './review/review_form_container';
import PropertyFormContainer from './property/property_form_container';

const App = () => (
  <div>
    <Modal />
    <Switch>
      <Route exact path="/index" component={Index} />
      <AuthRoute exact path="/" component={Splash} />
      <Route exact path="/properties/:propertyId" component={ Show } />
      <ProtectedRoute exact path="/trips" component={TripsContainer} />
      <ProtectedRoute exact path="/:propertyId/review" component={ReviewFormContainer} />
      <ProtectedRoute exact path="/new" component={PropertyFormContainer} />
    </Switch>
  </div>
)

export default App;
