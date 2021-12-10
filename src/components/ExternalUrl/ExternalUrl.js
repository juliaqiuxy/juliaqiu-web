import React from 'react';
import styled from 'styled-components';

import LinkIcon from './images/link.svg';
import LockIcon from './images/lock.svg';

const ExternalUrlContainer = styled.div`
  svg {
    display: none;
  }
  
  @media only screen and (min-width: 768px) {
    svg {
      display: inline;
      width: 14px;
      color: var(--juliadev-fg);
    }
  }
`;

const UrlText = styled.span`
  font-size: 18px;
  font-weight: 100;
  ${(props) => (props.isRequestAccess ? null : 'text-decoration: underline;')}
  color: var(--juliadev-fg);

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    text-decoration: none;
    margin-right: 12px;
  }

  @media only screen and (min-width: 994px) {
    font-size: 18px;
    font-weight: 100;
  }
`;

const ExternalUrl = ({ text, addMaginTop }) => {
  const isRequestAccess = text === 'request access';

  return (
    <ExternalUrlContainer style={{ marginTop: addMaginTop ? '2pc' : '0' }}>
      <UrlText isRequestAccess={isRequestAccess}>{text}</UrlText>
      {
        isRequestAccess
          ? <LockIcon />
          : <LinkIcon />
      }
    </ExternalUrlContainer>
  );
};

export default ExternalUrl;
