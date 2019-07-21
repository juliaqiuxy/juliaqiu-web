import React from 'react';
import styled from 'styled-components';

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
  <div style={{ marginTop: addMaginTop ? '2pc': '0'}}>
    <UrlText>{text}</UrlText>
    {
      text === 'request access'
        ? <img src="/static/images/lock.svg" alt="lock" />
        : <img src="/static/images/link.svg" alt="link" />
    }
  </div>
);

export default ExternalUrl;