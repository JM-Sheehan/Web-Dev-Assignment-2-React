import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getRatedMovies } from "../api/movie-api";


export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return {
        movies: action.payload.result,
        upcoming: [...state.upcoming],
        rated: [...state.rated]
      };
    case "load-upcoming":
      return {
        upcoming: action.payload.result,
        movies: [...state.movies],
        rate: [...state.rated]
      };
    case "load-rated":
      return {
        rated: action.payload.result,
        movies: [...state.movies],
        upcoming: [...state.upcoming]
      };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    movies: [], upcoming: [], rated: []
  });

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: { result } });
    });
  }, []);

  useEffect(() => {
    getUpcomingMovies().then(result => {
      console.log(result);
      dispatch({ type: "load-upcoming", payload: { result } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getRatedMovies().then(result => {
      console.log(result);
      dispatch({ type: "load-rated", payload: { result } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        rated: state.rated,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;