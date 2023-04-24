import React, { useEffect, useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

const BACKED_ENDPOINT = "https://react-http-c1c44-default-rtdb.firebaseio.com/movies.json"

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMoviesHandler = () => {
    setError(null)
    setIsLoading(true)
    fetch(BACKED_ENDPOINT)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong!')
        }
        return res.json()
      })
      .then(data => {
        const loadedMovies = []

        for (const key in data) {
          loadedMovies.push({
            id: key,
            title: data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate
          })

        }

        setMovies(loadedMovies)
      })
      .catch(err => setError(err.message))
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    fetchMoviesHandler()
  }, [])

  function addMovieHandler(movie) {
    fetch(BACKED_ENDPOINT,
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(res => console.log(res))
      .catch(err => setError(err))
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        {
          isLoading ? 
          <div>Loading</div> 
          : <MoviesList movies={movies} />
        }
        {
          !isLoading && error && <p>{error}</p>
        }
      </section>
    </React.Fragment>
  );
}

export default App;
