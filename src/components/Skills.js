import React from 'react'
import "./Skills.css"
import Skill from "./Skill"
import Interests from "./Interests"

function Skills() {
  return (
    <>
      <div className="skills">
          <h2 className="h2">Compétences</h2>
            <Skill title="HTML" />
            <Skill title="CSS" />
            <Skill title="JAVASCRIPT" />
            <Skill title="REACT" />
            <Skill title="NODEJS" />
            <Skill title="SQL" />
            <Skill title="RUBY ON RAILS" />
            <Skill title="PHP" />
            <Skill title="C/C++" />
            <Skill title="NGINX" />
            <Skill title="GIT" />
            <Skill title="LINUX" />
            <Skill title="DOCKER" />
      </div>
      <div className="skills">
          <h2 className="h2">Langues</h2>
            <Skill title="Anglais" />
            <Skill title="Espagnol" />
      </div>
      <Interests />
    </>
  )
}

export default Skills