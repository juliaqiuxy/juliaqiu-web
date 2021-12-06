import React from 'react';
import TruliaCard from './TruliaCard';
import useApi from '../../lib/useApi';

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
    <>
      {
        homes.map((home) => (
          <TruliaCard key={home.location.formattedLocation} home={home} />
        ))
      }
    </>
  );
};

export default TruliaCards;
