import React, { useEffect, createContext, useReducer } from "react";
// import { getPopularPeople } from "../api/tmdb-api";
import { getPeople, getPopularPeople } from "../api/movie-api";

export const PeopleContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { 
        people: action.payload.result,
        popular: [...state.popular],
      };
    case "load-popular":
      return {
        popular: action.payload.result,
        people: [...state.people],
      };
    default:
      return state;
  }
};

const PeopleContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { people: [], popular: [] });

  const addToFollows = (personId) => {
    const index = state.people.map((p) => p.id).indexOf(personId);
    dispatch({ type: "add-follow", payload: { people: state.people[index] } });
  };

  const unfollow = (personId) => {
    const index = state.people.map((p) => p.id).indexOf(personId);
    dispatch({ type: "unfollow", payload: { people: state.people[index] } });
  };


  useEffect(() => {
    getPeople().then(result => {
      console.log(result);
      dispatch({ type: "load", payload: { result } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getPopularPeople().then(result => {
      console.log(result);
      dispatch({ type: "load-popular", payload: { result } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <PeopleContext.Provider
      value={{
        people: state.people,
        popular: state.popular,
        addToFollows: addToFollows,
        unfollow: unfollow
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;