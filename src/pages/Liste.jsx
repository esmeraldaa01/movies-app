import React,{useState,useEffect} from 'react' 
import { ProductCard } from '../components/ProductCard'
import { getMoviesList } from '../services/getMovies'
import  { searchm } from '../services/searchm'
import {WithNavbar} from '../hoc/WithNavbar'
import { Pagination } from '../components/Pagination'

 const Liste = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const onPageChange = page => {
    setPage(page)
  }
  
  useEffect(() => {
    getMoviesList(page).then(data => {
      setMovies(data.data.results)
    });
  }, [page])


    return (
      
      <div className="row">
        {movies.map(movie => (<ProductCard movie={movie}  />) )} 
        <Pagination onPageChange={onPageChange} />
      </div>
    )
}

export default WithNavbar(Liste);

