import React, { Component } from 'react';
import styled from 'styled-components';

import Project from '../Project/Project';
import Category from '../Category/Category';
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

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background: transparent;
  margin-top: 1pc;
  padding: 6px;
  padding-left: 2pc;
  padding-right: 2pc;
  border-radius: 4px;
  font-size: 14px;
  color: #4A4A4A;
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;
  border-color: #4A4A4A;
`;

class ProjectList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMore: false,
    };

    this.handleShowMoreClick = this.handleShowMoreClick.bind(this);
  }

  handleShowMoreClick() {
    this.setState(() => ({
      showMore: true,
    }));
  }

  render() {
    const { showMore } = this.state;
    return (
      <Container>
        <Category category="Work" />
        <Project
          title={PROJECT_DETAIL.Trulia.title}
          description={PROJECT_DETAIL.Trulia.description}
          subDescription={PROJECT_DETAIL.Trulia.subDescription}
          shortSkills={PROJECT_DETAIL.Trulia.shortSkills}
          longSkills={PROJECT_DETAIL.Trulia.longSkills}
          link={PROJECT_DETAIL.Trulia.link}
          text={PROJECT_DETAIL.Trulia.text}
        />
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
        {
          showMore ? (
            <div>
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
          ) : (
            <ButtonWrapper>
              <Button
                onClick={this.handleShowMoreClick}
              >
                Show More Projects
              </Button>
            </ButtonWrapper>
          )
        }
      </Container>
    );
  }
}

export default ProjectList;
