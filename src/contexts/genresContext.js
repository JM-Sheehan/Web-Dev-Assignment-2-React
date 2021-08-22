import React, { useState, useEffect, createContext } from "react";
// import { getGenres } from "../api/tmdb-api";
import { getGenres } from "../api/movie-api";

export const GenresContext = createContext(null)

const GenresContextProvider = props => {
  const [genres, setGenres] = useState([{ id: "0", name: "All" }]);

  useEffect(() => {
    getGenres().then(result => {
      console.log(result);
      setGenres([genres[0], ...result]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <GenresContext.Provider
      value={{
        genres
      }}
    >
      {props.children}
    </GenresContext.Provider>
  )
}

export default GenresContextProvider;