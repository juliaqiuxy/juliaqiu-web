import React from 'react';
import './Footer.css';

const Footer = () => (
  <div className="Footer-container">
    <div className="row align-items-center" >
      <div className="col-2 offset-3 col-md-1 offset-md-9">
        <div className="Footer-icon-container">
          <a
            href={'https://mail.google.com/mail/?view=cm&fs=1&to=juliaqiuxy@gmail.com'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span key="mail" className="fa-stack Footer-icon">
              <i
                className="fa fa-circle fa-stack-2x"
              />
              <i
                className="fa fa-envelope fa-stack-1x fa-inverse"
              />
            </span>
          </a>
        </div>
      </div>
      <div className="col-2 col-md-1">
        <div className="Footer-icon-container">
          <a
            href={'https://github.com/juliaqiuxy'}
            target={'_blank'}
          >
            <span key="github" className="fa-stack Footer-icon">
              <i
                className="fa fa-circle fa-stack-2x "
              />
              <i
                className="fa fa-github-alt fa-stack-1x fa-inverse"
              />
            </span>
          </a>
        </div>
      </div>
      <div className="col-2 col-md-1">
        <div className="Footer-icon-container">
          <a
            href="https://www.linkedin.com/in/juliaqiuxy"
            target={'_blank'}
          >
            <span key="linkedin" className="fa-stack Footer-icon">
              <i
                className="fa fa-circle fa-stack-2x"
              />
              <i
                className="fa fa-linkedin fa-stack-1x fa-inverse"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
