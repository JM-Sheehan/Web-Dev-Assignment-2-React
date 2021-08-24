import React, { useContext } from "react";
import PageTemplate from '../components/templateMovieListPage'
import {MoviesContext} from '../contexts/moviesContext'
import AddReviewButton from '../components/buttons/addReview'


const RatedMovieListPage = () => {
  const context = useContext(MoviesContext);
  const movies = context.rated;
  return (
    <PageTemplate
      title="Highest Rated Movies"
      movies={movies}  /* Changed */
      action={(movie) => {
        return <AddReviewButton movie={movie} />;
      }}
    />
  );
};

export default RatedMovieListPage;