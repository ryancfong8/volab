import React from 'react';
import FlashcardShowContainer from '../flashcard/flashcard_show_container';

class Deck extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentCard: null,
      currentTier: this.props.deck.currentTier,
      deck: this.props.deck
    };

    // this.updateTier = this.updateTier.bind(this);
    this.updateDeck = this.updateDeck.bind(this);
  }

  componentWillMount() {
    this.props.requestDeck(parseInt(this.props.params.deckId, 10), 1);
  }

  componentWillReceiveProps(nextProps) {
    console.log("This is in componentWillReceiveProps, deck_show, nextProps=", nextProps);
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

  // componentWillUpdate() {
  //   this.props.requestDeck(parseInt(this.props.params.deckId, 10));
  // }

  //
  // updateTier(tier) {
  //   this.setState({
  //     currentTier: tier
  //   });
  // }

  updateDeck(pos) {
    pos
      ? this.props.requestDeck(parseInt(this.props.params.deckId, 10),
          this.props.currentTier + 1)
      : this.props.requestDeck(parseInt(this.props.params.deckId, 10),
          this.props.currentTier - 1);
  }

  // <div className= "Menu">
  //   <h1>Menu</h1>
  //   <ul className = "Menu-List">
  //     <text>Tier1</text>
  //     {this.props.deck[1].map(card => (
  //       <li key = {card.id}>
  //         {card.word}
  //       </li>
  //     ))}
  //   </ul>
  //   <ul className = "Menu-List">
  //     <text>Tier2</text>
  //     {this.props.deck[2].map(card => (
  //       <li key = {card.id}>
  //         {card.word}
  //       </li>
  //     ))}
  //   </ul>
  //   <ul className = "Menu-List">
  //     <text>Tier3</text>
  //     {this.props.deck[3].map(card => (
  //       <li key = {card.id}>
  //         {card.word}
  //       </li>
  //     ))}
  //   </ul>
  //   <ul className = "Menu-List">
  //     <text>Tier4</text>
  //     {this.props.deck[4].map(card => (
  //       <li key = {card.id}>
  //         {card.word}
  //       </li>
  //     ))}
  //   </ul>
  // </div>

  render() {
    return(
      <div className = "Deck-Show">


        <div className = "Flashcard">
          <FlashcardShowContainer
            currentTier={ this.state.currentTier }
            updateTier={ this.updateTier }
            updateDeck={ this.updateDeck }
            deck={ this.state.deck }
            deckId={ parseInt(this.props.params.deckId, 10) }
            />
        </div>
      </div>
    );
  }
}

export default Deck;
