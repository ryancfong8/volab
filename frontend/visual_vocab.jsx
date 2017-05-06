import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import Root from './components/root';
import requestAllDecks from './actions/deck_actions.js';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let store;
    store = configureStore();
    ReactDOM.render(<Root store = {store} />, root);
    window.store = store;
});
