import React, { Component } from 'react';
import styled from 'styled-components';

import Home from '../Home/Home';

import ColorfulStripe from '../ColorfulStripe/ColorfulStripe';

import { throttle } from '../util';

const Container = styled.div`
  text-align: left;
  display: flex;
  min-height: 100vh;
  height: auto;
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

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
      <Container>
        <Main>
          <Home />
        </Main>
        <ColorfulStripe iteration={this.state.colorIteration} />
      </Container>
    );
  }
}

export default App;
