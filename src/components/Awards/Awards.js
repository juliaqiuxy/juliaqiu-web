import React from 'react';
import styled from 'styled-components';

import Category from '../Category/Category';
import ExternalUrl from '../ExternalUrl/ExternalUrl';

const Container = styled.div`
  margin-bottom: 62px;
  color: var(--juliadev-fg);
`;

const AwardItem = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr auto;
  align-items: end;
  margin-bottom: 18px;
`;

const AwardItemContent = styled.a`
  font-size: 26px;
  text-decoration: none;
  display: block;
  color: var(--juliadev-fg);

  @media only screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media only screen and (min-width: 994px) {
    font-size: 32px;
  }
`;

const LinkWrapper = styled.a`
  text-decoration: none;
  color: inherit;
`;

const AwardDescription = styled.span`
  font-size: 22px;
  margin-top: 6px;
  color: var(--juliadev-fg);
  display: block;

  @media only screen and (min-width: 768px) {
    font-size: 22px;
  }

  @media only screen and (min-width: 994px) {
    font-size: 24px;
  }
`;

const Awards = () => (
  <Container>
    <Category category="Awards" />
    <AwardItem>
      <AwardItemContent
        href="https://winners.webbyawards.com/2025/advertising-media-pr/branded-content/media-entertainment/323083/jake-paul-vs-mike-tyson-live-on-netflix-hub"
        target="_blank"
        rel="noopener noreferrer"
        className="Awards-item"
      >
        Webby Winner 🏆
      </AwardItemContent>
      <LinkWrapper
        href="https://winners.webbyawards.com/2025/advertising-media-pr/branded-content/media-entertainment/323083/jake-paul-vs-mike-tyson-live-on-netflix-hub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalUrl text="webbyawards.com" />
      </LinkWrapper>

    </AwardItem>
    <AwardDescription>
      &quot;Jake Paul vs Mike Tyson Live on Netflix&quot; hub
    </AwardDescription>
  </Container>
);

export default Awards;
