import React from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';

import ZillowIcon from './images/zillow.svg';

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

const NetflixAnchor = styled.a`
  color: var(--juliadev-accents-0);
  text-decoration: underline;
  font-size: 16px;
`;

const CompanyLogoWrapper = styled.span`
  margin-right: 6px;
`;

const Greeting = () => (
  <Container>
    <DashedRotatedContainer>
      <GreetingText>
        Hi, I’m Julia, a real estate agent in the Bay Area and Tahoe.
      </GreetingText>

      <GreetingText>
        I’ve been on both sides of the table buying and selling homes,
        so I get how intense it can feel. That’s why I keep things simple
        and real, helping clients cut through the noise and actually enjoy
        the process—whether it’s your very first home in the Bay Area or that
        dream ski cabin in Tahoe.
      </GreetingText>

      <GreetingText>
        I use familiar, millennial- and Gen Z-friendly tools to make everything
        smooth, fast and hassle-free.
      </GreetingText>

      <GreetingText>
        For buyers, here’s what roughly you can expect:
        <ul>
          <li>
            <ZillowAnchor href="https://www.zillow.com" target="_blank" rel="noopener noreferrer">
              <CompanyLogoWrapper>
                <ZillowIcon />
              </CompanyLogoWrapper>
              Find a house
            </ZillowAnchor>
          </li>
          <li>Make an offer</li>
          <li>Negotiate terms and counteroffers</li>
          <li>Sign the purchase agreement</li>
          <li>Schedule inspection and appraisal</li>
          <li>Do a final walkthrough</li>
          <li>Close and get the keys</li>
        </ul>
      </GreetingText>

      <GreetingText>
        For sellers, I keep it short and to the point—so you
        know exactly what matters and nothing that doesn’t.
      </GreetingText>

      <GreetingText>
        Also, whether I represent you as a buyer or a seller,
        I don’t see or manage your financials. Your loan officer
        handles the mortgage side of things—I just coordinate with
        them to keep everything moving smoothly. That said, I’m happy
        to make recommendations for loan officers or lenders
        I’ve worked with before.
      </GreetingText>

      <GreetingText>
        Finally, when I’m not talking real estate, I’m probably chasing the perfect
        souffle pancake, snowboarding, surfing Linda Mar, sailing, wine tasting
        or plotting my next trip.
      </GreetingText>

      <GreetingText>
        — Julia
        <br />
        <NetflixAnchor href="https://dre.ca.gov" target="_blank" rel="noopener noreferrer">
          DRE 02228979
        </NetflixAnchor>
      </GreetingText>

    </DashedRotatedContainer>
  </Container>
);

export default Greeting;
