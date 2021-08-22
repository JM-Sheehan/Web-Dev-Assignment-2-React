import React, { useState, useContext, createContext, useReducer, useEffect } from "react";
import {
  login, signup, addToFavorites, removeFromFavourites,
  getFavourites, addToWatchList, removeFromWatchList, getWatchList,
  follow, unfollow, getFollowing
} from "../api/movie-api";
import { MoviesContext } from "./moviesContext";
export const AuthContext = createContext(null);
const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        favourites: [...state.favourites, action.payload.result],
        watchList: [...state.watchList],
        following: [...state.following]
      };
    // case "add-to-watch-list":
    //   return {
    //     favourites: [...state.favourites],
    //     watchList: [...state.watchList, ...action.payload.result],
    //     following: [...state.following]
    //   };
    // case "remove-from-watch-list":
    //   return {
    //     favourites: [...state.favourites],
    //     watchList: [...state.watchList],
    //     following: [...state.following, ...action.payload.result]
    //   };
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
  const context = useContext(MoviesContext);

  const [state, dispatch] = useReducer(
    reducer, { favourites: [], watchList: [], following: [] });


  ////////////////////////
  /// Post Functions   ///
  ////////////////////////
  ////////////////////////////////////////////////////////////////////
  const favourite = (id) => {
    const result = addToFavorites(userName, id);
    dispatch({type: "add-favourites", payload: {result}})
    console.log(result.code);
    console.log(state.favourites)
    return (result.code === 201) ? true : false;
  };

  const removeFavourite = async (username, id) => {
    const result = await removeFromFavourites(username, id);
    console.log(result.code);
    return (result.code === 201) ? true : false;
  };

  const watch = async (username, id) => {
    const result = await addToWatchList(username, id);
    console.log(result.code);
    return (result.code === 201) ? true : false;
  };

  const unwatch = async (username, id) => {
    const result = await removeFromWatchList(username, id);
    console.log(result.code);
    return (result.code === 201) ? true : false;
  };

  const addFollow = async (username, id) => {
    const result = await follow(username, id);
    console.log(result.code);
    return (result.code === 201) ? true : false;
  };

  const removeFollow = async (username, id) => {
    const result = await unfollow(username, id);
    console.log(result.code);
    return (result.code === 201) ? true : false;
  };
  ////////////////////////////////////////////////////////////////////

  //////////////////////////
  /// Getter Functions   ///
  //////////////////////////
  ////////////////////////////////////////////////////////////////////
  // useEffect(() => {
  //   let result = getFavourites(userName);

  //   dispatch({ type: "load-favourites", payload: {result}});
  //   // getFavourites(userName).then(result => {
  //   //   console.log(result);
  //   //   dispatch({ type: "load-favourite", payload: {result}});
  //   // });
  // },[]);

  useEffect(() => {
    getFavourites(userName).then(result => {
      console.log(result);
      dispatch({ type: "load-favourites", payload: { result } });
    });
  }, [userName]);

  useEffect(() => {
    getWatchList(userName).then(result => {
      console.log(result);
      dispatch({ type: "load-watchList", payload: { result } });
    });
  }, []);

  useEffect(() => {
    getFavourites(userName).then(result => {
      console.log(result);
      dispatch({ type: "load-following", payload: { result } });
    });
  }, []);


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
        removeFavourite,
        watch,
        unwatch,
        addFollow,
        removeFollow,
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