import React from 'react';
import styled from 'styled-components';

import TruliaCard from './TruliaCard';
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
  flex: none;
`;

const TruliaCards = () => {
  const [data, loading, error] = useApi({
    fn: async () => {
      const response = await fetch('/api/homes');
      return response.json();
    },
  });

  if (loading || error) {
    return null;
  }

  const { searchLocation, homes } = data;

  return (
    <FullBleedBackground>
      <Title>
        <Tag>Sneak Peek</Tag>
        Homes near you
        {
          searchLocation ? ` in ${searchLocation?.city}, ${searchLocation?.stateCode}` : ''
        }
      </Title>

      <FullBleedHorizontalScroll
        items={(
          homes?.map((home) => (
            <TruliaCard key={home.location.formattedLocation} home={home} />
          ))
        )}
      />
    </FullBleedBackground>
  );
};

export default TruliaCards;
