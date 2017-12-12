import React from 'react';
import './Footer.css';
import heart from '../images/heart.svg';
import unicorn from '../images/unicorn.svg';

const Footer = () => {
  const backgroundColor = '#0D0E14';
  return (
    <div
      className="Footer-wrapper"
      style={{
        backgroundColor,
      }}
    >
      <div className="Footer-text-container">
        <span className="Footer-text">
          © Julia Qiu. All rights reserved. Made with
          <img
            className="Footer-heart"
            alt="heart"
            src={heart}
          />
          in San Francisco.
        </span>
      </div>
      <img
        className="Footer-graph"
        src={unicorn}
        alt="unicorn"
      />
    </div>
  );
};

export default Footer;
