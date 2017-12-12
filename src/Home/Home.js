import React from 'react';
import ProjectList from '../ProjectList/ProjectList';
import OpenSource from '../OpenSource/OpenSource';
import Footer from '../Footer/Footer';
import Article from '../Articles/Articles';
import Contact from '../Contact/Contact';

import logo from '../images/logo-holiday.svg';

import './Home.css';

const Home = () => (
  <div className="Home-container">
    <div className="Home-logo-container">
      <img src={logo} alt="Julia" />
    </div>
    <div className="Home-content">
      <Article />
      <OpenSource />
      <ProjectList />
      <Contact />
    </div>
    <Footer />
  </div>
);

export default Home;
