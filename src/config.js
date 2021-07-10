// https://api.themoviedb.org/3/movie/550?api_key=a09bb7abb5a4f39c383b3d2fbc567f8f/

const API_URL = 'https://api.themoviedb.org/3/'
const API_KEY = 'a09bb7abb5a4f39c383b3d2fbc567f8f'

// 'http://image.tmdb.org/t/p/w500/xipF6XqfSYV8DxLqfLN6aWlwuRp.jpg'
const IMAGE_BASE_URL = 'http://image.tmdb.org/t/p/'

const BACKDROP_SIZE = 'w1280'
const POSTER_SIZE = 'w500'

// https://api.themoviedb.org/3/search/movie?api_key=a09bb7abb5a4f39c383b3d2fbc567f8f&query="luca"
const SEARCH_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`
// https://api.themoviedb.org/3/movie/popular?api_key=a09bb7abb5a4f39c383b3d2fbc567f8f
const POPULAR_URL = `${API_URL}movie/popular?api_key=${API_KEY}`

export {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
  SEARCH_URL,
  POPULAR_URL,
}
