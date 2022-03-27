import { useEffect, useState } from "react"
import MovieCard from "./MovieCard"

import "./App.css"
import SearchIcon from "./search.svg"

// Register a free here to get the api key to use https://www.omdbapi.com/apikey.aspx
const API_URL = "http://www.omdbapi.com?apikey=71538a07"
/*We want to fetch the data as soon as the page load, we use the useEffect hook*/

const movie1 = {
  Title: "Spiderman",
  Year: "2010",
  imdbID: "tt1785572",
  Type: "movie",
  Poster: "N/A",
}

const App = () => {
  const [movies, setMovies] = useState([])

  const searchMovies = async title => {
    const response = await fetch(`${API_URL}&S=${title}`)
    const data = await response.json()

    // console.log(data)
    console.log(data.Search)
    setMovies(data.Search)
  }

  useEffect(() => {
    //fetch movies
    searchMovies("Spiderman")
  }, [])

  return (
    <div className="app">
      <h1>Movie Search App</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="" onClick={() => {}} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {/* <MovieCard movie1={movies[0]}/> */}
          {movies.map(movie => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  )
}

export default App
