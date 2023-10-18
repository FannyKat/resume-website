import React from 'react'
import Interests from "./Interests"
import LanguageIcon from '@mui/icons-material/Language';
import TerminalIcon from '@mui/icons-material/Terminal';

function Skills() {
  return (
    <>
      <div className="skills">
        <h2 className="h2">
          <TerminalIcon className="icon" />
          Compétences
        </h2>
        <div className="dev-skills">
          <p className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="skill-image"/>
            HTML
          </p>

          <p className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="skill-image"/>
            CSS
          </p>
          <p className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg" className="skill-image"/>
            PHP
          </p>
          <p className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" className="skill-image"/>
            DOCKER
          </p>
          <p className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" className="skill-image"/>
            Javascript
          </p>
          <p className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="skill-image"/>
            GIT
          </p>
          <p className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="skill-image"/>
            React
          </p>
          <p className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" className="skill-image"/>
            Node.js
          </p>
          <p className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" className="skill-image"/>
            C/C++
          </p>
          <p className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" className="skill-image"/>
            NGINX
          </p>
          <p className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" className="skill-image"/>
            LINUX
          </p>
          <p className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" className="skill-image"/>
            macOS
          </p>
 
          <p className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" className="skill-image"/>
            Windows
          </p>

          <p className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" className="skill-image"/>
            mySQL
          </p>
          <p className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" className="skill-image"/>
            PostgresSQL
          </p>
          <p className="skill">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg" className="skill-image"/>
            Ruby On Rails
          </p>
        </div>   
      </div>
      <div className="skills">
          <h2 className="h2">
            <LanguageIcon className="icon" />
            Langues
          </h2>
          <div className="grid__row">
            <p className="language">Anglais</p>
            <p className="language">Espagnol</p>
          </div>
      </div>
      <Interests />
    </>
  )
}

export default Skills