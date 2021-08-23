import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

const Unfollow = ({ person }) => {
    const context = useContext(AuthContext);

    const handleUnfollow = e => {
        e.preventDefault();
        context.removeFollow(person.id);
    }
    return (
        <button
            type="button"
            className="btn w-100 btn-primary"
            onClick={handleUnfollow}
        >
            Unfollow
        </button>
    );
};

export default Unfollow;