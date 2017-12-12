import React from 'react';
import Project from '../Project/Project';
import Category from '../Category/Category';
import { PROJECT_DETAIL } from '../projectsData';

import './ProjectList.css';

const ProjectList = () => (
  <div className="ProjectList-container">
    <Category category="Projects" />
    <Project
      title={PROJECT_DETAIL.Debut.title}
      description={PROJECT_DETAIL.Debut.description}
      subDescription={PROJECT_DETAIL.Debut.subDescription}
      shortSkills={PROJECT_DETAIL.Debut.shortSkills}
    />
    <Project
      title={PROJECT_DETAIL.Bagpal.title}
      description={PROJECT_DETAIL.Bagpal.description}
      subDescription={PROJECT_DETAIL.Bagpal.subDescription}
      shortSkills={PROJECT_DETAIL.Bagpal.shortSkills}
    />
    <Project
      title={PROJECT_DETAIL['Once Upon a Cloud'].title}
      description={PROJECT_DETAIL['Once Upon a Cloud'].description}
      subDescription={PROJECT_DETAIL['Once Upon a Cloud'].subDescription}
      shortSkills={PROJECT_DETAIL['Once Upon a Cloud'].shortSkills}
    />
  </div>
);

export default ProjectList;
