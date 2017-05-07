import React, { Component } from 'react';

class FlashcardShow extends Component {

  constructor() {
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
      showFront: !showFront
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
  }

  nextRound() {
    console.log("Round over");
  }

  handleNeg(e) {
    const flashcard = this.props.deck[this.state.deckIndex];
    const cardId = flashcard.id;
    const tierId = flashcard.tier_id;

    e.preventDefault();
    if (tierId < 4) {
      this.props.changeTierId(cardId, tierId + 1);
    }

    this.nextCard();

  }

  handlePos(e) {
    const flashcard = this.props.deck[this.state.deckIndex];
    const cardId = flashcard.id;
    const tierId = flashcard.tier_id;

    e.preventDefault();
    if (tierId > 1) {
      this.props.changeTierId(cardId, tierId - 1);
    }

    this.nextCard();

  }

  render() {
    const flashcard = this.props.deck[this.state.deckIndex];

    let flashcardMain;
    if (showFront) {
      flashcardMain = (
        <div
          onClick={ this.toggleShow }
          className="flashcard-show-main">
          <div className="flashcard-show-text">
            { flashcard.word }
          </div>
        </div>
      );
    } else {
      flashcardMain = (
        <div className="flashcard-show-main">
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
        </div>
      );
    }

    const negButton = (
      <button
        onClick={ this.handleNeg }>
        <i class="fa fa-times" aria-hidden="true"></i>
      </button>
    );

    const posButton = (
      <button
        onClick={ this.handlePos }>
        <i class="fa fa-check" aria-hidden="true"></i>
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
