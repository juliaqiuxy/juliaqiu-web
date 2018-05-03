import React from 'react';
import { Link } from '../Articles/Articles';

import './Talks.css';

const Talk = ({ src, des, link, linkText, title, event }) => (
  <a
    className="Talk-wrapper"
  >
    <span className="Talk-title">
      {title}
    </span>
    <span className="Talk-description">
      {event}
    </span>
    <div className="Talk-gif-wrapper">
      <img className="Talk-gif" src={src} alt={des} />
    </div>
    <Link link={link} text={linkText} newLine />
  </a>
);

export default Talk;
