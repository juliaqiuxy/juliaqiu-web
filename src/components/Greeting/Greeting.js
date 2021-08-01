import React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';

import ZillowIcon from './images/zillow.svg';
import TruliaIcon from './images/trulia.svg';
import TwitterIcon from './images/twitter.svg';

const gradient = chroma.scale(
  ['#006AFF', '#00ADBB'],
).mode('lch').colors(11);

const gradientKeyframeRules = gradient.map((color, ii) => `
  ${ii * 10}% {
    background-image: linear-gradient(to right, ${color} 50%, transparent 50%), linear-gradient(to right, ${color} 50%, transparent 50%), linear-gradient(to bottom, ${color} 50%, transparent 50%), linear-gradient(to bottom, ${color} 50%, transparent 50%);
  }
`).join('\n');

const Container = styled.div`
  margin-top: 2pc;
  margin-bottom: 62px;
  background-color: var(--juliadev-bg-overlay);

  @media only screen and (min-width: 768px) {
    margin: 3pc;
    margin-bottom: 6pc;
  }

  svg {
    width: 20px;
  }
`;

const DashedRotatedContainer = styled.div`
  background-image: linear-gradient(to right, ${gradient[0]} 50%, transparent 50%), linear-gradient(to right, ${gradient[0]} 50%, transparent 50%), linear-gradient(to bottom, ${gradient[0]} 50%, transparent 50%), linear-gradient(to bottom, ${gradient[0]} 50%, transparent 50%);
  background-position: left top, left bottom, left top, right top;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 20px 1px, 20px 1px, 1px 20px, 1px 20px;

  padding: 16px;

  animation-name: borderColor;
  animation-duration: 2s;
  animation-timing-function: cubic-bezier(0.42,0,0.58,1);
  animation-iteration-count: infinite;
  animation-direction: alternate;
  
  @media only screen and (min-width: 768px) {
    transform: rotate(-2deg);
    padding: 3pc;
  }

  @keyframes borderColor {
    ${gradientKeyframeRules}
  }
`;

const GreetingText = styled.p`
  font-size: 22px;
  font-weight: 300;
  color: var(--juliadev-fg);

  :first-of-type {
    margin-top: 0;
  }

  :last-of-type {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 100;
    color: var(--juliadev-fg);
  }
`;

const ZillowAnchor = styled.a`
  color: rgba(0, 106, 255, 1);
  text-decoration: underline;
`;

const TruliaAnchor = styled.a`
  color: #01ADBB;
  text-decoration: underline;
`;

const TwitterAnchor = styled.a`
  color: #0F96CC;
  text-decoration: underline;
`;

const Greeting = () => (
  <Container>
    <DashedRotatedContainer>
      <GreetingText>
        Hi, I’m Julia. I live in San Francisco and I’m a Senior Software Engineer at
        {' '}
        <ZillowIcon />
        {' '}
        <ZillowAnchor href="https://www.zillow.com/" target="_blank" rel="noopener noreferrer">Zillow</ZillowAnchor>
        .
      </GreetingText>

      <GreetingText>
        My main focus is building
        {' '}
        <TruliaIcon />
        {' '}
        <TruliaAnchor href="http://www.trulia.com" target="_blank" rel="noopener noreferrer">Trulia</TruliaAnchor>
        , a subsidiary of Zillow. I also help maintain our UI library and the
        {' '}
        metrics dashboard for some of our internal tools.
      </GreetingText>

      <GreetingText>
        My very recent personal project,
        {' '}
        <a href="https://ndaify.com" target="_blank" rel="noopener noreferrer">NDAify</a>
        , helps you send non-disclosure agreements in just a few clicks and is
        {' '}
        <a href="https://github.com/NDAify" target="_blank" rel="noopener noreferrer">open-source on GitHub</a>
        .
      </GreetingText>

      <GreetingText>
        I spend my free time failing to make the perfect souffle pancake,
        {' '}
        or otherwise coding, wine tasting, snowboarding, surfing Linda Mar and traveling the world.
      </GreetingText>

      <GreetingText>
        You can listen to me blab about stuff on
        {' '}
        <TwitterIcon />
        {' '}
        <TwitterAnchor href="https://twitter.com/juliaqiuxy" target="_blank" rel="noopener noreferrer">Twitter</TwitterAnchor>
        .
      </GreetingText>

      <GreetingText>
        — Julia
      </GreetingText>

    </DashedRotatedContainer>
  </Container>
);

export default Greeting;
