import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import "../components/login/loginPage.css"

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    if (password.length > 0 && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    }
  }

  const { from } = props.location.state || { from: { pathname: "/" } };

  if (registered === true) {
    return <Redirect to="./login" />;
  }

  return (

    <>
      <form className="input-box">
        <h2>SignUp page</h2>
        <br />
        <div className="form-group">
          <label>Username</label>
          <input type="username" className="form-control" value={userName} placeholder="user name" onChange={e => {
            setUserName(e.target.value);
          }}></input>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" value={password} placeholder="password" onChange={e => {
            setPassword(e.target.value);
          }}></input>
        </div>
        <div className="form-group">
          <label>Repeat Password</label>
          <input type="password" className="form-control" value={passwordAgain} placeholder="password again" onChange={e => {
            setPasswordAgain(e.target.value);
          }}></input>
        </div>
        <button type="submit" className="btn btn-primary boot" onClick={register}>Register</button>
        <p>Already Registered?
          <Link to="/">Log In</Link></p>
      </form>
    </>
  );
};

export default SignUpPage;