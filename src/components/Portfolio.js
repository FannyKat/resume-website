import React from 'react'
import "./cursus.css"
import CodeIcon from '@mui/icons-material/Code';

function Portfolio({ datas }) {
  return (
    <div className="cursus mb3">
      <h2 className="h2">
        <CodeIcon className="icon" />
        Portfolio
      </h2>
      <div className="portfolio">
        {datas.map((item) => (
          <div key={item.id} className="portfolio__item">
            <a href={item.url} className="portfolio-links">
              <img src={item.image} alt={item.description} className="portfolio-image" />
            </a>
            <p className="portfolio-title">{item.description}</p>
            <p className="portfolio-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio