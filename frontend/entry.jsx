import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchProperty, fetchProperties} from './actions/properties_actions';

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
  window.fetchProperty = fetchProperty;
  window.fetchProperties = fetchProperties;
  // RESTING ENDS

  ReactDOM.render(<Root store={store} />, root);
});
