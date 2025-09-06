import React from 'react';
import styled from 'styled-components';

import ProjectCards from './ProjectCards';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    font-size: 42px;
  }
`;

function Project({ title, enableCards }) {
  return (
    <Container>
      <ProjectCards enableCards={enableCards} title={title} />
    </Container>
  );
}

export default Project;
