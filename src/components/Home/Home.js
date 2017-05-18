import React from 'react';
import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';
import Bubbles from '../Bubbles/Bubbles';
import './Home.css';

const Home = () => (
  <div className="Home-container">
    <Bubbles min="75" max="90" />
    <Logo />
    <Footer />
  </div>
);

export default Home;
