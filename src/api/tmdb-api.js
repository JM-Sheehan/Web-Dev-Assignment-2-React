export const getMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getMovieCredits = id => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };


  export const getPopularPeople = () => {
    return fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getMovie = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json());
  };

  export const getPerson = id => {
    return fetch(
      `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json());
  };

  export const getGenres = () => {
    return fetch(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    )
      .then(res => res.json())
      .then(json => json.genres);
  };

  export const getMovieReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getUpcomingMovies = () => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };
  
  export const getGender = (genderNumber) =>{
    if(genderNumber === 1){
      return "female";
    }
    else{
      return "male";
    }
  };

  export const newGuestSession = () =>{
    return fetch(
      `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${process.env.REACT_APP_TMDB_KEY}`
    ).then(res => res.json());
  };

  export const addRating = (movie_id, rating, guest_id) =>{
    return fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/
      ${rating}?api_key=${process.env.REACT_APP_TMDB_KEY}
      &guest_session_id=${guest_id}`
    )
    .then(res => res.json());
  };