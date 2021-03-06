import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

const AddToWatchListButton = ({ movie }) => {
    const context = useContext(AuthContext);

    const handleAddToWatchList = e =>{
        e.preventDefault();
        context.watch(movie.id);
    }
    return (
        <button
            type="button"
            className="btn w-100 btn-primary"
            onClick = {handleAddToWatchList}
        >
            Add to  Watch List
        </button>
    );
};

export default AddToWatchListButton;