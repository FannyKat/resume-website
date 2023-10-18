import React from 'react'
import "./User.css"
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import CakeIcon from '@mui/icons-material/Cake';
import PlaceIcon from '@mui/icons-material/Place';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function User() {
  return (
    <div className="user">
        <img src="./images/cvpic.JPG" alt="" className="user__avatar" />
        <h1 className="user__name">Fanny Catusse</h1>
        <p className="user__profession">Développeuse Web</p>
        <div className="user__infos">
            <p className="user__info">
                <PlaceIcon /> Paris
            </p>
            <a href="tel:+33643432323" className="user__info">
                <PhoneIcon /> 0143432323
            </a>
            <a href="mailto:fannykatusse@gmail.com" className="user__info">
                <MailIcon /> fannykatusse@gmail.com
            </a>
            <p className="user__info">
                <CakeIcon /> 27 ans
            </p>
            <a href="https://github.com/FannyKat" className="user__info">
                <GitHubIcon /> github.com/FannyKat
            </a>
            <a href="https://www.linkedin.com/in/fanny-catusse-2111081a8/" className="user__info">
                <LinkedInIcon /> Linkedin
            </a>
        </div>
    </div>
  )
}

export default User