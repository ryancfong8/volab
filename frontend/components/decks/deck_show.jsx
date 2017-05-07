import React from 'react';

class Deck extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      currentCard: "",
      currentTier: "",
      Tier1: [],
      Tier2: [],
      Tier3: [],
      Tier4: []
    };

    this.chooseTier = this.chooseTier.bind(this);

  }

  componentWillMount() {
    this.props.requestDeck(parseInt(this.props.params.deckId, 10));
  }

  componentWillReceiveProps(nextProps) {
    let cards = nextProps.deck.flashcards.sort((a, b) => (
      b.tier_id - a.tier_id
    ));
    let tier = this.chooseTier();
    this.setState({
      currentCard: this.state.currentTier[0],
      currentTier: tier,
      Tier1: this.props.deck.flashcards.filter(card => (
        card.tier_id === 1
      )),
      Tier2: this.props.deck.flashcards.filter(card => (
        card.tier_id === 2
      )),
      Tier3: this.props.deck.flashcards.filter(card => (
        card.tier_id === 3
      )),
      Tier4: this.props.deck.flashcards.filter(card => (
        card.tier_id === 4
      )),
    });
  }

  chooseTier() {
    if (this.state.Tier4) {
      return "Tier4";
    }
    else if (this.state.Tier3) {
      return "Tier3";
    }
    else if (this.state.Tier2) {
      return "Tier2";
    }
    else if (this.state.Tier1) {
      return "Tier1";
    }
  }

  render() {
    return(
      <div className = "Deck-Show">
        <div className= "Menu">
          <h1>Menu</h1>
          <ul className = "Menu-List">
            {this.props.deck.flashcards.map(card => (
              <li key = {card.id}>
                {card.word}
                {card.tier_id}
              </li>
            ))}
          </ul>
        </div>
        <div className = "Flashcard">
          <h1>FlashCard</h1>
            <p>{this.state.card.word}</p>
            <p>{this.state.card.definition}</p>
            <p>{this.state.card.sentence}</p>
            <p>{this.state.card.origin}</p>
        </div>
      </div>
    );
  }
}

export default Deck;
