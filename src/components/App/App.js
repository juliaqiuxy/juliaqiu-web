import React, { useEffect, useState } from 'react';
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

const useIteration = () => {
  const [iteration, setIteration] = useState(0);

  useEffect(() => {
    const addIteration = () => {
      setIteration((prev) => prev + 1);
    };

    const handleScroll = throttle(addIteration, 100);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [iteration];
};

const App = () => {
  const [colorIteration] = useIteration();

  return (
    <Container>
      <Main>
        <Home />
      </Main>
      <ColorfulStripe iteration={colorIteration} />
    </Container>
  );
};

export default App;
