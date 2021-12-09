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
import ThemeToggle from './ThemeToggle';

import * as calendly from '../../lib/calendly';

const Container = styled.div`
  flex: 1;

  @media only screen and (min-width: 768px) {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

  @media only screen and (min-width: 768px) {
    padding: 2pc;
    padding-bottom: 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  & svg {
    height: 88px;
    color: var(--juliadev-fg);
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
  color: var(--juliadev-fg);

  @media only screen and (min-width: 768px) {
    margin-top: 0;
  }
`;

const ThemeToggleContainer = styled.div`
  position: absolute;
  top: 20px;
  right: calc(20px + 8px);

  @media only screen and (min-width: 768px) {
    position: fixed;
    top: unset;
    bottom: 20px;
    left: 20px;
    z-index: 1;
  }
`;

const Home = () => (
  <Container>
    <HeaderContainer>
      <LogoContainer>
        <SmartLogo />
      </LogoContainer>
      <HomeCalendlyLink
        href=""
        onClick={async (evt) => {
          evt.preventDefault();

          await calendly.load();
          calendly.initPopupWidget(
            { url: 'https://calendly.com/juliaqiuxy/contact-me' },
          );

          return false;
        }}
      >
        Want to meet over coffee?
      </HomeCalendlyLink>
      <ThemeToggleContainer>
        <ThemeToggle />
      </ThemeToggleContainer>
    </HeaderContainer>
    <HomeContent>
      <Greeting />
      <ProjectList />
      <Talks />
      <OpenSource />
      <Article />
      <Contact />
    </HomeContent>
    <Footer />
  </Container>
);

export default Home;
