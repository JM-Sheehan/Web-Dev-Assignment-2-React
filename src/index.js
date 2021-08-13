import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom"    // CHANGED
import FavoriteMoviesPage from './pages/favoriteMoviesPage'       // NEW
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import HomePage from "./pages/homePage";
import MoviePage from './pages/movieDetailsPage'
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviePage from "./pages/upcomingMoviesPage";
import MoviesContextProvider from "./contexts/moviesContext";
import GenresContextProvider from "./contexts/genresContext";
import PeopleContextProvider from "./contexts/peopleContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import PeoplePage from "./pages/popularPeoplePage";
import PersonPage from "./pages/personDetailsPage";
import WatchListPage from "./pages/watchListPage";
import FollowPage from "./pages/following";

const App = () => {
  return (
    <BrowserRouter>
      <div className="jumbotron">
        <SiteHeader />
        <div className="container-fluid">
          <MoviesContextProvider>     {/* NEW  */}
            <GenresContextProvider>
              <PeopleContextProvider>
                <Switch>
                  <Route exact path="/reviews/form" component={AddMovieReviewPage} />
                  <Route path="/movies/upcoming" component={UpcomingMoviePage} />
                  <Route path="/movies/watch_list" component={WatchListPage} />
                  <Route path="/people/popular" component={PeoplePage} />
                  <Route path="/people/following" component={FollowPage} />
                  <Route path="/reviews/:id" component={MovieReviewPage} />
                  <Route exact path="/movies/favorites" component={FavoriteMoviesPage} />
                  <Route path="/people/:id" component={PersonPage} />
                  <Route path="/movies/:id" component={MoviePage} />
                  <Route path="/" component={HomePage} />
                  <Redirect from="*" to="/" />
                </Switch>
              </PeopleContextProvider>
            </GenresContextProvider>
          </MoviesContextProvider>     {/* NEW */}
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

