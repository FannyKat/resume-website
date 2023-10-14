import React from 'react'
import ComputerIcon from '@mui/icons-material/Computer';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HikingIcon from '@mui/icons-material/Hiking';
import PetsIcon from '@mui/icons-material/Pets';

function interests() {
  return (
    <div className="skills">
      <h2 className="h2">Centres d'intérêts</h2>
      <div className="interests">
        <p><ComputerIcon /> Informatique</p>
        <p><CheckroomIcon /> Couture</p>
        <p><MusicNoteIcon /> Musique</p>
        <p><HikingIcon /> Randonnée</p>
        <p><PetsIcon /> Animaux</p>
      </div>
    </div>
  )
}

export default interests