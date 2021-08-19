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
        console.log("Logging In")
        context.authenticate(userName, password);
    };

    const signout = () => {
        context.signout();
    }

    // Set 'from' to path where browser is redirected after a successful login.
    // Either / or the protected path user tried to access.

    return (
        <>
            <div className="input-box">
                <h2>Login page</h2>
                <p><i>You must log in to view the protected pages</i></p>
                <br></br>

                <div className="form-group">
                    <label>Username</label>
                    <input className="form-control" id="username" placeholder="user name" onChange={e => {
                        setUserName(e.target.value);
                    }}></input>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input class = "form-control" id="password" type="password" placeholder="password" onChange={e => {
                        setPassword(e.target.value);
                    }}></input>
                </div>
                {/* Login web form  */}
                <button className="boot btn btn-primary " onClick={login}>Log in</button>
                <br></br>
                <button className="boot btn btn-primary " onClick={signout}>Log Out</button>
                <p>Not Registered?
                    <Link to="/signup">Sign Up!</Link></p>
            </div>
        </>
        // <>
        //     <form className = "input-box">
        //         <h2>Login page</h2>
        //         <br/>
        //         <div className="form-group">
        //             <label>Username</label>
        //             <input className="form-control" id="username" placeholder="user name" onChange={e => {
        //                 setUserName(e.target.value);
        //             }}></input>
        //         </div>
        //         <div className="form-group">
        //             <label>Password</label>
        //             <input className="form-control" id="password" placeholder="password" onChange={e => {
        //                 setPassword(e.target.value);
        //             }}></input>
        //         </div>
        //         <button className="btn btn-primary btn-block" onClick={login}>Log in</button>
        //         <p>Not Registered?
        //             <Link to="/signup">Sign Up!</Link></p>
        //     </form>

        // </>
    );
};



export default LoginPage;