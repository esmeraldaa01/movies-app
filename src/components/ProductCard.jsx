import React from 'react'
import { useHistory } from 'react-router-dom';

export const ProductCard = (props) => {
    const history = useHistory();
    const movie = props.movie;

  const neKlikim = () => { //ktu suptoj qe kjo shprehja m poshte /list/movie id nxjerr te dhenat e filmit 
      history.push(`/Liste/${movie.id}`)
  }
    return (
        <div className="col col-md-3">
            <div className="emer">
                 <img onClick={neKlikim} className="card-image" src={"http://image.tmdb.org/t/p/w500/" + movie.poster_path} alt="imazh" />
            </div>
        </div>
    )
}
