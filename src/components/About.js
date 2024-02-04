import React, { useEffect, useState } from 'react'
import LetterAnimation from './LetterAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGit, faHtml5, faJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';


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
    <div className="container about">
      <div className="text">
        <h1>
          <LetterAnimation strArray={['W', 'h', 'o', ' ', 'a', 'm', ' ', 'I', '?']}
            letterClass={letterClass}
            idx={11} />
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Deleniti ea at voluptatem aspernatur tenetur, fugiat ad rem
          eius saepe consequuntur ipsa suscipit quis? Debitis, expedita
          dolor voluptate quas eius ea.</p><br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Deleniti ea at voluptatem aspernatur tenetur, fugiat ad rem
          eius saepe consequuntur ipsa suscipit quis? Debitis, expedita
          dolor voluptate quas eius ea.</p><br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Deleniti ea at voluptatem aspernatur tenetur, fugiat ad rem
          eius saepe consequuntur ipsa suscipit quis? Debitis, expedita
          dolor voluptate quas eius ea.</p>
      </div>
      <div className="cube">
        <div className="cube-spinner">
          <div className="face-1">
            <FontAwesomeIcon icon={faPython} />
          </div>
          <div className="face-2">
            <FontAwesomeIcon icon={faJs} />
          </div>
          <div className="face-3">
            <FontAwesomeIcon icon={faReact} />
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
  )
}

export default About