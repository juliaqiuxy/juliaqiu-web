import React from 'react';
import Logo from '../Logo/Logo';
import Footer from '../Footer/Footer';
import Bubbles from '../Bubbles/Bubbles';
import flipButton from './flipButton.svg';
import './Home.css';

const Home = ({ onChangeCard }) => {
  return (
    <div
      className="Home-container"
    >
      <Bubbles min="75" max="90" />
      <Logo />
      <Footer />
    </div>
  );
};

export default Home;
// const HomeFlipButton = () => (
//   <div className="FlipButton-container">
//     <div className="row">
//       <a
//         className="col-1 offset-11"
//         onClick={() => onChangeCard('portfolio')}
//       >
//         <div className="FlipButton-IconContainer">
//           <img alt="flip button" src={flipButton} />
//         </div>
//       </a>
//     </div>
//   </div>
// );
// <HomeFlipButton onChangeCard={onChangeCard} />

// onClick={() => onChangeCard('portfolio')}
