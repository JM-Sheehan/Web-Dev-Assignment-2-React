import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import "../components/login/loginPage.css"

const LoginPage = props => {
    const context = useContext(AuthContext)
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        context.authenticate(userName, password);
    };

    // Set 'from' to path where browser is redirected after a successful login.
    // Either / or the protected path user tried to access.
    const { from } = props.location.state || { from: { pathname: "/" } };

    if (context.isAuthenticated === true) {
        return <Redirect to={from} />;
    }
    return (
        <>

            <form className = "input-box">
                <h2>Login page</h2>
                <br/>
                <div className="form-group">
                    <label>Username</label>
                    <input type="username" className="form-control" id="username" placeholder="user name" onChange={e => {
                        setUserName(e.target.value);
                    }}></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" id="username" placeholder="password" onChange={e => {
                        setPassword(e.target.value);
                    }}></input>
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={login}>Log in</button>
                <p>Not Registered?
                    <Link to="/signup">Sign Up!</Link></p>
            </form>

        </>
    );
};



export default LoginPage;