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

function Home() {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch()
  return (
    <>
      <HeroImage />
      <SearchBar />
      <Grid />
      <MovieThumb />
      <LoadMoreBtn />
      <Spinner />
    </>
  )
}

export default Home
