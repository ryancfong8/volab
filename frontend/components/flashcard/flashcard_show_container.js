import { connect } from 'react-redux';
import FlashcardShow from './flashcard_show';
import { changeTierId } from '../../actions/flashcard_action';

const mapStateToProps = (state, ownProps) => ({
  deck: state.deck
});

const mapDispatchToProps = dispatch => ({
  changeTierId: (cardId, tierId) => dispatch(changeTierId(cardId, tierId))
});

const FlashcardShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlashcardShow);

export default FlashcardShowContainer;
