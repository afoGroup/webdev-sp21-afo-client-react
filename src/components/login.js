import React,{useState} from "react";
import {Link, useHistory} from 'react-router-dom'
import {connect} from 'react-redux';
import userActions from "../actions/user-actions";

const Login = ({loginUser}) => {
    const [credentials, setCredentials] = useState({username: '', password: ''})
    const history = useHistory()
    const login = () => {
        loginUser(credentials)
        history.push('/home')
    }

    return(
        <div className="container-fluid">
            <h1 className="afo-purple">Login</h1>
            <div className="row">
                <div className="col-2">
                    <h3 className="afo-dark-purple">Username</h3>
                </div>
                <div className="col-8">
                    <input
                        value={credentials.username}
                        onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
                        className="form-control"
                        placeholder="username"/>
                </div>
            </div>

            <div className="row">
                <div className="col-2">
                    <h3 className="afo-dark-purple">Password</h3>
                </div>
                <div className="col-8">
                    <input
                        value={credentials.password}
                        onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
                        className="form-control"
                        placeholder="password"/>
                </div>
            </div>

            <div className="row">
                <div className="col-2">
                    <button
                        onClick={login}
                        className="btn btn-primary">
                        Login
                    </button>

                    <Link to="/registration">
                        Register
                    </Link>
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


