import React from 'react'
import PropTypes from 'prop-types'

import { StyledHeroImage } from '../styles/StyledHeroImage'

function HeroImage({ image, title, text }) {
  return (
    <div
      style={{
        background: 'var(--darkGrey)',
        borderTop: '1px solid var(--medGrey)',
        borderBottom: '1px solid var(--medGrey)',
      }}
    >
      <StyledHeroImage image={image}>
        <div className='hrtoimzge-content'>
          <div className='heroimage-text'>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      </StyledHeroImage>
    </div>
  )
}

export default HeroImage
