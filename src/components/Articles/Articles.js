import React from 'react';
import styled from 'styled-components';

import Category from '../Category/Category';
import ExternalUrl from '../ExternalUrl/ExternalUrl';

const Container = styled.div`
  margin-bottom: 62px;
  color: var(--juliadev-fg);
`;

const ArticleItem = styled.a`
  font-size: 26px;
  text-decoration: none;
  display: block;
  margin-bottom: 18px;
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
    <ArticleItem
      href="https://hackernoon.com/learning-how-to-code-one-email-at-a-time-347f1f2d318d"
      target="_blank"
      rel="noopener noreferrer"
      className="Articles-item"
    >
      Learning how to code one email at a time
    </ArticleItem>
    <LinkWrapper
      href="https://medium.com/@juliaqiuxy"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ExternalUrl addMaginTop text="More on Medium" />
    </LinkWrapper>
  </Container>
);

export default Articles;
