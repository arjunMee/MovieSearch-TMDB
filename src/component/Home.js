import React, { useState } from 'react'
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  SEARCH_URL,
  POPULAR_URL,
} from '../config'
import { useFetchMovie } from './hooks/useHomeFetch'

function Home() {
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error,
    },
    fetchMovies,
  ] = useFetchMovie()
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovie = (search) => {
    const endpoint = search ? SEARCH_URL + search : POPULAR_URL

    setSearchTerm(search)
    fetchMovies(endpoint)
  }
  return <>{}</>
}

export default Home
