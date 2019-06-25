import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 44px;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
  box-sizing: border-box;

  background-image: linear-gradient(to right, #9B9B9B 50%, transparent 50%), linear-gradient(to right, #9B9B9B 50%, transparent 50%);
  background-position: left top, left bottom;
  background-repeat: repeat-x, repeat-x;
  background-size: 20px 1px, 20px 1px;

  @media only screen and (min-width: 768px) {
    align-items: center;

    background-image: linear-gradient(to right, #9B9B9B 50%, transparent 50%), linear-gradient(to right, #9B9B9B 50%, transparent 50%), linear-gradient(to bottom, #9B9B9B 50%, transparent 50%), linear-gradient(to bottom, #9B9B9B 50%, transparent 50%);
    background-position: left top, left bottom, left top, right top;
    background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
    background-size: 20px 1px, 20px 1px, 1px 20px, 1px 20px;
  }
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

const ContactTag = styled.span`
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
  border: 1px solid #FFFFFF;
  color: #FFFFFF;

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

const openCalendly = () => {
  // eslint-disable-next-line no-undef
  window.Calendly.initPopupWidget({ url: 'https://calendly.com/juliaqiuxy/contact-me' });
};

/* eslint-disable jsx-a11y/anchor-is-valid */
const ContactItem = () => (
  <Container>
    <ProjectTitle>Are you the next unicorn?</ProjectTitle>
    <ProjectDescription>Feel free to reach out!</ProjectDescription>
    <ProjectSubDescription>
      {'Email me at '}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=julia@juliaqiu.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        julia@juliaqiu.com
      </a>
      {' '}
      or
      {' '}
      <a
        href=""
        onClick={(evt) => {
          evt.preventDefault();
          openCalendly();
          return false;
        }}
      >
        schedule a call
      </a>
      .
    </ProjectSubDescription>
    <ProjectSubDescription>
      {'Add me on ' }
      <a
        href="https://www.linkedin.com/in/juliaqiuxy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
.
      {' Follow my work on '}
      <a
        href="https://github.com/juliaqiuxy"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
.
    </ProjectSubDescription>
    <div>
      <ContactTag>
        Your
      </ContactTag>
      <ContactTag>
        Tech
      </ContactTag>
      <ContactTag>
        Stack
      </ContactTag>
    </div>
  </Container>
);
/* eslint-enable */

const Contact = () => (
  <div>
    <ContactItem />
  </div>
);

export default Contact;
