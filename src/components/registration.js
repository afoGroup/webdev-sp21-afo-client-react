import React,{useState} from "react";
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import userActions from "../actions/user-actions";

const Registration = ({registerUser}) => {
    const [credentials, setCredentials] = useState({username: '', password: ''})
    const history = useHistory()
    const register = () => {
        registerUser(credentials)
        history.push('/home')
    }

    return(
        <div>
            <h1>Registration</h1>
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
                onClick={register}
                className="btn btn-primary">
                Register
            </button>
            <Link to="/login">
                Login
            </Link>
        </div>
    )
};

const stateToPropertiesManager = (state) => ({
    user: state.userReducer.user
})

const dispatchToPropertiesManager = (dispatch) => ({
    registerUser: (user) => userActions.registerUser(dispatch, user)
})

export default connect(stateToPropertiesManager, dispatchToPropertiesManager)(Registration);