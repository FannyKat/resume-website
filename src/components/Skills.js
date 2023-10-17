import React from 'react'
import Interests from "./Interests"

function Skills() {
  return (
    <>
      <div className="skills">
          <h2 className="h2">Compétences</h2>
          <div className="grid__row">
            <p className="grid__item">HTML</p>
            <p className="grid__item">CSS</p>
            <p className="grid__item">JAVASCRIPT</p>
            <p className="grid__item">REACT</p>
            <p className="grid__item">NODEJS</p>
            <p className="grid__item">SQL</p>
            <p className="grid__item">RUBY ON RAILS</p>
            <p className="grid__item">PHP</p>
            <p className="grid__item">C/C++</p>
            <p className="grid__item">NGINX</p>
            <p className="grid__item">LINUX</p>
            <p className="grid__item">DOCKER</p>
          </div>
      </div>
      <div className="skills">
          <h2 className="h2">Langues</h2>
          <div className="grid__row">
            <p className="grid__item">Anglais</p>
            <p className="grid__item">Espagnol</p>
          </div>
      </div>
      <Interests />
    </>
  )
}

export default Skills