import React from 'react';
import styled from 'styled-components';

import Category from '../Category/Category';
import Talk from './Talk';

const Container = styled.div`
  margin-bottom: 62px;
`;

const Talks = () => (
  <Container>
    <Category category="Talks" />
    <Talk
      src="/videos/zeit-day.mp4"
      link="https://vercel.com/tv"
      linkText="vercel.com/tv"
      title="Migrating Slope Ninja to Zeit for Fun and Profit"
      name="Zeit Day 2018"
    />
    <Talk
      src="/videos/nextjs-conf.mp4"
      link="https://nextjs.org/conf/speakers/juliaqiuxy"
      linkText="nextjs.org/conf"
      title="CSS + Cookies: A Perfectionist's Approach to Theming in the World of Server-side Rendered Apps"
      name="Next.js Conf"
    />
  </Container>
);

export default Talks;
