import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import subDays from 'date-fns/subDays';

import NetflixCard from './NetflixCard';
import useApi from '../../lib/useApi';

import FullBleedHorizontalScroll from '../FullBleedHorizontalScroll/FullBleedHorizontalScroll';

const FullBleedBackground = styled.div`
  width: calc(100vw - 4px);
  position: relative;
  left: 50%;
  right: 50%;
  padding-top: 1.5pc;
  margin-left: -50vw;
  margin-right: -50vw;
  box-sizing: border-box;
  overflow: hidden;
`;

const Title = styled.div`
  color: var(--juliadev-fg);
  transform: translateX(20px);
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-bottom: 1pc;

  @media only screen and (min-width: 768px) {
    transform: translateX(calc(max(720px, 100vw)/2 - 40vw));
  }

  @media only screen and (min-width: 1200px) {
    transform: translateX(calc(max(720px, 100vw)/2 - 360px));
  }
`;

const Tag = styled.span`
  margin-right: 8px;
  padding: 4px;
  border-radius: var(--juliadev-accents-radius-1);
  font-size: 8px;
  color: var(--juliadev-bg);
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  background-color: var(--juliadev-fg);
`;

const parseDate = (rawDate) => {
  if (!rawDate) {
    throw new Error('Invalid Date');
  }

  const year = parseInt(rawDate.slice(0, 4), 10);
  const month = parseInt(rawDate.slice(4, 6), 10);
  const day = parseInt(rawDate.slice(6, 8), 10);

  const endDate = new Date(year, month - 1, day);
  if (!year || !month || !day || !endDate) {
    throw new Error('Invalid Date');
  }

  return endDate;
};

const getWeekRangeFromEndDate = (endDate) => {
  if (!endDate) {
    throw new Error('Invalid Date');
  }

  const startDate = subDays(endDate, 6);

  const formattedStartDate = format(startDate, 'MMMM d');
  const formattedEndDate = format(endDate, 'MMMM d');

  return `${formattedStartDate} - ${formattedEndDate}`;
};

const NetflixCards = () => {
  const [data, loading, error] = useApi({
    fn: async () => {
      const response = await fetch('/api/shows');
      return response.json();
    },
  });
  const { shows } = data;

  if (loading || error || !shows) {
    return null;
  }

  const endDate = parseDate(shows[0].week);
  const weekRange = getWeekRangeFromEndDate(endDate);

  return (
    <FullBleedBackground>
      <Title>
        <Tag>Sneek Peak</Tag>
        Global Top 10 Films from
        {' '}
        {weekRange}
      </Title>

      <FullBleedHorizontalScroll
        items={(
          shows.map((show) => (
            <NetflixCard key={show.showId} show={show} />
          ))
      )}
      />
    </FullBleedBackground>
  );
};

export default NetflixCards;
