import React from 'react';
import styled from 'styled-components';

import Category from '../Category/Category';
import Project from '../Project/Project';
import { Link } from '../Articles/Articles';
import { PROJECT_DETAIL } from '../projectsData';

const Container = styled.div`
  margin-bottom: 62px;
`;

const OpenSource = () => (
  <Container>
    <Category category="Open Source" />
    <Project
      link="https://slope.ninja"
      text="slope.ninja"
      title={PROJECT_DETAIL['Slope Ninja'].title}
      description={PROJECT_DETAIL['Slope Ninja'].description}
      subDescription={PROJECT_DETAIL['Slope Ninja'].subDescription}
      shortSkills={PROJECT_DETAIL['Slope Ninja'].shortSkills}
      longSkills={PROJECT_DETAIL['Slope Ninja'].longSkills}
    />
    <Project
      link="https://ndaify.com"
      text="ndaify.com"
      wip
      title={PROJECT_DETAIL.NDAify.title}
      description={PROJECT_DETAIL.NDAify.description}
      subDescription={PROJECT_DETAIL.NDAify.subDescription}
      shortSkills={PROJECT_DETAIL.NDAify.shortSkills}
      longSkills={PROJECT_DETAIL.NDAify.longSkills}
    />
    <Link addMaginTop href="https://github.com/juliaqiuxy" text="More on GitHub" />
  </Container>
);

export default OpenSource;
