import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import requestAllDecks from './actions/deck_actions.js';

let preloadedState = {};

if (localStorage.user) {
  preloadedState = {
    session: {
      currentUser: {
        username: localStorage.user,
        id: localStorage.id
      }
    }
  };
}

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore(preloadedState);
    ReactDOM.render(<Root store = {store} />, root);
    window.store = store;
});
