import { connect } from 'react-redux';
import FlashcardShow from './flashcard_show';
import { changeTierId } from '../../actions/flashcard_actions';
import { requestDeck, fetchDeck } from '../../actions/deck_actions'


const mapStateToProps = (state, ownProps) => ({
  deck: ownProps.deck,
  currentTier: ownProps.currentTier,
  updateTier: ownProps.updateTier,
  updateDeck: ownProps.updateDeck,
  updateDeck2: ownProps.updateDeck2,
  deckId: ownProps.deckId
});

const mapDispatchToProps = dispatch => ({
  changeTierId: (cardId, tierId) => dispatch(changeTierId(cardId, tierId)),
  requestDeck: (id, currentTier) => dispatch(requestDeck(id, currentTier)),
  fetchDeck: (id) => dispatch(fetchDeck(id))
});

const FlashcardShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashcardShow);

export default FlashcardShowContainer;
