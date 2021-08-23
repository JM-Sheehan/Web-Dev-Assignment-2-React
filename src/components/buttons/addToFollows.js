import React, { useContext } from "react";
import {AuthContext} from "../../contexts/authContext";

const AddToFollows = ({ person }) => {
  const context = useContext(AuthContext);

  const handleAddToFollows = e => {
    e.preventDefault();
    context.addFollow(person.id);
  };

  return (
    <button
      type="button"
      className="btn w-100 btn-primary"
      onClick={handleAddToFollows}
    >
      Follow Person
    </button>
  );
};

export default AddToFollows;