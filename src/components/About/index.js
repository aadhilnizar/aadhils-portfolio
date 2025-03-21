/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

import {
  faAngular,
  faBootstrap,
  faGitAlt,
  faJsSquare,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons';
import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';

import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const About = () => {
  const aboutArray = 'About Me'.split('');

  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            I’m a Full Stack Engineer with expertise in building dynamic and scalable web applications.
            I specialize in both front-end and back-end development, with a focus on creating seamless user experiences and efficient system architectures.
            With hands-on experience in modern frameworks like Angular and robust backend technologies, I thrive in solving complex problems and delivering high-quality solutions.
            I'm driven by continuous learning and innovation to create impactful digital products.
          </p>
          <p>
            I’m always eager to explore new technologies, enhance my skills, and collaborate with creative minds to build impactful products that solve real-world problems.
            My goal is to continuously grow as a developer while delivering high-quality software solutions that make a difference.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAngular} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faLeaf} color="#47A248" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faBootstrap} color="#563d7c" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default About;