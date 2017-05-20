import React, { Component } from 'react';
import Home from '../Home/Home';
import Portfolio from '../Portfolio/Portfolio';
import FlippableCard from '../FlippableCard/FlippableCard';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.renderFrontCard = this.renderFrontCard.bind(this);
    this.handleFlipCard = this.handleFlipCard.bind(this);

    this.state = {
      currentCard: undefined,
    };
  }

  handleFlipCard(currentCard) {
    console.log(currentCard)
    this.setState({
      currentCard,
    });
  }

  renderFrontCard() {
    return (
      <Home
        onChangeCard={this.handleFlipCard}
      />
    );
  }

  render() {
    return (
      <FlippableCard
        duriation={1}
        cubicBezier={[0.15, 0.90, 0.25, 1.25]}
        currentCard={this.state.currentCard}
        renderFrontCard={this.renderFrontCard}
      >
        <Portfolio
          id="portfolio"
          onChangeCard={this.handleFlipCard}
        />
      </FlippableCard>
    );
  }
}

export default App;
