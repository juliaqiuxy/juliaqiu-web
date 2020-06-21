import React from 'react';
import styled from 'styled-components';

import HeartIcon from './images/heart.svg';
import UnicornIcon from './images/unicorn.svg';

const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: row;
  margin-top: 5px;
  position: relative;

  @media only screen and (min-width: 994px) {
    height: auto;
    align-items: flex-end;
  }
`;

const FooterTextContainer = styled.div`
  display: flex;
  width: 30%;
  justify-content: flex-start;
  align-items: baseline;
  flex-direction: row;
  margin-bottom: 2pc;

  @media only screen and (min-width: 994px) {
    justify-content: center;
  }
`;

const FooterText = styled.span`
  color: var(--juliadev-accents-0);
  font-size: 12px;
  text-align: center;

  @media only screen and (min-width: 994px) {
    font-size: 16px;
  }
`;

const FooterHeart = styled(HeartIcon)`
  width: 12px;
  margin-left: 5px;
  margin-right: 5px;

  @media only screen and (min-width: 994px) {
    width: 16px;
  }
`;

const FooterGraph = styled(UnicornIcon)`
  position: absolute;
  right: 0;
  width: 140px;
  bottom: 0;

  @media only screen and (min-width: 768px) {
    right: 1pc;
    width: 220px;
  }

  @media only screen and (min-width: 994px) {
    right: 2pc;
    width: 374px;
  }
`;

const Footer = () => (
  <Container>
    <FooterTextContainer>
      <FooterText>
        © Julia Qiu. All rights reserved. Made with
        <FooterHeart
          alt="heart"
          src="/images//heart.svg"
        />
        in San Francisco.
      </FooterText>
    </FooterTextContainer>
    <FooterGraph
      src="/images//unicorn.svg"
      alt="unicorn"
    />
  </Container>
);

export default Footer;
