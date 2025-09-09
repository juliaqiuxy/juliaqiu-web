import React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';

import ZillowIcon from './images/zillow.svg';
import TruliaIcon from './images/trulia.svg';
import XIcon from './images/x.svg';
import NetflixIcon from './images/netflix.svg';

const gradient = chroma.scale(
  ['#006AFF', '#00ADBB', '#E50914'],
).mode('lch').colors(10);

const reversedGradient = chroma.scale(
  ['#E50914', '#00ADBB', '#006AFF'],
).mode('lch').colors(10);

const gradientKeyframeRules = [
  ...gradient.map((color, ii) => `
    ${ii * 5}% {
      background-image: 
        linear-gradient(to right, ${color} 50%, transparent 50%), 
        linear-gradient(to right, ${color} 50%, transparent 50%), 
        linear-gradient(to bottom, ${color} 50%, transparent 50%), 
        linear-gradient(to bottom, ${color} 50%, transparent 50%);
    }
  `),
  ...reversedGradient.map((color, ii) => `
  ${(ii * 5) + 50}% {
    background-image: 
      linear-gradient(to right, ${color} 50%, transparent 50%), 
      linear-gradient(to right, ${color} 50%, transparent 50%), 
      linear-gradient(to bottom, ${color} 50%, transparent 50%), 
      linear-gradient(to bottom, ${color} 50%, transparent 50%);
  }
`),
];

const Container = styled.div`
  margin-top: 2pc;
  margin-bottom: 62px;
  background-color: var(--juliadev-bg-overlay);

  @media only screen and (min-width: 768px) {
    margin: 1pc;
    margin-bottom: 6pc;
  }

  svg {
    height: 24px;
    position: relative;
    top: 4px;
  }
`;

const DashedRotatedContainer = styled.div`
  background-image: linear-gradient(to right, ${gradient[0]} 50%, transparent 50%), linear-gradient(to right, ${gradient[0]} 50%, transparent 50%), linear-gradient(to bottom, ${gradient[0]} 50%, transparent 50%), linear-gradient(to bottom, ${gradient[0]} 50%, transparent 50%);
  background-position: left top, left bottom, left top, right top;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 20px 1px, 20px 1px, 1px 20px, 1px 20px;

  padding: 16px;

  animation-name: borderColor;
  animation-duration: 20s;
  animation-timing-function: cubic-bezier(0.42,0,0.58,1);
  animation-iteration-count: infinite;
  animation-direction: alternate;
  
  @media only screen and (min-width: 768px) {
    transform: rotate(-2deg);
    padding: 3pc;
  }

  @keyframes borderColor {
    ${gradientKeyframeRules.join('\n')}
  }
`;

const GreetingText = styled.p`
  font-size: 22px;
  color: var(--juliadev-fg);

  :first-of-type {
    margin-top: 0;
  }

  :last-of-type {
    margin-bottom: 0;
  }

  @media only screen and (min-width: 768px) {
    font-size: 24px;
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

const XAnchor = styled.a`
  color: var(--juliadev-fg);
  text-decoration: underline;
`;

const NetflixAnchor = styled.a`
  color: #E50914;
  text-decoration: underline;
`;

const CompanyLogoWrapper = styled.span`
  margin-right: 6px;
`;

const Greeting = () => (
  <Container>
    <DashedRotatedContainer>
      <GreetingText>
        Hi, I’m Julia. I live in San Francisco and work as an Engineering Lead at
        {' '}
        <NetflixAnchor href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">
          <CompanyLogoWrapper>
            <NetflixIcon />
          </CompanyLogoWrapper>
          Netflix
        </NetflixAnchor>
        {', '}
        where I focus on
        {' '}
        <a href="https://www.netflix.com/tudum" target="_blank" rel="noopener noreferrer">Tudum</a>
        {' and '}
        <a href="https://www.netflixhouse.com" target="_blank" rel="noopener noreferrer">House</a>
        .
      </GreetingText>

      <GreetingText>
        Before Netflix, I spent four years at
        {' '}
        <ZillowAnchor href="https://www.zillow.com" target="_blank" rel="noopener noreferrer">
          <CompanyLogoWrapper>
            <ZillowIcon />
          </CompanyLogoWrapper>
          Zillow
        </ZillowAnchor>
        {' '}
        in engineering and lead roles on
        {' '}
        <TruliaAnchor href="http://www.trulia.com" target="_blank" rel="noopener noreferrer">
          <CompanyLogoWrapper>
            <TruliaIcon />
          </CompanyLogoWrapper>
          Trulia
        </TruliaAnchor>
        , where I shipped multiple products from start to finish.
      </GreetingText>

      <GreetingText>
        Outside of work, my partner,
        {' '}
        <a href="https://jakemurzy.com" target="_blank" rel="noopener noreferrer">Jake Murzy</a>
        {' '}
        and I contribute to open source projects, experimenting (and often failing)
        with souffle pancakes, wine tasting, snowboarding, ice skating, surfing Linda Mar,
        sailing, golfing and traveling the world.
      </GreetingText>

      <GreetingText>
        You can also catch me rambling on
        {' '}
        <XAnchor href="https://x.com/juliaqiuxy" target="_blank" rel="noopener noreferrer">
          <CompanyLogoWrapper>
            <XIcon />
          </CompanyLogoWrapper>
          X
        </XAnchor>
        .
      </GreetingText>

      <GreetingText>
        — Julia
      </GreetingText>

    </DashedRotatedContainer>
  </Container>
);

export default Greeting;
