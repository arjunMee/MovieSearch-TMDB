import React from 'react'
import NotFound from './NotFound'
import { Router } from '@reach/router'
import Header from './elements/Header'
import Movie from './Movie'
import Home from './Home'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Home path='/' />
        <Movie path='/:movieId' />
        <NotFound default />
      </Router>
    </>
  )
}

export default App
