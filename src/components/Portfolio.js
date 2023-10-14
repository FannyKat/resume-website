import React from 'react'
import { LinkPreview } from '@dhaiwat10/react-link-preview';

function Portfolio() {
  return (
    <div className="cursus mb3">
      <h2 className="h2">Portfolio</h2>
      <div className="portfolio">
        <LinkPreview url='https://www.art-coma.fr/' width='400px' />
      </div>
    </div>
  )
}

export default Portfolio