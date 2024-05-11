import React, { useEffect, useState } from "react"
import LetterAnimation from "./LetterAnimation"
import Loader from "react-loaders"
import { skills } from "./Constans"

const Skills = () => {
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
      <div className="container skills">
        <div className="text">
          <h1>
            <LetterAnimation
              strArray={["M", "y", " ", "S", "k", "i", "l", "l", "s"]}
              letterClass={letterClass}
              idx={11}
            />
          </h1>
          <p className="mt-5 text-justify">
            As a Front End Developer and a Programmer, usualy im building my
            Projects using multiple Technologies that lead the website to be a
            Complete website. although i'm not a Web Designer but i know
            aesthetic and i built everything under principles, exept when i use
            Black color above the normal.
          </p>
          <br />
          <h4>Here are technologies I'm working with:</h4>
          <ul className="list-unstyled skills-list">
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <Loader import type="line-spin-fade-loader" />
    </>
  )
}

export default Skills
