import React, { Component } from 'react';
import styled from 'styled-components';
import chroma from 'chroma-js';

import ExternalUrl from '../ExternalUrl/ExternalUrl';

const tags = [
  'React',
  'Figma',
  'PHP',
  'GraphQL',
  'React Native',
  'Redux',
  'node.js',
  'Cypress',
  'UI/UX',
  'VR',
  'Babel',
  'PostgreSQL',
  'Koa',
  'TypeScript',
  'Knex',
  'DynamoDB',
  'Unity',
  'CircleCI',
  'Jenkins',
  'Bootstrap Grid',
  'Google Cardboard',
  'Oculus',
  'Docker',
  '3D',
  'C#',
  'Next.js',
  'Interaction Design',
  'Illustration',
  'After Effects',
  'Motion Graphics',
  'Apollo',
  'AWS SES',
  'JavaScript',
  'Selenium',
  'Stripe API',
  'Swagger',
  'Sketch',
  'Lerna',
  'OAuth',
  'Groovy',
];

const colors = chroma.scale(
  ['#84F752', '#A54AF6', '#4AB5F7', '#FE4A4A', '#F7EF4C'],
).mode('lch').colors(tags.length);

const TAG_COLORS = tags.reduce((accum, tag, ii) => ({
  ...accum,
  [tag]: colors[ii],
}), {
  '...': '#4A4A4A',
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  margin-bottom: 18px;
`;

const ProjectTitle = styled.span`
  font-size: 26px;
  display: flex;
  align-items: center;

  @media only screen and (min-width: 768px) {
    font-size: 28px;
  }

  @media only screen and (min-width: 994px) {
    font-size: 32px;
  }
`;

const Decoration = styled.span`
  margin-left: 1pc;
  padding: 4px;
  border-radius: 4px;
  font-size: 8px;
  color: #000;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  background-color: #F7EF4C;
`;

const ProjectDescription = styled.span`
  font-size: 22px;
  font-weight: 300;
  margin-top: 6px;
  color: #EDEDED;

  @media only screen and (min-width: 994px) {
    font-size: 24px;
    font-weight: 100;  
  }
`;

const ProjectSubDescription = styled.span`
  font-size: 18px;
  margin-top: 10px;
  color: #EDEDED;
  font-weight: 300;

  & a {
    text-decoration: underline;
    color: #FFFFFF;
  }

  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media only screen and (min-width: 994px) {
    font-size: 18px;
    font-weight: 100; 
  }
`;

const ProjectTag = styled.span`
  font-size: 14px;
  font-weight: 300;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
  padding-bottom: 2px;
  border-radius: 4px;
  margin-right: 6px;
  display: inline-block;
  margin-top: 10px;

  @media only screen and (min-width: 768px) {
    font-size: 14px;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 6px;
    padding-bottom: 6px;
    border-radius: 6px;
    margin-right: 1pc;
    margin-top: 1pc;
  }
`;

const ProjectEtcTag = styled.button`
  font-size: 6px;
  font-weight: 300;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 3px;
  padding-bottom: 2px;
  border-radius: 4px;
  margin-right: 6px;
  display: inline-block;
  margin-top: 10px;
  textDecoration: none;
  cursor: pointer;
  background-color: transparent;

  @media only screen and (min-width: 768px) {
    font-size: 8px;
    padding-left: 18px;
    padding-right: 18px;
    padding-top: 6px;
    padding-bottom: 6px;
    border-radius: 6px;
    margin-right: 1pc;
    margin-top: 1pc;
  }
`;

const ProjectHeader = styled.a`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
  text-decoration: none;
`;

const DECORATION_TITLE = {
  wip: 'Work in progress',
  new: 'New project',
};

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillList: 'shortSkills',
    };
  }

  render() {
    const {
      longSkills, shortSkills, link, title, decoration, text, description, subDescription,
    } = this.props;
    const { skillList } = this.state;

    let skillElements;
    if (skillList === 'shortSkills') {
      skillElements = shortSkills.map((skill) => {
        const color = TAG_COLORS[skill] ? TAG_COLORS[skill] : '#FFFFFF';
        if (skill === '...') {
          return (
            <ProjectEtcTag
              key={skill}
              style={{
                border: `1px solid ${color}`,
                color,
              }}
              onClick={() => this.setState({ skillList: 'longSkills' })}
            >
              &#9679;&#9679;&#9679;
            </ProjectEtcTag>
          );
        }
        return (
          <ProjectTag
            key={skill}
            style={{
              border: `1px solid ${color}`,
              color,
            }}
          >
            {skill}
          </ProjectTag>
        );
      });
    }
    if (skillList === 'longSkills') {
      skillElements = longSkills.map((skill) => {
        const color = TAG_COLORS[skill] ? TAG_COLORS[skill] : '#FFFFFF';
        return (
          <ProjectTag
            key={skill}
            style={{
              border: `1px solid ${color}`,
              color,
            }}
          >
            {skill}
          </ProjectTag>
        );
      });
    }
    return (
      <Container>
        <ProjectHeader
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ProjectTitle>
            {title}
            {
              decoration ? (
                <Decoration title={DECORATION_TITLE[decoration]}>{decoration}</Decoration>
              ) : null
            }
          </ProjectTitle>
          {link
            ? <ExternalUrl href={link} text={text} />
            : (
              <ExternalUrl
                href="https://mail.google.com/mail/?view=cm&fs=1&to=julia@juliaqiu.com"
                text="request access"
              />
            )}
        </ProjectHeader>
        <ProjectDescription>{description}</ProjectDescription>
        {
          subDescription ? (
            <ProjectSubDescription>{subDescription}</ProjectSubDescription>
          ) : null
        }
        <div>
          {skillElements}
        </div>
      </Container>
    );
  }
}

export default Project;
