import React from 'react';
import ProjectList from '../ProjectList/ProjectList';
import OpenSource from '../OpenSource/OpenSource';
import Talks from '../Talks/Talks';
import Footer from '../Footer/Footer';
import Article from '../Articles/Articles';
import Contact from '../Contact/Contact';
import SmartLogo from './SmartLogo';

import './Home.css';

const Home = () => (
  <div className="Home-container">
    <div className="Home-logo-container">
      <SmartLogo />
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
