import React from 'react';
import styled from 'styled-components';

import Project from '../Project/Project';
import { PROJECT_DETAIL } from '../projectsData';

const Container = styled.div`
  flex: 1;
  text-align: left;
  margin-bottom: 62px;

  & a {
    text-decoration: none;
    color: inherit;
  }
`;

function ProjectList() {
  return (
    <Container>
      <Project
        title={PROJECT_DETAIL.Trulia.title}
        description={PROJECT_DETAIL.Trulia.description}
        subDescription={PROJECT_DETAIL.Trulia.subDescription}
        shortSkills={PROJECT_DETAIL.Trulia.shortSkills}
        longSkills={PROJECT_DETAIL.Trulia.longSkills}
        link={PROJECT_DETAIL.Trulia.link}
        text={PROJECT_DETAIL.Trulia.text}
        enableCards={PROJECT_DETAIL.Trulia.enableCards}
      />
    </Container>
  );
}

export default ProjectList;
