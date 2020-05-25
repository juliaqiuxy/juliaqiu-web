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
      des="zeit day"
      link="https://vercel.com/tv"
      linkText="vercel.com/tv"
      title="Migrating Slope Ninja to Zeit for Fun and Profit"
      name="Zeit Day 2018"
    />
  </Container>
);

export default Talks;
