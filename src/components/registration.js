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
        <div className="container-fluid">
            <h1 className="afo-purple">Registration</h1>
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
                        onClick={register}
                        className="btn btn-primary">
                        Register
                    </button>

                    <Link to="/login">
                        Login
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
    registerUser: (user) => userActions.registerUser(dispatch, user)
})

export default connect(stateToPropertiesManager, dispatchToPropertiesManager)(Registration);