import { connect } from 'react-redux';
import Decks from './decks.jsx';
import { requestAllDecks, createDeck } from '../../actions/deck_actions';

const mapStateToProps = (state) => ({
  decks: Object.keys(state.decks).map(id => state.decks[id])
});

const mapDispatchToProps = (dispatch) => ({
  requestAllDecks: () => dispatch(requestAllDecks()),
  createDeck: () => dispatch(createDeck)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Decks);
