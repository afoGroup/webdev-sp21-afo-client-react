import React, {useEffect, useState} from "react";
import {useHistory} from 'react-router-dom';
import {connect, useSelector} from 'react-redux';
import userActions from "../actions/user-actions";
import userService from "../services/user-service";
import AfoNavbar from "./navbar/afo-navbar";

const Login = (props) => {
    const [credentials, setCredentials] = useState({username: '', password: ''});
    const [attemptNum, setAttemptNum] = useState(0);
    const [alertError, setAlertError] = useState(false);
    const history = useHistory();

    const loginClicked = () => {
        userService.login(credentials)
            .then((actualUser) => {
                console.log('actualUserName: ' + actualUser.username);
                console.log('actualUserId: ' + actualUser._id);
                if(actualUser === 0) {
                    alert("login failed, try again")
                } else {
                    history.push(`/profile`)
                }
            })
            .catch(() => {
                setAlertError(true)
            })

    };

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
                                <div className="col-12 form">
                                    <div className="form-group afo-login-box">
                                        <label>
                                            Username:
                                        </label>
                                        <input
                                            value={credentials.username}
                                            onChange={(e) => {
                                                setAlertError(false)
                                                setCredentials({...credentials, username: e.target.value})
                                            }}
                                            type="text"
                                            name="login-group"
                                            className="form-control"
                                            placeholder="aliceInWonderland"
                                        />

                                        <label>
                                            Password:
                                        </label>
                                        <input
                                            value={credentials.password}
                                            onChange={(e) =>
                                            {
                                                setAlertError(false)
                                                setCredentials({...credentials, password: e.target.value})
                                            }}
                                            type="password"
                                            name="login-group"
                                            className="form-control"
                                            placeholder="r@bbitHo1es"
                                        />

                                        <br/>
                                        <button
                                            onClick={() => loginClicked()}
                                            type="button"
                                            className="btn btn-secondary">
                                            Login
                                        </button>
                                        {
                                            alertError &&
                                            <div className="mt-4 alert alert-danger" role="alert">
                                                Username/password is incorrect
                                            </div>
                                        }
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

const stateToPropertiesManager = (state) => ({
    user: state.userReducer.currentUser
});

const dispatchToPropertiesManager = (dispatch) => ({
    loginUser: (user) => userActions.loginUser(dispatch, user)
});

export default connect(stateToPropertiesManager, dispatchToPropertiesManager)(Login);
