import { faAngular, faCss3, faGithub, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import "./About.scss"


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])


  return (
    <>
    <div className="about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
        I am a forward-looking, committed, pro-active and persevering person. I have analytical skills and good interpersonal relationships to work in a group.
        </p>
        <p align="LEFT">
         At the beginning of 2022 I decided to turn my life around professionally and finished a Full Stack Developer bootcamp at Upgrade Hub.
        </p>
        <p>
        I like to practice sports, and I have competed professionally in tennis and sailing.
        </p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className="face4">
            <FontAwesomeIcon
              icon={faNodeJs}
              color="#68a063"
            />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
          </div>
        </div>
      </div>
      </div>
      <Loader type="pacman" />
      </>
  )
}

export default About