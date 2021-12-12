import React from 'react';
import styled from 'styled-components';

import TruliaCards from '../TruliaCards/TruliaCards';
import NetflixCards from '../NetflixCards/NetflixCards';

const CARDS_COMPONENT = {
  Trulia: TruliaCards,
  Netflix: NetflixCards,
};

const Container = styled.div`
  margin-top: 10px;
  width: 100%;
`;

const ProjectCards = ({ enableCards, title }) => {
  const Cards = enableCards && CARDS_COMPONENT[title];
  if (!Cards) {
    return null;
  }

  return (
    <Container>
      <Cards />
    </Container>
  );
};

export default ProjectCards;
