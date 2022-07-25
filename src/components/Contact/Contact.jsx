import React, { useEffect, useRef, useState } from 'react'
import './Contact.scss'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    console.log(e.target)
    emailjs
      .sendForm(
        'service_l1x6a7h',
        'template_g1nzqoh',
        form.current,
        'xhEpwc113UKga91mJ'
      )
      .then(
        (result) => {
          console.log(result.text)
          e.target.reset()
          alert('Ready to go')
        },
        (error) => {
          console.log(error.text)
          alert('Something went wrong')
        }
      )
  }
  return (
    <>
      <div className="contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am looking for a role in established IT company with the
            opportunity to work with the latest technologies on challenging and
            diverse projects.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    id="name"
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Send" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
