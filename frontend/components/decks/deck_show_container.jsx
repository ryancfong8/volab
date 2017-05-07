import { connect } from 'react-redux';
import { requestDeck } from '../../actions/deck_actions.js';
import Deck from './deck_show.jsx';

const mapStateToProps = (state, ownProps) => ({
  // deck: state.deck
});

const mapDispatchToProps = (dispatch) => ({
  requestDeck: (id) => dispatch(requestDeck(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Deck);
