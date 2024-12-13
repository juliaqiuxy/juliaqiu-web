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
        Hi, I’m Julia. I live in San Francisco and I’m a Senior Software Engineer at
        {' '}
        <NetflixAnchor href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">
          <CompanyLogoWrapper>
            <NetflixIcon />
          </CompanyLogoWrapper>
          Netflix
        </NetflixAnchor>
        {' '}
        on the team that builds
        {' '}
        <a href="https://www.netflix.com/tudum" target="_blank" rel="noopener noreferrer">Tudum</a>
        .
      </GreetingText>

      <GreetingText>
        Prior to joining Netflix, I spent almost 4 years at
        {' '}
        <ZillowAnchor href="https://www.zillow.com" target="_blank" rel="noopener noreferrer">
          <CompanyLogoWrapper>
            <ZillowIcon />
          </CompanyLogoWrapper>
          Zillow
        </ZillowAnchor>
        {' '}
        in challenging engineering and lead roles working on
        {' '}
        <TruliaAnchor href="http://www.trulia.com" target="_blank" rel="noopener noreferrer">
          <CompanyLogoWrapper>
            <TruliaIcon />
          </CompanyLogoWrapper>
          Trulia
        </TruliaAnchor>
        , where I&apos;ve had the pleasure of shipping multiple products from start to finish.
      </GreetingText>

      <GreetingText>
        In our mutual free time, my partner,
        {' '}
        <a href="https://jakemurzy.com" target="_blank" rel="noopener noreferrer">Jake Murzy</a>
        , and I contribute to open-source through shared projects.
        The latest of which,
        {' '}
        <a href="https://ndaify.com" target="_blank" rel="noopener noreferrer">NDAify</a>
        , helps you send non-disclosure agreements in just a few clicks and is
        {' '}
        <a href="https://github.com/NDAify" target="_blank" rel="noopener noreferrer">open-source on GitHub</a>
        .
      </GreetingText>

      <GreetingText>
        Otherwise, I spend my time failing to make the perfect souffle pancake,
        {' '}
        wine tasting, snowboarding, surfing Linda Mar, sailing or traveling the world.
      </GreetingText>

      <GreetingText>
        You can listen to me blab about stuff on
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
