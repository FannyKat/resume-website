import React from 'react'
import "./Portfolio.css"

function Portfolio({ datas }) {
  return (
    <div className="portfolio mb3">
      <h2 className="h2">Portfolio</h2>
      <div className="portfolio-links">
        {datas.map((item) => (
          <div key={item.id} className="portfolio-item">
            <a href={item.url}>
              <img src={item.image} alt={item.description} className="portfolio-image" />
              <p>{item.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio