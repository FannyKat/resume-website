import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Profil() {
  return (
    <div className="profil mb5">
      <h2 className="h2">
        <AccountCircleIcon className="icon" />
        Profil
      </h2>
      <p>
        Actuellement à la recherche d'un poste en tant que développeuse Web Fullstack.
        Je travaille en autodidacte sur un projet personnel; une application web full Ruby On Rails. <br />
        Mon intérêt est de trouver une entreprise utilisant les langages qui me correspondent. Cependant je me donnerai à coeur joie pour découvrir et apprendre de nouvelles technologies. <br />
      </p>
    </div>
  )
}

export default Profil