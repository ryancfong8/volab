import React from 'react';

class Deck extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      card: ""
    };

  }



  componentDidMount() {
    this.props.requestDeck(this.props.params.deckId);
  }

  //
  // <p>{this.state.card.word}</p>
  // <p>{this.state.card.definition}</p>
  // <p>{this.state.card.sentence}</p>
  // <p>{this.state.card.origin}</p>

  render() {
    return(
      <div>
        <div>
          <h1>Menu</h1>
          <ul>
            {this.props.deck.flashcards.map(card => (
              <li>
                {card.word}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1>FlashCard</h1>

        </div>
      </div>
    );
  }
}

export default Deck;
