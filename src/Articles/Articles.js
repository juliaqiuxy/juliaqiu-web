import React from 'react';
import Category from '../Category/Category';
import linkIcon from '../images/link.svg';
import lock from '../images/lock.svg';

import './Articles.css';

export const Link = ({ text, link, newLine }) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      textDecoration: 'none',
      display: 'block',
      marginTop: newLine ? '2pc' : 0,
    }}
  >
    <span className="Articles-link">{text}</span>
    {
      text === 'request access' ?
        <img src={lock} alt="lock" /> :
        <img src={linkIcon} alt="link" />
    }
  </a>
);

const Articles = () => (
  <div className="Articles-container">
    <Category category="Articles" />
    <a
      href="https://hackernoon.com/learning-how-to-code-one-email-at-a-time-347f1f2d318d"
      target="_blank"
      rel="noopener noreferrer"
      className="Articles-item"
    >
      Learning how to code one email at a time
    </a>
    <Link newLine text="More on Medium" link="https://medium.com/@juliaqiuxy" />
  </div>
);

export default Articles;
