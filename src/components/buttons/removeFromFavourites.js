import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

const RemoveFromFavouritesButton = ({ movie }) => {
    const context = useContext(AuthContext);

    const handleRemoveFromFavourites = e => {
        e.preventDefault();
        context.removeFavourite(movie.id);
    }
    return (
        <button
            type="button"
            className="btn w-100 btn-primary"
            onClick={handleRemoveFromFavourites}
        >
            Remove From Favourites
        </button>
    );
};

export default RemoveFromFavouritesButton;