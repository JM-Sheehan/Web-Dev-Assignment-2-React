import React, { useContext }from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import "./siteHeader.css";
import { NavDropdown } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";


const SiteHeader = (props) => {
  const context = useContext(AuthContext);
  let val = context.isAuthenticated?(
    <p>
      {context.userName} is Logged In!
    </p>
  ):
  (
    <p>
      User is Logged Out!
    </p>
  );

  return (
    <>

      <nav variant="pills" className="navbar  navbar-ligFht fixed-top  bg-dark ">
        <nav className="navbar-brand text-white">
          <Link className=" text-white" to="/">
            TMDB Client
          </Link>
        </nav>
        <nav className="navbar-brand text-white">
          {val}
        </nav>
        <nav className="navbar navbar-expand ">
          <NavDropdown title="Log In/Sign Up" id="nav-dropdown">
            <NavDropdown.Item eventKey="2.1">
              <Link className="nav-link text-black" to="/login">
                Log In/Log Out
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
                Discover Movies
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
                Discover People
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </nav>
      </nav>
    </>

  );
};

export default withRouter(SiteHeader);