import React from 'react';
import Project from '../Project/Project';
import Category from '../Category/Category';
import { PROJECT_DETAIL } from '../projectsData';

import './ProjectList.css';

const ProjectList = () => (
  <div className="ProjectList-container">
    <Category category="Projects" />
    <Project
      title={PROJECT_DETAIL.Astroworker.title}
      description={PROJECT_DETAIL.Astroworker.description}
      subDescription={PROJECT_DETAIL.Astroworker.subDescription}
      shortSkills={PROJECT_DETAIL.Astroworker.shortSkills}
      longSkills={PROJECT_DETAIL.Astroworker.longSkills}
      link={PROJECT_DETAIL.Astroworker.link}
      text={PROJECT_DETAIL.Astroworker.text}
    />
    <Project
      title={PROJECT_DETAIL.Debut.title}
      description={PROJECT_DETAIL.Debut.description}
      subDescription={PROJECT_DETAIL.Debut.subDescription}
      shortSkills={PROJECT_DETAIL.Debut.shortSkills}
      longSkills={PROJECT_DETAIL.Debut.longSkills}
    />
    <Project
      title={PROJECT_DETAIL.Bagpal.title}
      description={PROJECT_DETAIL.Bagpal.description}
      subDescription={PROJECT_DETAIL.Bagpal.subDescription}
      shortSkills={PROJECT_DETAIL.Bagpal.shortSkills}
      longSkills={PROJECT_DETAIL.Bagpal.longSkills}
    />
    <Project
      title={PROJECT_DETAIL['Once Upon a Cloud'].title}
      description={PROJECT_DETAIL['Once Upon a Cloud'].description}
      subDescription={PROJECT_DETAIL['Once Upon a Cloud'].subDescription}
      shortSkills={PROJECT_DETAIL['Once Upon a Cloud'].shortSkills}
      longSkills={PROJECT_DETAIL['Once Upon a Cloud'].longSkills}
    />
    <Project
      title={PROJECT_DETAIL['Hotdog Chase'].title}
      description={PROJECT_DETAIL['Hotdog Chase'].description}
      subDescription={PROJECT_DETAIL['Hotdog Chase'].subDescription}
      shortSkills={PROJECT_DETAIL['Hotdog Chase'].shortSkills}
      longSkills={PROJECT_DETAIL['Hotdog Chase'].longSkills}
    />
    <Project
      title={PROJECT_DETAIL['Shift Payments'].title}
      description={PROJECT_DETAIL['Shift Payments'].description}
      subDescription={PROJECT_DETAIL['Shift Payments'].subDescription}
      shortSkills={PROJECT_DETAIL['Shift Payments'].shortSkills}
      longSkills={PROJECT_DETAIL['Shift Payments'].longSkills}
    />
  </div>
);

export default ProjectList;
