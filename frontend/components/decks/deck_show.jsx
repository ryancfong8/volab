import React from 'react';
import FlashcardShowContainer from '../flashcard/flashcard_show_container';

class Deck extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentCard: null,
      currentTier: 1,
      deck: this.props.deck
    };

  }

  componentWillMount() {
    this.props.requestDeck(parseInt(this.props.params.deckId, 10));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentCard) {
      this.setState({ currentCard: nextProps.currentCard });
    }
    if (nextProps.currentTier) {
      this.setState({ currentTier: nextProps.currentTier });
    }
    if (nextProps.deck) {
      this.setState({ deck: nextProps.deck });
    }
  }

  // <div className= "Menu">
  //   <h1>Menu</h1>
  //   <ul className = "Menu-List">
  //     {this.props.deck.flashcards.map(card => (
  //       <li key = {card.id}>
  //         {card.word}
  //         {card.tier_id}
  //       </li>
  //     ))}
  //   </ul>
  // </div>


  render() {
    return(
      <div className = "Deck-Show">

        <div className = "Flashcard">
          <FlashcardShowContainer
            currentTier={ this.state.currentTier } />
        </div>
      </div>
    );
  }
}

export default Deck;
