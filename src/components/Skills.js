import React, { useEffect, useState } from 'react'
import LetterAnimation from './LetterAnimation';
import Loader from 'react-loaders';

const Skills = () => {
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
      <div className="container skills">
        <div className="text">
          <h1>
            <LetterAnimation strArray={['M', 'y', ' ', 'S', 'k', 'i','l','l','s']}
              letterClass={letterClass}
              idx={11} />
          </h1>
          <p>As a Front End Developer and a Programmer, usualy im building my Projects using multiple Technologies that lead the website to be a Complete website. </p><br />
          <ul className='list-unstyled skills-list'>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Sass</li>
            <li>Pug</li>
            <li>Bootstrap</li>
            <li>Tailwind</li>
            <li>Python</li>
            <li>Django</li>
          </ul>
        </div>
      </div>
      <Loader import type="line-spin-fade-loader" />
    </>
  )
}

export default Skills