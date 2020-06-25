import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getRandomInt } from '../util';

const STRIPE_COLORS = ['#84F752', '#A54AF6', '#4AB5F7', '#F7524A', '#E4B549', '#5252F6', '#F7EF4C', '#FFFFFF'];
const STRIPE_HEIGHTS = ['4px', '8px', '10px', '20px', '26px', '30px'];

const ColorfulStripeContainer = styled.div`
  width: 8px;
  overflow: hidden;
  position: relative;
  flex: none;
`;

const ColorfulStripeWrapper = styled.div`
  height: 2000px;
  width: 8px;
  position: absolute;
  right: 0;
  top: 0;
`;

const ColorfulStripe = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  if (!show) {
    return null;
  }

  const getRandom = getRandomInt();
  const keyPrefix = getRandom(1, 100);

  const stripes = Array(300).fill(0).map((pos, ii) => {
    const key = `stripe_${keyPrefix}_${ii}`;
    return (
      <div
        key={key}
        style={{
          backgroundColor: STRIPE_COLORS[getRandom(0, STRIPE_COLORS.length)],
          height: STRIPE_HEIGHTS[getRandom(0, STRIPE_HEIGHTS.length)],
          width: '100%',
          zIndex: 999,
        }}
      />
    );
  });

  return (
    <ColorfulStripeContainer>
      <ColorfulStripeWrapper>
        {stripes}
      </ColorfulStripeWrapper>
    </ColorfulStripeContainer>
  );
};

export default ColorfulStripe;
