import React from 'react';
import { useGlobalContext } from './context';
import { NavLink } from 'react-router-dom';

const MoviesDetails = () => {
  const { movie , isloading } = useGlobalContext();

  if(isloading){
    return(
      <div className='movie-section'>
        <div><h1>Loading...</h1></div>
      </div>
    )
  }

  return (
    <section className="movie-page">
      <div className="container  grid grid-4-col">
        {movie.map((item) => {
          const { Title, Poster, imdbID } = item;
          const movieName = Title.substring(0, 15)
          return (
            <NavLink to={`movies/${imdbID}`} key={imdbID}>
              <div className="card">
                <div className="card-info">
                  <h2>{movieName.length >= 15 ? `${movieName}...` : movieName}</h2>
                  <img src={Poster} alt={imdbID} />
                </div>
              </div>
            </NavLink>
          )
        })}
      </div>
    </section>

  );
}

export default MoviesDetails;
