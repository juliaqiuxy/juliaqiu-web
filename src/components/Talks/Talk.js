import React from 'react';
import styled from 'styled-components';

import { Link } from '../Articles/Articles';

const TalkHeader = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
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

const TalkGifWrapper = styled.div`
  width: 100%;
  margin-top: 10px;

  @media only screen and (min-width: 768px) {
    margin-top: 1pc;
  }
`;

const TalkGif = styled.img`
  width: 100%;
  height: auto;
`;

const Talk = ({
  src, des, link, linkText, title, name,
}) => (
  <div>
    <TalkHeader>
      <TalkTitle>
        {name}
      </TalkTitle>

      <Link href={link} text={linkText} />
    </TalkHeader>
    <TalkDescription>
      {title}
    </TalkDescription>
    <TalkGifWrapper>
      <a
        href="http://bit.ly/zeitday-juliaqiu"
        target="blank"
      >
        <TalkGif src={src} alt={des} />
      </a>
    </TalkGifWrapper>
  </div>
);

export default Talk;
