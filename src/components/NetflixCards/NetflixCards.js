import React from 'react';
import NetflixCard from './NetflixCard';
import useApi from '../../lib/useApi';

import FullBleedHorizontalScroll from '../FullBleedHorizontalScroll/FullBleedHorizontalScroll';

const NetflixCards = () => {
  const [shows, loading, error] = useApi({
    fn: async () => {
      const response = await fetch('/api/shows');
      return response.json();
    },
  });

  if (loading || error) {
    return null;
  }

  return (
    <FullBleedHorizontalScroll
      items={(
        shows.map((show) => (
          <NetflixCard key={show.showId} show={show} />
        ))
      )}
    />
  );
};

export default NetflixCards;
