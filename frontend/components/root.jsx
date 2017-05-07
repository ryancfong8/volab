import { Router, Route, IndexRoute, hashHistory, browser } from 'react-router';
import App from './app';
import { Provider } from 'react-redux';
import React from 'react';
import DecksContainer from './decks/deck_index_container';
import DeckContainer from './decks/deck_show_container';
import DevTools from './devtools/DevTools';

const Root = ({ store }) => {
  return (
  <Provider store={ store }>
    <div>
      <Router history = { hashHistory }>
        <Route path="/" component={ App } >
          <Route path="decks" component={ DecksContainer } />
          <Route path="decks/:deckId" component= { DeckContainer } />
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>
);
};

export default Root;
