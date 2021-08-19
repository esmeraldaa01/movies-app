import React,{useState,useEffect} from 'react' 
import { ProductCard } from '../components/ProductCard'
import { getMoviesList } from '../services/getMovies'
import  { searchm } from '../services/searchm'

export const SearchPage = () => {
  const [inputVal, setInputVal] = useState('')
  // const [movies, setMovies] = useState([]);
  const [searchMovies, setsearchMovies] = useState([])
  
  const onChange = e => { 
    setInputVal(e.target.value) 
  } 

  // useEffect(() => {
  //   getMoviesList().then(data => {
  //     setMovies(data.data.results)
  //     console.log(data.data.results[0])
  //   });
  // }, [])

  const onSubmit1 = e => {
    e.preventDefault();
    
    searchm(inputVal).then(function(data) { 
      setsearchMovies(data.data.results) 
    })
    
  }

    return (
        <div>
          <form class="mb-3 d-flex" onSubmit={onSubmit1} style={{width: 500, marginTop: 20}}>
            <input type="text" className="form-control" placeholder="Search" value={inputVal} onChange={onChange}/>
            <button type="submit" className="btn btn-primary" style={{marginLeft: 20}}>Kerko</button>
         </form> 

      <div className="row">
        {/* {movies.map(movie => (<ProductCard movie={movie}  />) )} */} 
        {searchMovies.map(movie => (<ProductCard movie={movie}  />) )}
      </div>
      </div>
    )
}
