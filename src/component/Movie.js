import React from 'react'
import Navigation from './elements/Navigation'
import MovieInfoBar from './elements/MovieInfoBar'
import MovieInfo from './elements/MovieInfo'
import Actor from './elements/Actor'
import Spinner from './elements/Spinner'
import Grid from './elements/Grid'

import { useMovieFetch } from './hooks/useMovieFetch'

function Movie({ movieId }) {
  const [movie, loading, error] = useMovieFetch(movieId)

  if (error) return <div>something went wrong...</div>
  if (loading) return <Spinner />
  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo movie={movie} />
      <MovieInfoBar />
      <Grid>
        <Actor />
      </Grid>
    </>
  )
}

export default Movie
