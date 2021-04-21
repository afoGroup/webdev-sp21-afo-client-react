import React, {useEffect, useState} from "react";
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import userActions from "../actions/user-actions";
import AfoNavbar from "./navbar/afo-navbar";

const Registration = ({registerMyUser}) => {
    const [credentials, setCredentials] = useState({
        // req fields
        password: '',
        username: '',
        usertype: '',

        // opt fields
        bio: '',
        email: '',
        instagram: '',
        pictureurl: '',
        twitter: ''
    })
    const history = useHistory()
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("weeb");
    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [cardNum, setCardNum] = useState("");

    const [alertUsername, setAlertUsername] = useState(false);
    const [alertEmail, setAlertEmail] = useState(false);
    const [alertPassword, setAlertPassword] = useState(false);
    const [alertCard, setAlertCard] = useState(false);

    const [createdStatus, setCreatedStatus] = useState(false);
    const [newUserId, setNewUserId] = useState('');

    const register = () => {
        setCredentials({
            password: password,
            username: username,
            usertype: type,
            bio: '',
            email: email,
            instagram: instagram,
            pictureurl: imageUrl,
            twitter: twitter
        })
        registerMyUser(credentials)
        history.push('/home')
    }

    useEffect(() => {
        if(createdStatus){
            window.open('/profile/'+newUserId, '_blank');
        }
    }, [createdStatus]);

    const registerClicked = () => {
        if(username === ""){
            setAlertUsername(true);
        } else{
            setAlertUsername(false);
        }

        if(email === "" || password === ""){
            setAlertEmail(true);
        }else{
            setAlertEmail(false);
        }

        if(password === ""){
            setAlertPassword(true);
        }else{
            setAlertPassword(false);
        }

        if(type === "otaku" && cardNum === ""){
            setAlertCard(true);
        }else{
            setAlertCard(false);
        }

        if(username!=="" && email!=="" && password!==""){
            registerUser();
        }
    };

    const registerUser = () => {
        // create user and call dispatch:
        register()



        // once user has been successfully created and stored in the session,
        // I'll get the new user's id and then set createdStatus to true
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
                                    <h1 className="afo-purple afo-header">Registration</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group afo-register-box">
                                        <p className="float-right">* required</p>
                                        <br/>
                                        {
                                            (alertUsername || alertEmail || alertPassword || alertCard) &&
                                            <div className="alert alert-danger" role="alert">
                                                Please complete the required fields
                                            </div>
                                        }
                                        <br/>
                                        <label>
                                            *Username:
                                        </label>
                                        <input type="text"
                                               name="login-group"
                                               className="form-control mb-2"
                                               value={username}
                                               onChange={(e) => setUsername(e.target.value)}/>
                                        <label>
                                            *Email:
                                        </label>
                                        <input type="text"
                                               name="login-group"
                                               className="form-control mb-2"
                                               value={email}
                                               onChange={(e) => setEmail(e.target.value)}/>
                                        <label>
                                            *Password:
                                        </label>
                                        <input type="text"
                                               name="login-group"
                                               className="form-control mb-2"
                                               value={password}
                                               onChange={(e) => setPassword(e.target.value)}/>
                                        <label>
                                            *Account Type:
                                        </label>
                                        <select name="login-group"
                                                className="form-control mb-2"
                                                value={type}
                                                onChange={(e) => setType(e.target.value)}>
                                            <option value="weeb">Weeb (Default)</option>
                                            <option value="otaku">Otaku (Paid)</option>
                                        </select>

                                        {
                                            type === "otaku" &&
                                            <>
                                                <label>
                                                    *Credit Card Info:
                                                </label>
                                                <input type="text"
                                                       name="login-group"
                                                       className="form-control mb-2"
                                                       value={cardNum}
                                                       onChange={(e) => setCardNum(e.target.value)}/>
                                            </>
                                        }

                                        <br/>
                                        <label>
                                            Twitter:
                                        </label>
                                        <div>
                                            <label className="sr-only" htmlFor="twitterHandle">Username</label>
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">@</div>
                                                </div>
                                                <input type="text"
                                                       className="form-control"
                                                       id="twitterHandle"
                                                       value={twitter}
                                                       onChange={(e) => setTwitter(e.target.value)}
                                                       placeholder="Username"/>
                                            </div>
                                        </div>
                                        <label>
                                            Instagram:
                                        </label>
                                        <div>
                                            <label className="sr-only" htmlFor="igHandle">Username</label>
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text">@</div>
                                                </div>
                                                <input type="text"
                                                       className="form-control"
                                                       id="igHandle"
                                                       value={instagram}
                                                       onChange={(e) => setInstagram(e.target.value)}
                                                       placeholder="Username"/>
                                            </div>
                                        </div>
                                        <label>
                                            Profile Photo Link:
                                        </label>
                                        <input type="text"
                                               name="login-group"
                                               value={imageUrl}
                                               onChange={(e) => setImageUrl(e.target.value)}
                                               className="form-control mb-2"/>
                                        <br/>
                                        <button type="button"
                                                className="btn btn-secondary"
                                                onClick={() => registerClicked()}>
                                            Register
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
    registerMyUser: (user) => userActions.registerUser(dispatch, user)
})

export default connect(stateToPropertiesManager, dispatchToPropertiesManager)(Registration);