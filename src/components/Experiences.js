import React from 'react';
import WorkIcon from '@mui/icons-material/Work';

function Experiences({ datas }) {
  return (
    <div className="cursus mb3">
      <h2 className="h2">
        <WorkIcon className="icon" />
        Expériences professionnelles
      </h2>
      {datas.map(item => (
        <div className="grid__row" key={item.id}>
          <div className="grid__item">
            <p className="grid__date" >{item.date}</p>
            <p className="grid__location">{item.location}</p>
          </div>
          <div className="grid__item">
            <h3 className="grid__title">{item.title}</h3>
            <p className="grid__text">{item.text}</p>
            <ul className="grid__missions">
              {item.missions.map(mission => (
                <li className="grid_mission" key={mission.id}>{mission.title}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Experiences