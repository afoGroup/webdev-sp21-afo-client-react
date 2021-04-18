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
        <div>
            <h1>Login</h1>
            <input
                value={credentials.username}
                onChange={(e) => {setCredentials({...credentials, username: e.target.value})}}
                className="form-control"
                placeholder="username"/>
            <input
                value={credentials.password}
                onChange={(e) => {setCredentials({...credentials, password: e.target.value})}}
                className="form-control"
                placeholder="password"/>
            <button
                onClick={login}
                className="btn btn-primary">
                Login
            </button>
            <Link to="/registration">
                Register
            </Link>
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


