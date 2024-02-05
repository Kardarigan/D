import React, { useEffect, useState } from 'react'
import LetterAnimation from './LetterAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faHtml5, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';


const About = () => {
  const [letterClass, setLetterClass] = useState('LetterAnimation')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('LetterAnimation-hover');
    }, 3000);
    return () => {
      clearTimeout(timeoutId);
    };

  }, []);

  return (
    <>
    <div className="container about">
      <div className="text">
        <h1>
          <LetterAnimation strArray={['W', 'h', 'o', ' ', 'a', 'm', ' ', 'I', '?']}
            letterClass={letterClass}
            idx={11} />
        </h1>
        <p>I'm a Web Developer from Iran. I'm interested in building websites from scratch for people around the world.</p><br />
        <p>In the beginning, I learned coding for building simple websites and terminal apps for automation my life and more for fun.</p><br />
        <p>After a few years, today I'm ready to build real great websites using popular languages and technologies for all the customers.</p>
      </div>
      <div className="cube">
        <div className="cube-spinner">
          <div className="face-1">
            <FontAwesomeIcon icon={faPython} />
          </div>
          <div className="face-2">
            <FontAwesomeIcon icon={faReact} />
          </div>
          <div className="face-3">
            <FontAwesomeIcon icon={faJs} />
          </div>
          <div className="face-4">
            <FontAwesomeIcon icon={faGit} />
          </div>
          <div className="face-5">
            <FontAwesomeIcon icon={faHtml5} />
          </div>
          <div className="face-6">
            <FontAwesomeIcon icon={faCss3} />
          </div>
        </div>
      </div>
    </div>
    <Loader import type="line-spin-fade-loader" />
    </>
  )
}

export default About