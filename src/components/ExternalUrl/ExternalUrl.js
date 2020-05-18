import React from 'react';
import styled from 'styled-components';

import LinkIcon from './images/link.svg';
import LockIcon from './images/lock.svg';

const ExternalUrlContainer = styled.div`
  svg {
    width: 14px;
  }
`;

const UrlText = styled.span`
  font-size: 18px;
  font-weight: 300;
  margin-right: 12px;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 994px) {
    font-size: 18px;
    font-weight: 100;
  }
`;

const ExternalUrl = ({ text, addMaginTop }) => (
  <ExternalUrlContainer style={{ marginTop: addMaginTop ? '2pc' : '0' }}>
    <UrlText>{text}</UrlText>
    {
      text === 'request access'
        ? <LockIcon />
        : <LinkIcon />
    }
  </ExternalUrlContainer>
);

export default ExternalUrl;
