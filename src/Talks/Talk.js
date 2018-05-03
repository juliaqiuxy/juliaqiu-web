import React from 'react';
import { Link } from '../Articles/Articles';

import './Talks.css';

const Talk = ({ src, des, link, linkText, title, name }) => (
  <div
    className="Talk-wrapper"
  >
    <div className="Talk-header">
      <span className="Talk-title">
        {name}
      </span>

      <Link link={link} text={linkText} />
    </div>
    <span className="Talk-description">
      {title}
    </span>
    <div className="Talk-gif-wrapper">
      <a
        href="http://bit.ly/2jmkNOu"
        target="blank"
      >
        <img className="Talk-gif" src={src} alt={des} />
      </a>
    </div>
  </div>
);

export default Talk;
