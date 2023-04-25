import React from "react";
import { directors } from "../data";

function Directors() {
  function renderMovie(movie) {
    return <li key={movie}>{movie}</li>;
  }

  function renderDirectorDetails(director) {
    return (
      <div key={director.name}>
        <h2>{director.name}</h2>
        <ul>{director.movies.map(renderMovie)}</ul>
      </div>
    );
  }

  const directorsDetails = directors.map(renderDirectorDetails);

  return (
    <>
      <div>
        <h1>Directors Page</h1>
        {directorsDetails}
      </div>
    </>
  );
}

export default Directors;
