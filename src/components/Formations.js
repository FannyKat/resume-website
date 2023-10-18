import React from 'react';
import SchoolIcon from '@mui/icons-material/School';

function Formations({ datas }) {
  return (
    <div className="cursus mb3">
      <h2 className="h2">
        <SchoolIcon className="icon" />
        Formations
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
          </div>
        </div>
      ))}
    </div>
  )
}

export default Formations