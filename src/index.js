import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom"    // CHANGED
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
import RatedPeoplePage from "./pages/ratedPeoplePage";
import PersonPage from "./pages/personDetailsPage";
import LoginPage from "./pages/loginPage";
import SignUpPage from "./pages/signupPage";
import PrivateRoute from "./privateRoute";
import HomePage from "./pages/homePage";
import RatedMovieListPage from "./pages/ratedMoviePage";

const App = () => {
  console.log("Hello World")
  return (
    <BrowserRouter>
      <MoviesContextProvider>
        <AuthProvider>
          <div className="jumbotron">
            <SiteHeader />
            <div className="container-fluid">
              {/* <AuthProvider> */}
              <GenresContextProvider>
                <PeopleContextProvider>
                  <Switch>
                    <Route path="/signup" component={SignUpPage} />
                    <Route path="/login" component={LoginPage} />
                    <Route exact path="/" component={HomePage} />
                    <PrivateRoute exact path="/reviews/form" component={AddMovieReviewPage} />
                    <PrivateRoute path="/movies/upcoming" component={UpcomingMoviePage} />
                    <PrivateRoute path="/movies/rated" component={RatedMovieListPage} />
                    <PrivateRoute path="/people/popular" component={PeoplePage} />
                    <PrivateRoute path="/people/rated" component={RatedPeoplePage} />
                    <PrivateRoute path="/reviews/:id" component={MovieReviewPage} />
                    <PrivateRoute path="/people/:id" component={PersonPage} />
                    <PrivateRoute path="/movies/:id" component={MoviePage} />
                    <PrivateRoute path="/movies" component={PopularMoviePage} />
                    <Redirect from="*" to="/" />
                  </Switch>
                </PeopleContextProvider>
              </GenresContextProvider>
              {/* </AuthProvider> */}
            </div>
          </div>
        </AuthProvider>
      </MoviesContextProvider>

    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

