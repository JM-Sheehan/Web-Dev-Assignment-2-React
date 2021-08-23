import React from "react";
import "./movieDetails.css";

export default ({ movie, genres }) => {
  return (
    <>
      <h4>Overview</h4>
      <p>{movie.overview}</p>
      <ul className="list-group list-group">
        <li key="ruh" className="list-group-item list-group-item-dark">
          Original Language
        </li>
        <li key="rut" className="list-group-item ">
          {movie.original_language}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Release Date
        </li>
        <li key="rdv" className="list-group-item ">
          {movie.release_date}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Popularity
        </li>
        <li key="rdv" className="list-group-item ">
          {movie.popularity}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">

        <li key="rdh" className="list-group-item list-group-item-dark">
          Vote Average
        </li>
        <li key="rdv" className="list-group-item ">
          {movie.vote_average}
        </li>
        <li key="rdh" className="list-group-item list-group-item-dark">
          Vote Count
        </li>
        <li key="rdv" className="list-group-item ">
          {movie.vote_count}
        </li>
      </ul>

      <ul className="list-group list-group-horizontal">
        <li key="gh" className="list-group-item list-group-item-dark">
          Genres
        </li>
        {movie.genre_ids.map(g => (
          <li key={g} className="list-group-item">
            {(genres.find(r => r.id === g)).name}
          </li>
        ))}
      </ul>
      <br></br>
    </>
  );
};