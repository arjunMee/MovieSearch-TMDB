import React, { useState, useEffect } from 'react'
import HeroImage from './elements/HeroImage'
import SearchBar from './elements/SearchBar'
import Grid from './elements/Grid'
import MovieThumb from './elements/MovieThumb'
import LoadMoreBtn from './elements/LoadMoreBtn'
import Spinner from './elements/Spinner'

import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  SEARCH_URL,
  POPULAR_URL,
} from '../config'

import { useHomeFetch } from './hooks/useHomeFetch'
import noImage from './image/no_image.jpg'

function Home() {
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error,
    },
    fetchMovies,
  ] = useHomeFetch()
  const [searchTerm, setSearchTerm] = useState('')

  if (!movies[0]) return <Spinner />
  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}/${BACKDROP_SIZE}${heroImage.backdrop_path}`}
        title={heroImage.original_title}
        text={heroImage.overview}
      />
      <SearchBar />
      <Grid header={searchTerm ? 'Search Term' : 'Popular Movies'}>
        {movies.map((movie) => (
          <MovieThumb
            key={movie.id}
            clickabl
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}/${POSTER_SIZE}${movie.poster_path}`
                : noImage
            }
            movieId={movie.id}
            movieNAme={movie.original_title}
          />
        ))}
      </Grid>
      <MovieThumb />
      <LoadMoreBtn />
      <Spinner />
    </>
  )
}

export default Home
