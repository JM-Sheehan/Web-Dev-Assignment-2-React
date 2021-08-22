import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import { AuthContext } from "../contexts/authContext";
import { getFavourites } from "../api/movie-api";

const FavoriteMoviesPage = props => {
  const context = useContext(AuthContext);
  const favorites = context.favourites;
  return (
    <MovieListPageTemplate
      movies={favorites}
      title={"Favorite Movies"}
      action={movie => <AddReviewButton movie={movie} />}
    />
  );
};

export default FavoriteMoviesPage;