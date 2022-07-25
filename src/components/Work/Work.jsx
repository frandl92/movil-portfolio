import { faAngular, faJsSquare, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import './Work.scss'

const Work = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
      <>
    <div className="work-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
            idx={15}
          />
        </h1>
        <p>
          The projects of Angular and React, has a back built by me with NodeJs.
        </p>
      </div>
      <div className="icons-work">
        <div className="projects">
       <a target="_blank" rel="noreferrer" href='https://front-pets.vercel.app/'>
          <FontAwesomeIcon icon={faAngular} color="#DD0031" />
          </a>
        </div>
        <div className="projects">
        <a target="_blank" rel="noreferrer" href='https://github.com/frandl92/Proyecto-Final-Cromos'>
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
          </a>
        </div>
        <div className="projects">
        <a target="_blank" rel="noreferrer" href='https://github.com/frandl92/Crea-tu-Pokedex'>
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </a>
        </div>
        <div className="projects">
        <a target="_blank" rel="noreferrer" href='https://github.com/JoseUH/FrontChechaval'>
          <FontAwesomeIcon icon={faNodeJs} color="#68a063" />
          </a>
        </div>
      </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Work
