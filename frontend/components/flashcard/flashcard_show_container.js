import { connect } from 'react-redux';
import FlashcardShow from './flashcard_show';
import { changeTierId } from '../../actions/flashcard_actions';

const mapStateToProps = (state, ownProps) => ({
  deck: state.deck,
  currentTier: ownProps.currentTier
});

const mapDispatchToProps = dispatch => ({
  changeTierId: (cardId, tierId) => dispatch(changeTierId(cardId, tierId))
});

const FlashcardShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashcardShow);

export default FlashcardShowContainer;
