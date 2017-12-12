import React from 'react';
import { Link } from '../Articles/Articles';
import './Project.css';

const TAG_COLORS = {
  React: '#84F752',
  'React Native': '#A54AF6',
  Redux: '#4AB5F7',
  'node.js': '#F7524A',
  'UI/UX': '#E4B549',
  VR: '#5252F6',
  Unity: '#F7EF4C',
  '...': '#4A4A4A',
};

const Project = ({ title, description, subDescription, shortSkills, link, text }) => {
  let skillElements;
  if (shortSkills) {
    skillElements = shortSkills.map((skill) => {
      const color = TAG_COLORS[skill] ? TAG_COLORS[skill] : '#FFFFFF';
      if (skill === '...') {
        return (
          <span
            className="Project-tag Project-etc"
            style={{
              border: `1px solid ${color}`,
              color,
            }}
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

  return (
    <div className="Project-container">
      <a
        className="Project-header"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
        }}
      >
        <span className="Project-title">{title}</span>
        {link ?
          <Link link={link} text={text} /> :
          <Link
            link="https://mail.google.com/mail/?view=cm&fs=1&to=julia@juliaqiu.com"
            text="Request Access"
          />
        }
      </a>
      <span className="Project-description">{description}</span>
      <span className="Project-subDescription">{subDescription}</span>
      <div className="Project-skills">
        {skillElements}
      </div>
    </div>
  );
};

export default Project;
