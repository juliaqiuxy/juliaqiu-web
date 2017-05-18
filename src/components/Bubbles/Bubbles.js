import React from 'react';
import uuid from 'uuid';
import Bubble from './Bubble';
import './Bubbles.css';

const Bubbbles = (props) => {
  const minBubbleCount = Number(props.min); // Minimum number of bubbles
  const maxBubbleCount = Number(props.max); // Maximum number of bubbles
  const minBubbleSize = 2; // Smallest possible bubble diameter (px)
  const maxBubbleSize = 20; // Latgest possible bubble diameter (px)

  const numberOfBubbles =
      minBubbleCount +
      Math.floor(Math.random() * (maxBubbleCount + 1));

  const manyBubbles = Array.apply(null, new Array(numberOfBubbles));
  const BubbleElements = manyBubbles.map((bubble) => {
    const randomSpeed = 10 + Math.floor(Math.random() * 9) + 's';
    const randomDelay = Math.floor(Math.random() * 16) + 's';
    const randomBlur = Math.floor(Math.random() * 10) + 'px';
    const randomPosition = Math.floor(Math.random() * 101) + '%';
    const randomSize = minBubbleSize + Math.floor(Math.random() * (maxBubbleSize + 1)) + 'px';

    return (
      <Bubble
        key={uuid.v4()}
        speed={randomSpeed}
        delay={randomDelay}
        blur={randomBlur}
        position={randomPosition}
        height={randomSize}
        width={randomSize}
      />
    );
  });

  return (
    <div className="Bubbles-Container">
      {BubbleElements}
    </div>
  );
};

export default Bubbbles;
