import React, { Component } from 'react';

class FlashcardShow extends Component {

  constructor(props) {
    super(props);
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
    const d = this.props.deck.flashcards;
    const currentTier = this.props.currentTier;
    const deck = d[currentTier];
    const deckIndex = this.state.deckIndex + 1;
    this.setState({
      deckIndex
    });

    console.log("deck index", this.state.deckIndex);
    console.log("deck length", deck.length);
    if (this.state.deckIndex >= deck.length - 1) {
      this.nextRound();
    }

    this.setState({
      showFront: true
    });

  }

  nextRound() {
    this.setState({
      deckIndex: 0
    });

    const d = this.props.deck.flashcards;
    const currentTier = this.props.currentTier;
    const deck = d[currentTier];
    console.log("d from nextRound", d);
    console.log('currentTier from nextRound', currentTier);
    console.log('deck from nextRound', deck);
    console.log('deck[currentTier + 1]', deck[currentTier + 1]);

    // this is not checking to see if lower level eexists, its
    // jjust checking to see if our array has a value defined
    // at this index, which just happens to be true
    // need to fix
    // should change to update deck on nextCard such that object has
    // proper keys, then do a proper check to see if a deeper key
    // exists, if it does increment depth. on nextRound check to
    // see the higher key exists, if it does then change currentTier
    // and increment it, else decrement it
    if (deck[currentTier + 1] && currentTier + 1 <= 4) {
      // this.props.updateTier(this.props.currentTier + 1);
      this.props.updateDeck(true);
    }
    else if (currentTier - 1 > 1) {
      // this.props.updateTier(this.props.currentTier - 1);
      console.log("updating from neg");
      this.props.updateDeck(false);
    }
    else {
      console.log("You Win");
    }
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
    console.log("This is in handlePos(), deck=" + deck, + ", currentTier=" + currentTier);
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
    console.log("This is my d=", d);
    const currentTier = this.props.currentTier;
    console.log("This is my currentTier=", currentTier);
    const deck = d[currentTier];
    console.log("this is my deck before render=", deck);
    const flashcard = deck[this.state.deckIndex];
    if (!flashcard) return (<div></div>);
    let flashcardMain;
    if (this.state.showFront) {
      flashcardMain = (
        <button
          onClick={ this.toggleShow }
          className="flashcard-show-main">
          <div className="flashcard-show-word">
            { flashcard.word }
          </div>
        </button>
      );
    } else {
      flashcardMain = (
        <button
          onClick={ this.toggleShow }
          className="flashcard-show-main">
          <img
            src={ flashcard.pic }
            alt={ flashcard.word }
            className="flashcard-show-img" >
          </img>
          <text className="flashcard-show-text">
            Definition: { flashcard.definition }
          </text>
          <text className="flashcard-show-text">
            Sentence: { flashcard.sentence }
          </text>
          <text className="flashcard-show-text">
            Part of Speech: { flashcard.origin }
          </text>
        </button>
      );
    }

    const negButton = (
      <button
        onClick={ this.handleNeg }
        className="Result-no">
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
    );

    const posButton = (
      <button
        onClick={ this.handlePos }
        className="Result-yes">
        <i className="fa fa-check" aria-hidden="true"></i>
      </button>
    );

    let buttons;
      if (!this.state.showFront) {
        buttons =
          <div className="buttons">
            { negButton }
            <text className="Got-It">Got It?</text>
            { posButton }
          </div>;
      }


    return (
      <div className="flashcard-show-container">
        { flashcardMain }
        { buttons }
      </div>
    );
  }
}

export default FlashcardShow;
