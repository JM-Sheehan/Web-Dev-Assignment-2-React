import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import "./siteHeader.css";
import { NavDropdown } from 'react-bootstrap';


const SiteHeader = () => {
  return (
    <nav variant="pills" activeKey="1" className="navbar  navbar-ligFht fixed-top  bg-dark ">
      <nav className="navbar-brand text-white">
        <Link className=" text-white" to="/">
          TMDB Client
        </Link>
      </nav>

      <nav className="navbar navbar-expand ">
      <NavDropdown title="Log In/Sign Up" id="nav-dropdown">
          <NavDropdown.Item eventKey="2.1">
            <Link className="nav-link text-black" to="/">
              Log In
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link className="nav-link text-black" to="/signup">
              Sign Up
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Movies" id="nav-dropdown">
          <NavDropdown.Item eventKey="2.1">
            <Link className="nav-link text-black" to="/movies">
              DiscoverMovies
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="2.2">
            <Link className="nav-link text-black" to="/movies/upcoming">
              Upcoming
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="People" id="nav-dropdown">
          <NavDropdown.Item eventKey="3.1">
            <Link className="nav-link text-black" to="/people/popular">
              Popular People
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="User" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">
            <Link className="nav-link text-black" to="/movies/favorites">
              Favorites
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">
            <Link className="nav-link text-black" to="/movies/watch_list">
              Watch List
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">
            <Link className="nav-link text-black" to="/people/following">
              Following
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
      </nav>
    </nav>
  );
};

export default SiteHeader;