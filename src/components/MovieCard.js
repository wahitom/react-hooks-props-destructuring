import React from "react";

function MovieCard({ title, poster, genres }) {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} />
      <h2>{title}</h2>
      <small>{genres.join(", ")}</small>
    </div>
  );
}

export default MovieCard;
