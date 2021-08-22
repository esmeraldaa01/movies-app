import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/getMovies";
import "../styles/ProductDetail.scss";

export const ProductDetail = (props) => {
  let { idd } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieById(idd).then((movieJS) => {
      setMovie(movieJS.data);
      console.log(movieJS.data);
    });
  }, [idd]);

  if (!movie) return null;

  return (
    <div
      className="productDetail"
      style={{
        background: `linear-gradient(105deg,rgba(0,0,0,0.8),rgba(0,0,0,0.8) 50%),url(http://image.tmdb.org/t/p/w500/${movie.backdrop_path})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="imageSide">
              <img
                src={"http://image.tmdb.org/t/p/w500/" + movie.poster_path}
                alt=""
                className="productImage"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="descriptionSide">
              <h1 className="movieTitle">{movie.title}</h1>
              <h3 className="movieReleaseDate">{movie.release_date}</h3>
              <h3 className="movieOverview">{movie.overview}</h3>
              <button
                className="btn btn-primary px-4 py-2 mt-2 mr-5"
                style={{ marginRight: 10 }}
              >
                Play
              </button>
              <button className="btn btn-secondary px-4 py-2 mt-2">
                Trailer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
