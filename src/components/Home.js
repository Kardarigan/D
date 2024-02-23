import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LetterAnimation from './LetterAnimation';
import Loader from 'react-loaders';

const Home = () => {
  const [letterClass, setLetterClass] = useState('LetterAnimation')
  const helloThere = ['H', 'e', 'l', 'l', 'o', ' ', 't', 'h', 'e', 'r', 'e', '!']
  const myName = ['I', "'", 'm', ' ', 'D','a','r','i',,'g','a','n']
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
    <>
    <div className="container home">
      <div className="text">
        <h1>
          <LetterAnimation letterClass={letterClass}
            strArray={helloThere}
            idx={11} />
          <br />
          <LetterAnimation letterClass={letterClass}
            strArray={myName}
            idx={23} />
          <br />
          <LetterAnimation
            letterClass={letterClass}
            strArray={whoYou}
            idx={34}
          />
        </h1>
        <h2><span>Front End Developer</span> / <span>Freelancer</span></h2>
        <Link to="/contactMe" className="button">Say Hello <i className="fa-regular fa-hand-wave"></i></Link>
      </div>
    </div >
    <Loader import type="line-spin-fade-loader" />
    </>
  )
}

export default Home
