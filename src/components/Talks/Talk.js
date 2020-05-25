import React from 'react';
import styled from 'styled-components';

import ExternalUrl from '../ExternalUrl/ExternalUrl';

const TalkHeader = styled.a`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  text-decoration: none;
`;

const TalkTitle = styled.span`
  font-size: 26px;
  text-decoration: none;

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
  color: #EDEDED;
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
  margin-top: 10px;

  @media only screen and (min-width: 768px) {
    margin-top: 1pc;
  }
`;


const Talk = ({
  src, link, linkText, title, name,
}) => (
  <div>
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
    <a
      href="http://bit.ly/zeitday-juliaqiu"
      target="blank"
      rel="noopener noreferrer"
    >
      <TalkVideo
        src={src}
        autoPlay
        loop
        playsInline
      />
    </a>
  </div>
);

export default Talk;
