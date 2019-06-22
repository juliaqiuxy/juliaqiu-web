import React from 'react';
import ProjectList from '../ProjectList/ProjectList';
import OpenSource from '../OpenSource/OpenSource';
import Talks from '../Talks/Talks';
import Footer from '../Footer/Footer';
import Article from '../Articles/Articles';
import Contact from '../Contact/Contact';
import SmartLogo from './SmartLogo';

import './Home.css';

const openCalendly = () => {
  window.Calendly.initPopupWidget({ url: 'https://calendly.com/juliaqiuxy/quick-intro' });
}

const Home = () => (
  <div className="Home-container">
    <div className="Home-header-container">
      <SmartLogo />
      <a
        className="Home-calendly-link"
        href=""
        onClick={(evt) => { 
          evt.preventDefault();
          openCalendly(); 
          return false;
        }}
      >
        Want to meet over coffee?
      </a>
    </div>
    <div className="Home-content">
      <OpenSource />
      <Talks />
      <Article />
      <ProjectList />
      <Contact />
    </div>
    <Footer />
  </div>
);

export default Home;
