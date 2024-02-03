import { faHandsWash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Home = () => {
  return (
    <div className="container home">
        <div className="text-wrapper">
            <h1>Hello there!<br />I'm Darigan<br />who you looking for.</h1>
            <h2><span>Web Developer</span> / <span>Software Engineer</span> / <span>CS Student</span></h2>
            <button to="/contactMe" className="button">Say Hello</button>
        </div>
    </div>
  )
}

export default Home