import React, { useState, useEffect } from 'react'
import HeroImage from './elements/HeroImage'
import SearchBar from './elements/SearchBar'
import Grid from './elements/Grid'
import MovieThumb from './elements/MovieThumb'
import LoadMoreBtn from './elements/LoadMoreBtn'
import Spinner from './elements/Spinner'

import {
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

  const searchMovies = (search) => {
    const endpoint = search ? SEARCH_URL + search : POPULAR_URL

    setSearchTerm(search)
    fetchMovies(endpoint)
  }

  const loadMoreMovies = () => {
    const searchEndPoint = `${SEARCH_URL}${searchTerm}&page=${currentPage + 1}`
    const popularEndPoint = `${POPULAR_URL}&page=${currentPage + 1}`

    const endpoint = searchTerm ? searchEndPoint : popularEndPoint

    fetchMovies(endpoint)
  }

  if (!movies[0]) return <Spinner />
  return (
    <>
      {!searchTerm && (
      <HeroImage
          image={`${IMAGE_BASE_URL}/${BACKDROP_SIZE}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
      )}
      <SearchBar callback={searchMovies} />
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

      <LoadMoreBtn />
      {loading && <Spinner />}
      {/* will disappear if no more page left */}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text='Load More' callback={loadMoreMovies} />
      )}
    </>
  )
}

export default Home
