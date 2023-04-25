import React from "react";
import { movies } from "../data";

function Movies() {
  function renderMovieDetails(movie) {
    return (
      <div key={movie.title}>
        <h2>{movie.title}</h2>
        <p>Runtime: {movie.time} min.</p>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    );
  }

  const movieDetails = movies.map(renderMovieDetails);

  return (
    <>
      <div>
        <h1>Movies Page</h1>
        {movieDetails}
      </div>
    </>
  );
}

export default Movies;
