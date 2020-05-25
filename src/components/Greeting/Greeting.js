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
  color: #EDEDED;

  :first-of-type {
    margin-top: 0;
  }

  :last-of-type {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 768px) {
    font-size: 24px;
    font-weight: 100;
    color: #EDEDED;
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
        Hi, I’m Julia. I live in San Francisco, CA and I’m a Senior Software Engineer at
        {' '}
        <ZillowIcon />
        {' '}
        <ZillowAnchor href="https://www.zillowgroup.com/" target="_blank" rel="noopener noreferrer">Zillow Group</ZillowAnchor>
        , an online real estate company.
      </GreetingText>

      <GreetingText>
        My primary focus is building
        {' '}
        <TruliaIcon />
        {' '}
        <TruliaAnchor href="http://www.trulia.com/" target="_blank" rel="noopener noreferrer">Trulia</TruliaAnchor>
        , a subsidiary of Zillow, which is the primary source of
        {' '}
        real estate and rental data for millions of users across North America.
      </GreetingText>

      <GreetingText>
        I also help maintain our UI library and the
        {' '}
        metrics dashboard for some of our internal tools.
      </GreetingText>

      <GreetingText>
        I spend my free time failing to make the perfect souffle pancake,
        {' '}
        or otherwise coding, wine tasting, snowboarding and traveling the world.
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
