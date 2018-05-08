import React from 'react';

import { getRandomInt } from '../util';
import './ColorfulStripe.css';

const STRIPE_COLORS = ['#84F752', '#A54AF6', '#4AB5F7', '#F7524A', '#E4B549', '#5252F6', '#F7EF4C', '#FFFFFF'];
const STRIPE_HEIGHTS = ['4px', '8px', '10px', '20px', '26px', '30px'];

const ColorfulStripe = () => {
  const getRandom = getRandomInt();
  const stripes = Array(200).fill(0).map((item, index) => (
    <div
      key={index}
      style={{
        backgroundColor: STRIPE_COLORS[getRandom(0, STRIPE_COLORS.length)],
        height: STRIPE_HEIGHTS[getRandom(0, STRIPE_HEIGHTS.length)],
        width: '100%',
        zIndex: 999,
      }}
    />
));

  return (
    <div className="ColorfulStripe-container">
      <div className="ColorfulStripe">
        {stripes}
      </div>
    </div>
  );
};

export default ColorfulStripe;
