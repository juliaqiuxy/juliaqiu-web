import React from 'react';
import styled from 'styled-components';

import ExternalUrl from '../ExternalUrl/ExternalUrl';

const TalkContainer = styled.div`
  margin-bottom: 2pc;
`;

const TalkHeader = styled.a`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  text-decoration: none;
  color: var(--juliadev-fg);
`;

const TalkTitle = styled.span`
  font-size: 26px;
  text-decoration: none;
  color: var(--juliadev-fg);

  @media only screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media only screen and (min-width: 994px) {
    font-size: 32px;
  }
`;

const TalkDescription = styled.span`
  font-size: 22px;
  font-weight: 300;
  margin-top: 6px;
  color: var(--juliadev-fg);
  display: block;

  @media only screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media only screen and (min-width: 994px) {
    font-size: 24px;
    font-weight: 100;
  }
`;

const TalkVideo = styled.video`
  width: 100%;
  margin-bottom: 10px;
  border: 6px solid var(--juliadev-fg);
  filter: grayscale(100%);
  
  @media only screen and (min-width: 768px) {
    margin-top: 1pc;
  }
`;

const Talk = ({
  src, link, linkText, title, name,
}) => (
  <TalkContainer>
    <a
      href={link}
      target="blank"
      rel="noopener noreferrer"
      title={title}
    >
      <TalkVideo
        src={src}
        autoPlay
        loop
        playsInline
        muted
      />
    </a>
    <TalkHeader
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <TalkTitle>
        {name}
      </TalkTitle>
      <ExternalUrl href={link} text={linkText} />
    </TalkHeader>
    <TalkDescription>
      {title}
    </TalkDescription>

  </TalkContainer>
);

export default Talk;
