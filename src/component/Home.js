import styled from 'styled-components'

import React, { useState } from 'react'
import HeroImage from './elements/HeroImage'
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

// ========================

const StyledSpinner = styled.div`
  border: 5px solid #f3f3f3;
  border-top: 5px solid red;
  border-radius: 50%;
  width: 50px;
  heigh: 50px;
  animation: spin 0.8s liner infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

// =========================

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

  if (error) return <div>Somethig went wrong</div>
  if (!movies[0]) return <StyledSpinner />

  return (
    <>
      {!searchTerm && (
        <HeroImage
          image={`${IMAGE_BASE_URL}/${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
      )}
    </>
  )
}

export default Home
