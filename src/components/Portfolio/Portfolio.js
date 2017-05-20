import React from 'react';
import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';
import flipButtonLeft from './flipButtonLeft.svg';
import './Portfolio.css';

const Portfolio = ({ onChangeCard }) => {
  const PortfolioFlipButton = () => (
    <div className="FlipButton-container">
      <div className="row">
        <a
          className="col-1"
          onClick={() => onChangeCard(undefined)}
        >
          <div className="FlipButton-IconContainer">
            <img alt="flip button" src={flipButtonLeft} />
          </div>
        </a>
      </div>
    </div>
  );
  return (
    <div className="Portfolio-container">
      <PortfolioFlipButton />
      <Footer />
    </div>
  );
};

export default Portfolio;
