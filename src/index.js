import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoriteMoviesPage'       // NEW
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import PopularMoviePage from "./pages/popularMoviesPage";
import MoviePage from './pages/movieDetailsPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviePage from "./pages/upcomingMoviesPage";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import PeopleContextProvider from "./contexts/peopleContext";
import AuthProvider from "./contexts/authContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PeoplePage from "./pages/popularPeoplePage";
import PersonPage from "./pages/personDetailsPage";
import WatchListPage from "./pages/watchListPage";
import FollowPage from "./pages/following";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signupPage";
import PrivateRoute from "./privateRoute";
import HomePage from "./pages/homePage";

const App = () => {
  console.log("Hello World")
  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="jumbotron">
          <SiteHeader />
          <div className="container-fluid">
            {/* <AuthProvider> */}
              <MoviesContextProvider>
                <GenresContextProvider>
                  <PeopleContextProvider>
                    <Switch>
                      <Route path="/signup" component={SignUpPage} />
                      <Route path="/login" component={LoginPage} />
                      <Route exact path = "/" component = {HomePage}/>
                      <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
                      <PrivateRoute path="/movies/upcoming" component={UpcomingMoviePage} />
                      <PrivateRoute path="/movies/watch_list" component={WatchListPage} />
                      <PrivateRoute path="/people/popular" component={PeoplePage} />
                      <PrivateRoute path="/people/following" component={FollowPage} />
                      <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
                      <PrivateRoute exact path="/movies/favorites" component={FavoriteMoviesPage} />
                      <PrivateRoute path="/people/:id" component={PersonPage} />
                      <PrivateRoute path="/movies/:id" component={MoviePage} />
                      <PrivateRoute path="/movies" component={PopularMoviePage} />
                      <Redirect from="*" to="/" />
                    </Switch>
                  </PeopleContextProvider>
                </GenresContextProvider>
              </MoviesContextProvider>
            {/* </AuthProvider> */}
          </div>
        </div>
      </AuthProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

