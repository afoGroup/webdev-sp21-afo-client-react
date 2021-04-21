import React from "react";
import AfoNavbar from "./navbar/afo-navbar";

const Login = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <AfoNavbar/>
                    <div className="row top-row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12">
                                    <h1 className="afo-purple afo-header">Login</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group afo-login-box">
                                        <label>
                                            Username:
                                        </label>
                                        <input type="text" name="login-group" className="form-control"/>
                                        <label>
                                            Password:
                                        </label>
                                        <input type="text" name="login-group" className="form-control"/>
                                        <br/>
                                        <button type="button" className="btn btn-secondary">
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;