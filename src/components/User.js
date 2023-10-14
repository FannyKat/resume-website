import React from 'react'
import "./User.css"
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import CakeIcon from '@mui/icons-material/Cake';
import PlaceIcon from '@mui/icons-material/Place';
import GitHubIcon from '@mui/icons-material/GitHub';

function User() {
  return (
    <div className="user">
        <img src="./images/cvpic.JPG" alt="" className="user__avatar" />
        <h1 className="user__name">Fanny Catusse</h1>
        <p className="user__profession">Développeuse Web</p>
        <div className="user__infos">
            <p className="user__info">
                <PlaceIcon /> Paris</p>
            <p className="user__info">
                <a href="tel:+33643432323">
                    <PhoneIcon /> 0643432323
                </a>
            </p>
            <p className="user__info">
                <a href="mailto:fannykatusse@gmail.com">
                    <MailIcon /> fannykatusse@gmail.com
                </a>
            </p>
            <p className="user__info">
                <CakeIcon /> 23 Fevrier 1996
            </p>
            <p className="user__info">
                <a href="https://github.com/FannyKat">
                    <GitHubIcon /> https://github.com/FannyKat
                </a>
            </p>
        </div>
    </div>
  )
}

export default User