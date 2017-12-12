import React from 'react';
import './Contact.css';

const ContactItem = () => (
  <div className="ContactItem-container dashed-gradient">
    <span className="Project-title">Are you the next unicorn?</span>
    <span className="Project-description">{'Feel free to reach out!'}</span>
    <span className="Project-subDescription">
      {'Email me at '}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=julia@juliaqiu.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        julia@juliaqiu.com
      </a>
    </span>
    <span className="Project-subDescription">
      {'Add me on ' }
      <a
        href="https://www.linkedin.com/in/juliaqiuxy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>.
      {' Follow my work on '}
      <a
        href="https://github.com/juliaqiuxy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>.
    </span>
    <div className="Project-skills">
      <span
        className="Project-contact-tag Project-tag"
      >
        Your
      </span>
      <span
        className="Project-contact-tag Project-tag"
      >
        Tech
      </span>
      <span
        className="Project-contact-tag Project-tag"
      >
        Stack
      </span>
    </div>
  </div>
);

const Contact = () => (
  <div className="Contact-container">
    <ContactItem />
  </div>
);

export default Contact;
