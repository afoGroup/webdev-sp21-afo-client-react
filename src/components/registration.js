import React, {useEffect, useState} from "react";
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import userActions from "../actions/user-actions";
import AfoNavbar from "./navbar/afo-navbar";
import userService from "../services/user-service";

const Registration = ({registerMyUser}) => {
    const [credentials, setCredentials] = useState({
        username: '',
        email: '',
        password: '',
        usertype: '',
        bio: '',
        instagram: '',
        twitter: '',
        pictureURL: ''
    });
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPW, setVerifyPW] = useState("");
    const [type, setType] = useState("weeb");
    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [cardNum, setCardNum] = useState("");

    const [alertUsername, setAlertUsername] = useState(false);
    const [alertEmail, setAlertEmail] = useState(false);
    const [alertPassword, setAlertPassword] = useState(false);
    const [alertCard, setAlertCard] = useState(false);
    const [alertVerifyPassword, setAlertVerify] = useState(false);
    const [alertDupeUsername, setAlertDupeUsername] = useState(false);

    const register = () => {
        setCredentials({
            username: username,
            email: email,
            password: password,
            usertype: type,
            bio: '',
            instagram: instagram,
            twitter: twitter,
            pictureURL: imageUrl,
        });
        console.log("registerClicked" + credentials);
        userService.registerUser(credentials)
            .then((actualUser) => {
                if (actualUser === "username already exists") {
                    setAlertDupeUsername(true);
                } else {
                    userService.login(credentials)
                        .then((createdUser) => {
                            history.push(`/user/${createdUser._id}`)
                        })
                }
            })
    };
        // registerMyUser(credentials).then(user => {
        //     (user === 0)? history.push(`user/profile`) : alert("Username has already been taken.")
        // })
    // };

    const registerClicked = () => {
        if (username === "") {
            setAlertUsername(true);
        } else {
            setAlertUsername(false);
        }

        if (email === "" || password === "") {
            setAlertEmail(true);
        } else {
            setAlertEmail(false);
        }

        if (password === "") {
            setAlertPassword(true);
        } else {
            setAlertPassword(false);
        }

        if (type === "otaku" && cardNum === "") {
            setAlertCard(true);
        } else {
            setAlertCard(false);
        }

        if (password !== verifyPW) {
            setAlertVerify(true);
        } else {
            setAlertVerify(false);
        }

        // if(username !== "" && email !== "" && password !== ""){
        //     register();
        // }

        if (!(alertUsername || alertEmail || alertPassword || alertCard || alertVerifyPassword)) {
            register();
        }
    };
            // setCredentials({
            //     username: username,
            //     email: email,
            //     password: password,
            //     usertype: type,
            //     bio: '',
            //     instagram: instagram,
            //     twitter: twitter,
            //     pictureURL: imageUrl,
            // });
        //     console.log("registerClicked" + credentials);
        //     userService.registerUser(credentials)
        //         .then((actualUser) => {
        //             if (actualUser === "username already exists") {
        //                 setAlertDupeUsername(true);
        //             } else {
        //                 userService.login(credentials)
        //                     .then((createdUser) => {
        //                         history.push(`/user/${createdUser._id}`)
        //                     })
        //             }
        //         })
        // }


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
                                        <p className="float-right text-danger font-weight-bold">* required</p>
                                        <br/>
                                        {
                                            (alertUsername || alertEmail || alertPassword || alertCard) &&
                                            <div className="alert alert-danger" role="alert">
                                                Please complete the required fields
                                            </div>
                                        }
                                        {
                                            alertVerifyPassword &&
                                            <div className="alert alert-danger" role="alert">
                                                Please make sure your passwords match
                                            </div>
                                        }
                                        {
                                            alertDupeUsername &&
                                            <div className="alert alert-danger" role="alert">
                                                Please select different username. Username taken
                                            </div>
                                        }
                                        <br/>
                                        <label>
                                            <span className="text-danger font-weight-bold">*</span> Username:
                                        </label>
                                        <input type="text"
                                               name="login-group"
                                               className="form-control mb-2"
                                               value={username}
                                               onChange={(e) => setUsername(e.target.value)}/>
                                        <label>
                                            <span className="text-danger font-weight-bold">*</span> Email:
                                        </label>
                                        <input type="email"
                                               name="login-group"
                                               className="form-control mb-2"
                                               value={email}
                                               onChange={(e) => setEmail(e.target.value)}/>
                                        <label>
                                            <span className="text-danger font-weight-bold">*</span> Password:
                                        </label>
                                        <input type="password"
                                               name="login-group"
                                               className="form-control mb-2"
                                               value={password}
                                               onChange={(e) => setPassword(e.target.value)}/>
                                        <label>
                                            <span className="text-danger font-weight-bold">*</span> Verify Password:
                                        </label>
                                        <input type="password"
                                               name="login-group"
                                               className="form-control mb-2"
                                               value={verifyPW}
                                               onChange={(e) => setVerifyPW(e.target.value)}/>
                                        <label>
                                            <span className="text-danger font-weight-bold">*</span> Account Type:
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
                                        <input type="url"
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
});

const dispatchToPropertiesManager = (dispatch) => ({
    registerMyUser: (user) => userActions.registerUser(dispatch, user)
});

export default connect(stateToPropertiesManager, dispatchToPropertiesManager)(Registration);