import React, { Component } from 'react';

import Home from '../Home/Home';

import ColorfulStripe from '../ColorfulStripe/ColorfulStripe';

import { throttle } from '../util';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colorIteration: 0,
    };

    const reloadStrip = () => {
      this.setState(prevState => ({
        colorIteration: prevState.colorIteration + 1,
      }));
    };

    this.handleScroll = throttle(reloadStrip, 100);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  compoentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div className="App">
        <main
          className="App-main-container"
        >
          <Home />
        </main>
        <ColorfulStripe iteration={this.state.colorIteration} />
      </div>
    );
  }
}

export default App;
