import React from 'react';
import styled from 'styled-components';

import Category from '../Category/Category';
import Project from '../Project/Project';
import ExternalUrl from '../ExternalUrl/ExternalUrl';
import { PROJECT_DETAIL } from '../projectsData';

const Container = styled.div`
  margin-bottom: 62px;
`;

const LinkWrapper = styled.a`
  text-decoration: none;
  color: inherit;
`;

const OpenSource = () => (
  <Container>
    <Category category="Open Source" />
    <Project
      link="https://ndaify.com"
      text="ndaify.com"
      decoration="new"
      title={PROJECT_DETAIL.NDAify.title}
      description={PROJECT_DETAIL.NDAify.description}
      subDescription={PROJECT_DETAIL.NDAify.subDescription}
      shortSkills={PROJECT_DETAIL.NDAify.shortSkills}
      longSkills={PROJECT_DETAIL.NDAify.longSkills}
    />
    <Project
      link="https://slope.ninja"
      text="slope.ninja"
      title={PROJECT_DETAIL['Slope Ninja'].title}
      description={PROJECT_DETAIL['Slope Ninja'].description}
      subDescription={PROJECT_DETAIL['Slope Ninja'].subDescription}
      shortSkills={PROJECT_DETAIL['Slope Ninja'].shortSkills}
      longSkills={PROJECT_DETAIL['Slope Ninja'].longSkills}
    />
    <LinkWrapper
      href="https://github.com/juliaqiuxy"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ExternalUrl addMaginTop text="More on GitHub" />
    </LinkWrapper>
  </Container>
);

export default OpenSource;
