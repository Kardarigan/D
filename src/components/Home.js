import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LetterAnimation from './LetterAnimation';

const Home = () => {
  const [letterClass, setLetterClass] = useState('LetterAnimation')
  const helloThere = ['H', 'e', 'l', 'l', 'o', ' ', 't', 'h', 'e', 'r', 'e', '!']
  const darigan = ['I', "'", 'm', ' ', 'D', 'a', 'r', 'i', 'g', 'a', 'n']
  const whoYou = ['w', 'h', 'o', ' ', 'y', 'o', 'u', ' ', 'l', 'o', 'o', 'k', 'i', 'n', 'g', ' ', 'f', 'o', 'r', '.']


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('LetterAnimation-hover');
    }, 6000);
    return () => {
      clearTimeout(timeoutId);
    };

  }, []);

  return (
    <div className="container home">
      <div className="text">
        <h1>
          <LetterAnimation letterClass={letterClass}
            strArray={helloThere}
            idx={11} />
          <br />
          <LetterAnimation letterClass={letterClass}
            strArray={darigan}
            idx={23} />
          <br />
          <LetterAnimation
            letterClass={letterClass}
            strArray={whoYou}
            idx={34}
          />
        </h1>
        <h2><span>Web Developer</span> / <span>Software Engineer</span> / <span>CS Student</span></h2>
        <Link to="/contactMe" className="button">Say Hello</Link>
      </div>
    </div >
  )
}

export default Home