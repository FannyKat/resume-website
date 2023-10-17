import React from 'react'
import ComputerIcon from '@mui/icons-material/Computer';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import HikingIcon from '@mui/icons-material/Hiking';
import PetsIcon from '@mui/icons-material/Pets';
import HandymanIcon from '@mui/icons-material/Handyman';

function interests() {
  return (
    <div className="skills">
      <h2 className="h2">Centres d'intérêts</h2>
      <div className="grid__column">
        <p className="user__info"><ComputerIcon /> Informatique</p>
        <p>Programmation d'un shell interactif (langage C),
        Installation d'un système Archlinux</p>
        <p className="user__info"><CheckroomIcon /> Couture</p>
        <p>Création de vêtements, bénévolat aux ateliers dans les centres sociaux</p>
        <p className="user__info"><MusicNoteIcon /> Musique</p>
        <p>6 ans de conservatoire, Danse classique, Guitare, Solfège, Chant</p>
        <p className="user__info"><HikingIcon /> Randonnée</p>
        <p>Voyages et escapades en nature</p>
        <p className="user__info"><PetsIcon /> Animaux</p>
        <p>Woofing dans un refuge de 150 animaux domestiques et sauvages</p>
        <p className="user__info"><HandymanIcon /> Bricolage</p>
        <p>Création de meubles et rénnovation d'appartements</p>
      </div>
    </div>
  )
}

export default interests