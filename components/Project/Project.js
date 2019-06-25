import React, { Component } from 'react';
import styled from 'styled-components';

import { Link } from '../Articles/Articles';

const TAG_COLORS = {
  React: '#84F752',
  'React Native': '#A54AF6',
  Redux: '#4AB5F7',
  'node.js': '#F7524A',
  'UI/UX': '#52F7C5',
  VR: '#5252F6',
  PostgreSQL: '#E4B549',
  Koa: '#9145F5',
  Knex: '#41A6F4',
  Unity: '#F7EF4C',
  '...': '#4A4A4A',
  'Bootstrap Grid': '#FF6F42',
  'Google Cardboard': '#2D9095',
  Oculus: '#F74AB5',
  '3D': '#FB5371',
  'C#': '#7352F7',
  'Interaction Design': '#F6A54A',
  Illustration: '#5284F7',
  'After Effects': '#4CF799',
  'Motion Graphics': '#C6E449',
  DynamoDB: '#F9B519',
  Apollo: '#FB5371',
  GraphQL: '#F7EF4C',
  'AWS SES': '#F74AB5',
  PHP: '#2D9095',
  TypeScript: '#007ACC',
  'Next.js': '#CC0088',
};

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

const WIP = styled.span`
  margin-left: 1pc;
  padding: 4px;
  border-radius: 4px;
  font-size: 8px;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  background-color: #F7EF4C;
`;

const ProjectDescription = styled.span`
  font-size: 22px;
  font-weight: 300;
  margin-top: 6px;
  color: #EDEDED;

  @media only screen and (min-width: 768px) {
    font-size: 22px;
  }

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
`;

class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      skillList: 'shortSkills',
    };
  }

  render() {
    let skillElements;
    if (this.state.skillList === 'shortSkills') {
      skillElements = this.props.shortSkills.map((skill) => {
        const color = TAG_COLORS[skill] ? TAG_COLORS[skill] : '#FFFFFF';
        if (skill === '...') {
          return (
            <ProjectEtcTag
              style={{
                border: `1px solid ${color}`,
                color,
                textDecoration: 'none',
                cursor: 'pointer',
                backgroundColor: 'transparent',
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
    if (this.state.skillList === 'longSkills') {
      skillElements = this.props.longSkills.map((skill) => {
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
          href={this.props.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
          }}
        >
          <ProjectTitle>
            {this.props.title}
            {
              this.props.wip ? (
                <WIP title="Work in progress">WIP</WIP>
              ) : null
            }
          </ProjectTitle>
          {this.props.link
            ? <Link link={this.props.link} text={this.props.text} />
            : (
              <Link
                link="https://mail.google.com/mail/?view=cm&fs=1&to=julia@juliaqiu.com"
                text="request access"
              />
            )
          }
        </ProjectHeader>
        <ProjectDescription>{this.props.description}</ProjectDescription>
        {
          this.props.subDescription ? (
            <ProjectSubDescription>{this.props.subDescription}</ProjectSubDescription>
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
