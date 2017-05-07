import { Router, Route, IndexRoute, hashHistory, browser } from 'react-router';
import App from './app';
import { Provider } from 'react-redux';
import React from 'react';
import DecksContainer from './decks/deck_index_container';
import DeckContainer from './decks/deck_show_container';
import DevTools from './devtools/DevTools';
import Home from './home';

const Root = ({ store }) => {
  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/decks');
    }
  };
  return (
  <Provider store={ store }>
    <div>
      <Router history = { hashHistory }>
        <Route path="/" component={ App } >
          <IndexRoute component={ Home } />
          <Route path="decks" component={ DecksContainer } onEnter = {_ensureLoggedIn}/>
          <Route path="decks/:deckId" component= { DeckContainer } onEnter = {_ensureLoggedIn} />
        </Route>
      </Router>
    </div>
  </Provider>
);
};

export default Root;
