import React, { useEffect, useState } from "react"
import LetterAnimation from "./LetterAnimation"
import Loader from "react-loaders"

const About = () => {
  const [letterClass, setLetterClass] = useState("LetterAnimation")

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("LetterAnimation-hover")
    }, 3000)
    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      <div className="container about">
        <div className="text">
          <h1>
            <LetterAnimation
              strArray={["W", "h", "o", " ", "a", "m", " ", "I", "?"]}
              letterClass={letterClass}
              idx={11}
            />
          </h1>
          <p className="mt-5 text-justify">
            I'm a Web Developer from somewhere in Iran. I'm interested in
            building websites from scratch for people around the world.
            <br />
            <br />
            In the beginning, I learned coding for building simple websites and
            terminal apps for automation my life and more for fun.
            <br />
            <br />
            After a few years, today I'm ready to build real great websites
            using popular languages and technologies for all the customers.
            <br />
            <br />
          </p>
        </div>

        <div className="cube d-md-flex align-items-center d-none">
          <div className="cube-spinner">
            <div className="face-1">
              <i className="fa-brands fa-python"></i>
            </div>
            <div className="face-2">
              <i className="fa-brands fa-react"></i>
            </div>
            <div className="face-3">
              <i className="fa-brands fa-js"></i>
            </div>
            <div className="face-4">
              <i className="fa-brands fa-git"></i>
            </div>
            <div className="face-5">
              <i className="fa-brands fa-html5"></i>
            </div>
            <div className="face-6">
              <i className="fa-brands fa-css3"></i>
            </div>
          </div>
        </div>
      </div>
      <Loader import type="line-spin-fade-loader" />
    </>
  )
}

export default About
