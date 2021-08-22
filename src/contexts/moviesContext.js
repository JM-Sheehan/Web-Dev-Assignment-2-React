import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies } from "../api/movie-api";


export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    // case "add-favorite":
    //   return {
    //     movies: state.movies.map((m) =>
    //       m.id === action.payload.movie.id ? { ...m, favorite: true } : m
    //     ),
    //     upcoming: [...state.upcoming],
    //   };
    // case "add-to-watch-list":
    //   return {
    //     movies: [...state.movies],
    //     upcoming: state.upcoming.map((m) =>
    //       m.id === action.payload.movie.id ? { ...m, watch_list: true } : m
    //     ),
    //   };
    // case "remove-from-watch-list":
    //   return {
    //     movies: [...state.movies],
    //     upcoming: state.upcoming.map((m) =>
    //       m.id === action.payload.movie.id ? { ...m, watch_list: false } : m
    //     ),
    //   };
    case "load":
      return { movies: action.payload.result, upcoming: [...state.upcoming] };
    case "load-upcoming":
      return { upcoming: action.payload.result, movies: [...state.movies] };
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
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [] });

  // const Favourites = (movieId) => {
  //   const index = state.movies.map((m) => m.id).indexOf(movieId);
  //   addToFavorites(context.userName, movieId);
  //   dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  // };


  // const addToWatchList = (movieId) => {
  //   const index = state.upcoming.map((m) => m.id).indexOf(movieId);
  //   dispatch({ type: "add-to-watch-list", payload: { movie: state.upcoming[index] } });
  // }

  // const removeFromWatchList = (movieId) => {
  //   const index = state.upcoming.map((m) => m.id).indexOf(movieId);
  //   dispatch({ type: "remove-from-watch-list", payload: { movie: state.upcoming[index] } });
  // }

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: {result}});
    });
  },[]);

  useEffect(() => {
    getUpcomingMovies().then(result => {
      console.log(result);
      dispatch({ type: "load-upcoming", payload: {result}});
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        // addToFavorites: addToFavorites,
        addReview: addReview,
        // addToWatchList: addToWatchList,
        // removeFromWatchList: removeFromWatchList,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;