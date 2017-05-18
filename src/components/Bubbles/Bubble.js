import React from 'react';
import './Bubble.css';

const Bubble = props => (
  <div
    className="Bubble-container"
    style={{
      animation: '4s bubblerise infinite ease-out',
      animationDuration: props.speed,
      animationDelay: props.delay,
      filter: `blur(${props.blur})`,
      left: props.position,
    }}
  >
    <div
      className="Bubble-content"
      style={{
        height: props.height,
        width: props.width,
      }}
    />
  </div>
);

export default Bubble;
