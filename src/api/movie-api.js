///////////////////////////////
/// Authentication Queries  ///
///////////////////////////////

import { Next } from "react-bootstrap/esm/PageItem";

/////////////////////////////////////////////////////////////////////////
export const login = (username, password) => {
  return fetch('/api/users', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const signup = (username, password) => {
  return fetch('/api/users?action=register', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};
/////////////////////////////////////////////////////////////////////////

///////////////////////////
///  Movie Get Queries  ///
///////////////////////////

/////////////////////////////////////////////////////////////////////////

export const getMovies = () => {
  return fetch(
    '/api/movies', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    },
    method: 'get',
  }
  ).then(res => res.json());
};

export const getUpcomingMovies = () => {
  return fetch(
    '/api/movies/upcoming', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    },
    method: 'get',
  }
  ).then(res => res.json());
};

export const getRatedMovies = () => {
  return fetch(
    '/api/movies/rated', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    },
    method: 'get',
  }
  ).then(res => res.json());
};

export const getMovie = (id) => {
  return fetch(
    `/api/movies/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    },
  }).then(res => res.json());
};

export const getReviews = (id) => {
  return fetch(
    `/api/movies/${id}/reviews`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    },
    body: JSON.stringify({ id: id })
  }).then(res => res.json());
};

/////////////////////////////////////////////////////////////////////////

///////////////////////////
/// People Get Queries  ///
///////////////////////////

/////////////////////////////////////////////////////////////////////////
export const getPeople = () => {
  return fetch(
    '/api/people', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const getPopularPeople = () => {
  return fetch(
    '/api/people/popular', {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};


export const getPerson = (id) => {
  return fetch(
    `/api/people/${id}`, {
    headers: {
      'Authorization': window.localStorage.getItem('token')
    },
  }).then(res => res.json());
};

/////////////////////////////////////////////////////////////////////////

///////////////////////////
///  Genre Get Queries  ///
///////////////////////////

/////////////////////////////////////////////////////////////////////////
export const getGenres = () => {
  return fetch(
    '/api/genres', {
    headers: {
      'Content-Type': 'application/json'
    },
  }
  ).then(res => res.json());
};
/////////////////////////////////////////////////////////////////////////

///////////////////////////
/// Favourites Queries  ///
///////////////////////////

/////////////////////////////////////////////////////////////////////////
export const addToFavorites = (username, id) => {
  return fetch(`/api/users/${username}/favourites`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, id: id })
  }).then(res => res.json())
};


export const getFavourites = (username) => {
  return fetch(`/api/user/${username}/favourites`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
      },
      method: 'get',
  }).then(res => res.json())
};
/////////////////////////////////////////////////////////////////////////

///////////////////////////
/// Watch List Queries  ///
///////////////////////////

/////////////////////////////////////////////////////////////////////////
export const addToWatchList = (username, id) => {
  return fetch(`/api/users/${username}/watchList`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, id: id })
  }).then(res => res.json())
};

export const getWatchList = (username) => {
  return fetch(
    `/api/users/${username}/watchList`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': window.localStorage.getItem('token')
      },
      method: 'get',
  }).then(res => res.json());
};
/////////////////////////////////////////////////////////////////////////


///////////////////////////
///  Following Queries  ///
///////////////////////////

/////////////////////////////////////////////////////////////////////////
export const follow = (username, id) => {
  return fetch(`/api/users/${username}/following`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'post',
    body: JSON.stringify({ username: username, id: id })
  }).then(res => res.json())
};

export const unfollow = (username, id) => {
  return fetch(`/api/users/${username}/following`, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'delete',
    body: JSON.stringify({ username: username, id: id })
  }).then(res => res.json())
};

export const getFollowing = (username) => {
  return fetch(
    `/api/users/${username}/following`, {
      headers: {
        'Content-Type': 'application/json'
      },
  }).then(res => res.json());
};
/////////////////////////////////////////////////////////////////////////