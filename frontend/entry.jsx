import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchProperty, fetchProperties} from './actions/properties_actions';
import {fetchUser} from './actions/user_actions';
import {createBooking} from './util/booking_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');



  let store;
  if (window.currentUser) {
  const preloadedState = {
    entities: {
      users: { [window.currentUser.id]: window.currentUser }
    },
      session: { currentUserId: window.currentUser.id }
    };
  store = configureStore(preloadedState);
  delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING STARTS
  window.dispatch = store.dispatch;
  window.createBooking = createBooking;
  window.getState = store.getState;
  // RESTING ENDS

  ReactDOM.render(<Root store={store} />, root);
});
