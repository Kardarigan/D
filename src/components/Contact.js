import React, { useEffect, useState, useRef } from 'react'
import Loader from 'react-loaders'
import LetterAnimation from './LetterAnimation'
import emailjs from '@emailjs/browser';



const Contact = () => {
  const [letterClass, setLetterClass] = useState('LetterAnimation');
  const title = ['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e'];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('LetterAnimation-hover');
    }, 6000);
    return () => {
      clearTimeout(timeoutId);
    };

  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
  .sendForm('service_auob6ff', 'template_bnlfr5q', form.current, {
    publicKey: 'jodBKF5Q24e0r_ms3',
  })
  .then(
    () => {
      alert('The Message sent successfully!');
    },
    (error) => {
      alert('Failed to sending Message'+ error.text);
      console.log(error);
    },
  );
  };

  return (
    <>
      <div className="container contact">
        <div className="text">
          <h1>
            <LetterAnimation letterClass={letterClass}
              strArray={title}
              idx={11} />
          </h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, libero? Similique velit libero quis id suscipit cumque, quisquam necessitatibus, adipisci dicta, optio iusto quia officiis odit architecto dolor itaque aspernatur!</p>
          <div className="form">
            <form ref={form} onSubmit={sendEmail}>
              <ul className='list-unstyled'>
                <li className="half">
                  <input type="text" name='name' placeholder='Names...' required />
                </li>
                <li className="half">
                  <input type="email" name='email' placeholder='Email...' required />
                </li>
                <li>
                  <input type="text" name='subject' placeholder='Subject...' required />
                </li>
                <li>
                  <textarea name="message" id="message" placeholder='Message Content...'></textarea>
                </li>
                <li>
                  <input type='submit' className='button' value='Send' />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader import type="line-spin-fade-loader" />
    </>
  )
}

export default Contact