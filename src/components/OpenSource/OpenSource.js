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
  color: var(--juliadev-fg);
`;

const OpenSource = () => (
  <Container>
    <Category category="Open Source" />
    <Project
      link="https://github.com/juliaqiuxy/wfcache"
      text="wfcache"
      decoration="new"
      title={PROJECT_DETAIL.wfcache.title}
      description={PROJECT_DETAIL.wfcache.description}
      subDescription={PROJECT_DETAIL.wfcache.subDescription}
      shortSkills={PROJECT_DETAIL.wfcache.shortSkills}
      longSkills={PROJECT_DETAIL.wfcache.longSkills}
    />
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
      text="slope.ninja"
      title={PROJECT_DETAIL['Slope Ninja'].title}
      description={PROJECT_DETAIL['Slope Ninja'].description}
      subDescription={PROJECT_DETAIL['Slope Ninja'].subDescription}
      shortSkills={PROJECT_DETAIL['Slope Ninja'].shortSkills}
      longSkills={PROJECT_DETAIL['Slope Ninja'].longSkills}
    />
    <Project
      link="https://github.com/building-block/blocks"
      text="building-block/blocks"
      title={PROJECT_DETAIL['Building Block'].title}
      description={PROJECT_DETAIL['Building Block'].description}
      subDescription={PROJECT_DETAIL['Building Block'].subDescription}
      shortSkills={PROJECT_DETAIL['Building Block'].shortSkills}
      longSkills={PROJECT_DETAIL['Building Block'].longSkills}
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
