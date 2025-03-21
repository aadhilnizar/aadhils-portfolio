import { useEffect, useState } from 'react'

import Loader from 'react-loaders'

import WordCloud from './wordcloud'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            I specialize in building dynamic and responsive web applications
            using Angular, HTML5, CSS3, and TypeScript, with a strong focus on
            crafting seamless UI/UX experiences. On the backend, I have hands-on
            experience with Node.js, Express.js, and RESTful API development,
            along with managing databases like MongoDB and MySQL. I'm proficient
            in version control with Git and GitHub
          </p>
          <p>
            With a strong focus on clean code architecture, problem-solving, and
            performance optimization, I strive to write maintainable and
            efficient code. I follow agile development methodologies,
            collaborate effectively with cross-functional teams, and
            continuously explore new technologies to deliver innovative
            solutions that meet business goals and user needs.
          </p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default Skills