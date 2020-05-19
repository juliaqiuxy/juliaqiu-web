import React from 'react';
import styled from 'styled-components';

import Greeting from '../Greeting/Greeting';
import ProjectList from '../ProjectList/ProjectList';
import OpenSource from '../OpenSource/OpenSource';
import Talks from '../Talks/Talks';
import Footer from '../Footer/Footer';
import Article from '../Articles/Articles';
import Contact from '../Contact/Contact';
import SmartLogo from './SmartLogo';

const Container = styled.div`
  flex: 1;
  background-color: #0d0e14;
  color: #ffffff;

  @media only screen and (min-width: 768px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  & > img:first-of-type {
    height: 60px;
  }
`;

const HeaderContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  & img {
    height: 60px;
  }

  @media only screen and (min-width: 768px) {
    padding: 2pc;
    padding-bottom: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & img {
      height: 100px;
    }
  }
`;

const HomeContent = styled.div`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  flex: 1;
  padding-left: 20px;
  padding-right: 20px;
  animation-name: fadeIn;
  animation-duration: 5s;
  animation-timing-function: ease-out;

  @media only screen and (min-width: 768px) {
    margin-top: 24px;
    width: 80%;
    margin-bottom: 62px;
  }

  @media only screen and (min-width: 1200px) {
    width: 60%;
    max-width: 720px;
    margin-bottom: 62px;
  }
`;

const HomeCalendlyLink = styled.a`
  margin-top: 1pc;
  font-weight: 300;
  font-size: 18px;

  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const openCalendly = () => {
  // eslint-disable-next-line no-undef
  window.Calendly.initPopupWidget({ url: 'https://calendly.com/juliaqiuxy/contact-me' });
};

const Home = () => (
  <Container>
    <HeaderContainer>
      <SmartLogo />
      <HomeCalendlyLink
        href=""
        onClick={(evt) => {
          evt.preventDefault();
          openCalendly();
          return false;
        }}
      >
        Want to meet over coffee?
      </HomeCalendlyLink>
    </HeaderContainer>
    <HomeContent>
      <Greeting />
      <OpenSource />
      <Talks />
      <Article />
      <ProjectList />
      <Contact />
    </HomeContent>
    <Footer />
  </Container>
);

export default Home;
