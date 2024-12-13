import React from 'react';
import styled from 'styled-components';

import Category from '../Category/Category';
import ExternalUrl from '../ExternalUrl/ExternalUrl';

const Container = styled.div`
  margin-bottom: 62px;
  color: var(--juliadev-fg);
`;

const ArticleItem = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr auto;
  align-items: end;
  margin-bottom: 18px;
`;

const ArticleItemContent = styled.a`
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

const Articles = () => (
  <Container>
    <Category category="Articles" />
    <ArticleItem>
      <ArticleItemContent
        href="https://web.dev/case-studies/netflix-cq"
        target="_blank"
        rel="noopener noreferrer"
        className="Articles-item"
      >
        Unlocking the power of CSS container queries: lessons from the Netflix
        team
      </ArticleItemContent>
      <LinkWrapper
        href="https://web.dev/case-studies/netflix-cq"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ExternalUrl text="web.dev" />
      </LinkWrapper>
    </ArticleItem>
  </Container>
);

export default Articles;
