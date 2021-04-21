import React,{useState} from "react";
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux';
import userActions from "../actions/user-actions";
import AfoNavbar from "./navbar/afo-navbar";

const Login = ({loginUser}) => {
    const [credentials, setCredentials] = useState({username: '', password: ''})
    const history = useHistory()
    const login = () => {
        loginUser(credentials)
        history.push('/home')
    }
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
                                        <input
                                            value={credentials.username}
                                            onChange={(e) =>
                                            {setCredentials({...credentials, username: e.target.value})}}
                                            type="text"
                                            name="login-group"
                                            className="form-control"
                                        />

                                        <label>
                                            Password:
                                        </label>
                                        <input
                                            value={credentials.password}
                                            onChange={(e) =>
                                            {setCredentials({...credentials, password: e.target.value})}}
                                            type="text"
                                            name="login-group"
                                            className="form-control"
                                        />

                                        <br/>
                                        <button
                                            onClick={login}
                                            type="button"
                                            className="btn btn-secondary">
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

const stateToPropertiesManager = (state) => ({
    user: state.userReducer.user
})

const dispatchToPropertiesManager = (dispatch) => ({
    loginUser: (user) => userActions.loginUser(dispatch, user)
})

export default connect(stateToPropertiesManager, dispatchToPropertiesManager)(Login);


