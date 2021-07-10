import { useState, useEffect } from 'react'
import { POPULAR_URL } from '../../config'

export const useFetchMovie = () => {
  const [state, setState] = useState({ movies: [] })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchMovie = async (endpoint) => {
    setError(false)
    setLoading(true)

    const isLoadMore = endpoint.search('page')

    try {
      const result = await (await fetch(endpoint)).json()

      setState((prev) => ({
        ...prev,
        movies:
          isLoadMore !== -1
            ? [...prev.movies, ...result.results]
            : [...result.results],
        heroImage: prev.heroImage || result.results[0],
        currentPage: result.page,
        totalPages: result.total_pages,
      }))
    } catch (error) {
      setError(true)
      console.log(error)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchMovie(POPULAR_URL)
  }, [])

  return [{ state, loading, error }, fetchMovie]
}
