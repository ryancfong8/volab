import React from 'react';
import { Link, hashHistory } from 'react-router';

class Decks extends React.Component {
  constructor (props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllDecks();
  }

  render() {
    return(
      <div className = "Deck-Index">
        <text className='Dir'>Choose A Deck!</text>
        <button>Add A Deck</button>
        <ul className = 'Deck-List'>
          {this.props.decks.map(deck => (
              <div key = {deck.id} className = "list-item">
                <Link className="Link" to={`/decks/${deck.id}`}>{deck.title}</Link>
              </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default Decks;
