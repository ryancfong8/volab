import React, { Component } from 'react';

class FlashcardShow extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showFront: true,
      deckIndex: 0
    };

    this.toggleShow = this.toggleShow.bind(this);
    this.handleNeg = this.handleNeg.bind(this);
    this.handlePos = this.handlePos.bind(this);
    this.nextCard = this.nextCard.bind(this);
    this.nextRound = this.nextRound.bind(this);
  }

  toggleShow(e) {
    e.preventDefault();
    this.setState({
      showFront: !this.state.showFront
    });
  }

  nextCard() {
    const deckIndex = this.state.deckIndex + 1;
    this.setState({
      deckIndex
    })

    if (this.deckIndex >= this.props.deck.length - 1) {
      this.nextRound();
    }

    this.setState({
      showFront: true
    });

  }

  nextRound() {
    console.log("Round over");
  }

  handleNeg(e) {
    const d = this.props.deck.flashcards;
    const currentTier = this.props.currentTier;
    const deck = d[currentTier];
    const flashcard = deck[this.state.deckIndex];
    const cardId = flashcard.id;
    const tierId = flashcard.tier_id;

    e.preventDefault();
    if (tierId < 4) {
      this.props.changeTierId(cardId, tierId + 1);
    }

    this.nextCard();

  }

  handlePos(e) {
    const d = this.props.deck.flashcards;
    const currentTier = this.props.currentTier;
    const deck = d[currentTier];
    const flashcard = deck[this.state.deckIndex];
    const cardId = flashcard.id;
    const tierId = flashcard.tier_id;

    e.preventDefault();
    if (tierId > 1) {
      this.props.changeTierId(cardId, tierId - 1);
    }

    this.nextCard();

  }

  render() {
    if (!Object.keys(this.props.deck.flashcards).length || !this.props.currentTier) return (<div></div>);
    const d = this.props.deck.flashcards;
    const currentTier = this.props.currentTier;
    const deck = d[currentTier];
    const flashcard = deck[this.state.deckIndex];
    if (!flashcard) return (<div></div>);
    let flashcardMain;
    if (this.state.showFront) {
      flashcardMain = (
        <button
          onClick={ this.toggleShow }
          className="flashcard-show-main">
          <div className="flashcard-show-text">
            { flashcard.word }
          </div>
        </button>
      );
    } else {
      flashcardMain = (
        <button
          onClick={ this.toggleShow }
          className="flashcard-show-main">
          <div className="flashcard-show-text">
            { flashcard.word }
          </div>
          <img
            src={ flashcard.pic }
            alt={ flashcard.word }
            className="flashcard-show-img" >
          </img>
          <div className="flashcard-show-text">
            { flashcard.definition }
          </div>
          <div className="flashcard-show-text">
            { flashcard.sentence }
          </div>
          <div className="flashcard-show-text">
            { flashcard.origin }
          </div>
        </button>
      );
    }

    const negButton = (
      <button
        onClick={ this.handleNeg }>
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
    );

    const posButton = (
      <button
        onClick={ this.handlePos }>
        <i className="fa fa-check" aria-hidden="true"></i>
      </button>
    );

    return (
      <div className="flashcard-show-container">
        { flashcardMain }
        { negButton }
        { posButton }
      </div>
    );
  }
}

export default FlashcardShow;
