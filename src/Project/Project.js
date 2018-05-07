import React, { Component } from 'react';
import { Link } from '../Articles/Articles';
import './Project.css';

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
};
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
            <span
              className="Project-tag Project-etc"
              style={{
                border: `1px solid ${color}`,
                color,
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              onClick={() => this.setState({ skillList: 'longSkills' })}
            >
              &#9679;&#9679;&#9679;
            </span>
          );
        }
        return (
          <span
            key={skill}
            className="Project-tag"
            style={{
              border: `1px solid ${color}`,
              color,
            }}
          >
            {skill}
          </span>
        );
      });
    }
    if (this.state.skillList === 'longSkills') {
      skillElements = this.props.longSkills.map((skill) => {
        const color = TAG_COLORS[skill] ? TAG_COLORS[skill] : '#FFFFFF';
        return (
          <span
            key={skill}
            className="Project-tag"
            style={{
              border: `1px solid ${color}`,
              color,
            }}
          >
            {skill}
          </span>
        );
      });
    }
    return (
      <div className="Project-container">
        <a
          className="Project-header"
          href={this.props.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            textDecoration: 'none',
          }}
        >
          <span className="Project-title">{this.props.title}</span>
          {this.props.link ?
            <Link link={this.props.link} text={this.props.text} /> :
            <Link
              link="https://mail.google.com/mail/?view=cm&fs=1&to=julia@juliaqiu.com"
              text="request access"
            />
          }
        </a>
        <span className="Project-description">{this.props.description}</span>
        {
          this.props.subDescription ? (
            <span className="Project-subDescription">{this.props.subDescription}</span>
          ) : null
        }
        <div className="Project-skills">
          {skillElements}
        </div>
      </div>
    );
  }
}

export default Project;
