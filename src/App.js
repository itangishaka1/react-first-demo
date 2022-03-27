import {useEffect} from 'react'

import './App.css';
import SearchIcon from './search.svg'

// Register a free here to get the api key to use https://www.omdbapi.com/apikey.aspx
const API_URL = 'http://www.omdbapi.com?apikey=71538a07'
/*We want to fetch the data as soon as the page load, we use the useEffect hook*/

const movie1 = {
        "Title": "Spiderman",
        "Year": "2010",
        "imdbID": "tt1785572",
        "Type": "movie",
        "Poster": "N/A"
}

const App = () =>{
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&S=${title}`)
        const data = await response.json()

        // console.log(data)
        console.log(data.Search)
    }

    useEffect(() => {
        //fetch movies
        searchMovies('Spiderman')
    }, [])

    return(
        <div className='app'>
            <h1>Movie Serch App</h1>

            <div className="search">
                <input 
                  type="text"
                  placeholder ="Search for movies"
                  value ="Superman" 
                  onChange ={() => {

                  }}
                />
                <img 
                   src={SearchIcon} 
                   alt=""
                   onClick={() => {}} 
                />
            </div>
            <div className="container">
                  <div className="movie">
                      <div>
                          <p>{movie1.Year}</p>
                      </div>
                      <div>
                          <img src={movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt={movie1.Title} />
                      </div>
                      <div>
                          <span>{movie1.Type}</span>
                          <h3>{movie1.Title}</h3>
                      </div>
                  </div>
            </div>
        </div>
    )
}

export default App