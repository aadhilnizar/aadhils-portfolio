import { useEffect, useState } from 'react';

import Loader from 'react-loaders';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import LogoTitle from '../../assets/images/logo-s.png';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const isMobile = useMediaQuery({ maxWidth: 768 }); // Detect mobile screen

  const nameArray = 'adhil'.split('');
  const jobArray = 'Web Developer (Full Stack)|Frontend Dev | Freelancer'.split('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="Aadhil N J" className="logo-title" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>
            Engineering Robust Backends | Deploying Intelligent Systems | Building
            Scalable Applications
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>

        {/* Conditionally render Logo for larger screens */}
        {!isMobile && <Logo />}
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;