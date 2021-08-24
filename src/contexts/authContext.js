import React, { useState, createContext, useReducer, useEffect } from "react";
import {
  login, signup, addToFavorites,
  getFavourites, addToWatchList, getWatchList,
  follow, unfollow
} from "../api/movie-api";
export const AuthContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load-favourites":
      return {
        favourites: action.payload.result,
        watchList: [...state.watchList],
        following: [...state.following]
      };
    case "load-watchList":
      return {
        favourites: [...state.favourites],
        watchList: action.payload.watchList,
        following: [...state.following]
      };
    case "load-following":
      return {
        favourites: [...state.favourites],
        watchList: [...state.watchList],
        following: action.payload.following
      };
    default:
      return state;
  }
};

const AuthContextProvider = (props) => {
  const existingToken = localStorage.getItem("token");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authToken, setAuthToken] = useState(existingToken);
  const [userName, setUserName] = useState("");

  const [state, dispatch] = useReducer(
    reducer, { favourites: [], watchList: [], following: [] });


  ////////////////////////
  /// Post Functions   ///
  ////////////////////////
  ////////////////////////////////////////////////////////////////////
  const favourite = async (id) => {
    const result = await addToFavorites(userName, id);
    console.log(result.code);
    return (result.code === 201) ? true : false;
  };

  const watch = async ( id) => {
    const result = await addToWatchList(userName, id);
    console.log(result.code);
    return (result.code === 201) ? true : false;
  };


  const addFollow = async ( id) => {
    const result = await follow(userName, id);
    console.log(result.code);
    console.log(id);
    return (result.code === 201) ? true : false;
  };

  const removeFollow = async ( id ) => {
    const result = await unfollow(userName, id);
    console.log(result.code);
    console.log(id);
    return (result.code === 201) ? true : false;
  };
  ////////////////////////////////////////////////////////////////////

  //////////////////////////
  /// Getter Functions   ///
  //////////////////////////
  ////////////////////////////////////////////////////////////////////

  useEffect(() => {

    getFavourites(userName).then(result => {
      dispatch({ type: "load-favourites", payload: { result } });
    });
  }, [userName]);

  useEffect(() => {
    getWatchList(userName).then(result => {
      console.log(result);
      dispatch({ type: "load-watchList", payload: { result } });
    });
  }, [userName]);

  useEffect(() => {
    getFavourites(userName).then(result => {
      console.log(result);
      dispatch({ type: "load-following", payload: { result } });
    });
  }, [userName]);


  ////////////////////////////////////////////////////////////////////

  /////////////////////////////////
  // Authentication Functions   ///
  /////////////////////////////////
  ////////////////////////////////////////////////////////////////////
  const setToken = (data) => {
    localStorage.setItem("token", data);
    setAuthToken(data);
  }

  const authenticate = async (username, password) => {
    const result = await login(username, password);
    console.log("Authenticating");
    if (result.token) {
      setToken(result.token)
      setIsAuthenticated(true);
      setUserName(username);
    }
  };

  const register = async (username, password) => {
    const result = await signup(username, password);
    console.log(result.code);
    return (result.code === 201) ? true : false;
  };

  const signout = () => {
    setTimeout(() => setIsAuthenticated(false), 100);
  }
  ////////////////////////////////////////////////////////////////////

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        register,
        signout,
        favourite: favourite,
        watch: watch,
        addFollow: addFollow,
        removeFollow: removeFollow,
        userName,
        favourites: state.favourites,
        watchList: state.watchList,
        following: state.following
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;