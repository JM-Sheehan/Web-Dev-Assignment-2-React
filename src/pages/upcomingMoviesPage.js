import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddToWatchListButton from "../components/buttons/addToWatchList";

const UpcomingMoviePage = () => {
  const context = useContext(MoviesContext);
  // const upcomingMovies = context.upcoming.filter((m) => {  // New
  //   return !("watch_list" in m);
  // });
  const upcomingMovies = context.upcoming;
  return (
    <PageTemplate 
      title='Upcoming Movies'
      movies={upcomingMovies}
      action={(movie) => {
        return <AddToWatchListButton movie={movie} /> 
      }}
    />
  );
};

export default UpcomingMoviePage;