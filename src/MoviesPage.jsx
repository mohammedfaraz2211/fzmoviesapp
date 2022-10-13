import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import {API_URL} from './context';

const MoviesPage = () => {

  const {id} = useParams();

  const [isloading, setIsloading] = useState(true);
  const [movie, setmovie] = useState("");

  const ApiMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("......", data);
      if (data.Response === "True") {
        setIsloading(false)
        setmovie(data)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const clearsettime = setTimeout(() => {
      ApiMovies(`${API_URL}&i=${id}`)
    }, 800);

    return () => clearInterval(clearsettime)
  }, [id]);

  if(isloading){
    return(
      <div className='movie-section'>
        <div><h1>...Loading</h1></div>
      </div>
    )
  }

  return (
    <>
      <section className='movie-section'>
        <div className='movie-card'>
          <figure>
            <img src={movie.Poster} alt=""/>
          </figure>
          <div className='card-content'>
            <p className='title' >{movie.Title}</p>
            <p className='card-text' >{movie.Released}</p>
            <p className='card-text' >{movie.Genre}</p>
            <p className='card-text' >{movie.imdbRating}</p>
            <p className='card-text' >{movie.Country}</p>
            <NavLink to="/" className="back-btn">Go Back</NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default MoviesPage;
