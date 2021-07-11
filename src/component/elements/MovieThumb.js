import React from 'react'

import { StyledMovieThumb } from '../styles/StyledMovieThumb'

function MovieThumb({ image, movieId, clickabl }) {
  return (
    <StyledMovieThumb>
      {clickabl ? (
        <img className='clickable' src={image} alt='moviethumb' />
      ) : (
        <img src={image} alt='moviethumb' />
      )}
    </StyledMovieThumb>
  )
}

export default MovieThumb
