import React from "react";
import { actors } from "../data";

function Actors() {
  function renderActorWorks(actor) {
    return (
      <div key={actor.name}>
        <h2>{actor.name}</h2>
        <ul>
          {actor.movies.map(renderMovie)}
        </ul>
      </div>
    );
  }

  function renderMovie(movie) {
    return (
      <li key={movie}>{movie}</li>
    );
  }

  const actorsWorks = actors.map(renderActorWorks);

  return (
    <>
      <div>
        <h1>Actors Page</h1>
        {actorsWorks}
      </div>
    </>
  );
}

export default Actors;
