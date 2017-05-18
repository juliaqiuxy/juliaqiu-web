import React from 'react';
import logoimage from './logo.svg';
import './Logo.css';

const Logo = () => (
  <div className="Logo-container">
    <div className="row no-gutters justify-content-center align-items-center">
      <figure className="col-6 col-md-4">
        <img className="Logo-img" src={logoimage} alt="Julia" />
      </figure>
    </div>
  </div>
);

export default Logo;
