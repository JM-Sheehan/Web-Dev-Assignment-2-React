import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

const AddToFavoriteButton = ({ movie }) => {
  const context = useContext(AuthContext);
  
  const handleAddToFavorite = e => {
    e.preventDefault();
    context.favourite(movie.id);

  };
  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </button>
  );
};

export default AddToFavoriteButton;