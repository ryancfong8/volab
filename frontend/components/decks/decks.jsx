import React from 'react';

class Decks extends React.Component {
  constructor (props) {
    super(props);

  }

  componentDidMount() {
    this.props.requestAllDecks();
  }

  render() {
    return(
      <div>
        <ul>
          {this.props.decks.map(deck => (
              <li key = {deck.id}>{deck.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Decks;
