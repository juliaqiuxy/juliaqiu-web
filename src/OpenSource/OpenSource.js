import React from 'react';
import Category from '../Category/Category';
import Project from '../Project/Project';
import { Link } from '../Articles/Articles';
import { PROJECT_DETAIL } from '../projectsData';
import './OpenSource.css';

const OpenSource = () => (
  <div className="OpenSource-container">
    <Category category="Open Source" />
    <Project
      link="https://www.slope.ninja"
      text="www.slope.ninja"
      title={PROJECT_DETAIL['Slope Ninja'].title}
      description={PROJECT_DETAIL['Slope Ninja'].description}
      subDescription={PROJECT_DETAIL['Slope Ninja'].subDescription}
      shortSkills={PROJECT_DETAIL['Slope Ninja'].shortSkills}
      longSkills={PROJECT_DETAIL['Slope Ninja'].longSkills}
    />
    <Link link="https://github.com/juliaqiuxy" text="More on Github" />
  </div>
);

export default OpenSource;
