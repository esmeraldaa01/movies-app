import React, {useState, useEffect} from 'react'
import {useParams} from "react-router-dom"
import { getMovieById } from '../services/getMovies';
import "../styles/ProductDetail.scss" 

export const ProductDetail = (props) => {
    let { idd } = useParams();
    const [movie, setMovie] = useState({})

    useEffect(() => {
        getMovieById(idd).then(movieJS => {
            setMovie(movieJS.data) 
            console.log(movieJS.data) 
        })
    }, [])

    if(!movie) return null;

    return (
        <div className="productDetail" style={{backgroundImage:`linear-gradient(105deg,rgba(0,0,0,.25),rgba(0,0,0,.25) 50%),url(http://image.tmdb.org/t/p/w500/${movie.backdrop_path}))` }}>
            <h1 style={{color:"white"}}>Emri: {movie.title}</h1><h1>Status : {movie.status}</h1>
        </div>
    )
}
