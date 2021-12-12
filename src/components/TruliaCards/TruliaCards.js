import React from 'react';
import TruliaCard from './TruliaCard';
import useApi from '../../lib/useApi';

import FullBleedHorizontalScroll from '../FullBleedHorizontalScroll/FullBleedHorizontalScroll';

const TruliaCards = () => {
  const [homes, loading, error] = useApi({
    fn: async () => {
      const response = await fetch('/api/homes');
      return response.json();
    },
  });

  if (loading || error) {
    return null;
  }

  return (
    <FullBleedHorizontalScroll
      items={(
        homes.map((home) => (
          <TruliaCard key={home.location.formattedLocation} home={home} />
        ))
      )}
    />
  );
};

export default TruliaCards;
