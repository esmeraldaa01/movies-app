import React,{useState,useEffect} from 'react' 
import { ProductCard } from '../components/ProductCard'
import { getMoviesList } from '../services/getMovies'
import  { searchm } from '../services/searchm'

export const Liste = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    getMoviesList().then(data => {
      setMovies(data.data.results)
      console.log(data.data.results[0])
    });
  }, [])


    return (
      
      <div className="row">
        {movies.map(movie => (<ProductCard movie={movie}  />) )} 
      </div>
    )
}
