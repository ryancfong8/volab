import { connect } from 'react-redux';
import { requestDeck } from '../../actions/deck_actions.js';
import Deck from './deck_show.jsx';

const mapStateToProps = (state, ownProps) => ({
  deck: state.deck,
  currentTier: state.deck.currentLevel
});

const mapDispatchToProps = (dispatch) => ({
  requestDeck: (id, currentTier) => dispatch(requestDeck(id, currentTier))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);
