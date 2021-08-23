import React, {useContext} from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import AddReviewButton from '../components/buttons/addReview'
import RemoveFromFavouritesButton from "../components/buttons/removeFromFavourites";
import { AuthContext } from "../contexts/authContext";
import { getFavourites, getMovie } from "../api/movie-api";

const FavoriteMoviesPage = props => {
  const context = useContext(AuthContext);
  const favourites = context.favourites;
  console.log(favourites);
  
  return (
    <MovieListPageTemplate
      movies={favourites}
      title={"Favorite Movies"}
      action={movie => <RemoveFromFavouritesButton movie={movie} />}
    />
  );
};

export default FavoriteMoviesPage;