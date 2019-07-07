import React from 'react';
import styled from 'styled-components';

import Category from '../Category/Category';

const Container = styled.div`
  margin-bottom: 62px;
`;

const ArticleItem = styled.a`
  font-size: 26px;
  text-decoration: none;
  display: block;
  margin-bottom: 18px;

  @media only screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media only screen and (min-width: 994px) {
    font-size: 32px;
  }
`;

const ArticleLink = styled.a`
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

export const Link = ({ text, href, newLine }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      textDecoration: 'none',
      display: 'block',
      marginTop: newLine ? '2pc' : 0,
    }}
  >
    <ArticleLink>{text}</ArticleLink>
    {
      text === 'request access'
        ? <img src="/static/images/lock.svg" alt="lock" />
        : <img src="/static/images/link.svg" alt="link" />
    }
  </a>
);

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
    <Link newLine text="More on Medium" href="https://medium.com/@juliaqiuxy" />
  </Container>
);

export default Articles;
