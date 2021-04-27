import React, {useEffect, useState} from "react";
import AfoNavbar from "../navbar/afo-navbar";
import '../../styles/afo-profile.css';
import {useParams} from "react-router-dom";
import userService from "../../services/user-service";
import {DEFAULT_USER_IMAGE} from "../../constants/api-urls";

const Settings = () => {
    const {userId} = useParams();
    const [imgUrl, setImageUrl] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("");
    const [twitter, setTwitter] = useState("");
    const [instagram, setInstagram] = useState("");
    const [cardNum, setCardNum] = useState("");
    const [bio, setBio] = useState("");
    const [currentUser, setCurrentUser] = useState({});

    const [alertEmail, setAlertEmail] = useState(false);
    const [alertPassword, setAlertPassword] = useState(false);
    const [alertCard, setAlertCard] = useState(false);
    const [alertUpdateSuccess, setUpdateSuccess] = useState(false);

    useEffect(() => {
        userService.getCurrentUser()
            .then((actualUser) => {
                if(actualUser && actualUser.username !== "wbdv-afo-logged-out"){
                    setCurrentUser(actualUser);
                    setUsername(actualUser.username);
                    setEmail(actualUser.email);
                    setPassword(actualUser.password);
                    setType(actualUser.userType);
                    setBio(actualUser.bio);
                    setTwitter(actualUser.twitter);
                    setInstagram(actualUser.instagram);
                }
            });

    }, [userId]);

    const update = () => {
        setCurrentUser({
            _id: userId,
            password: password,
            userType: type,
            email: email,
            instagram: instagram,
            twitter: twitter,
            pictureURL: imgUrl
        })
        console.log("Updating User: " + JSON.stringify(currentUser))
        console.log("Updating UserID: " + userId)
        userService.updateUser(userId, currentUser)
            .then(() => {
                setUpdateSuccess(true);
            })
            .catch((error) => {
                console.log(error);
            })
    };


    const updateUser = () => {
        if (email === "") {
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
        if (!(alertEmail || alertPassword || alertCard)) {
            update();
        }

    };

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <AfoNavbar/>
                    <div className="row top-row">
                        <div className="col-12">
                            <div className="profile-container">
                                <div className="row">
                                    <div className="form col-12 col-md-6 p-4">
                                        <p className="float-right text-danger font-weight-bold">* required</p>
                                        <br/>
                                        {
                                            (alertEmail || alertPassword || alertCard) &&
                                            <div className="alert alert-danger" role="alert">
                                                Please make sure the the required fields aren't empty
                                            </div>
                                        }
                                        {
                                            alertUpdateSuccess &&
                                            <div className="alert alert-success" role="alert">
                                                User information has been updated
                                            </div>
                                        }
                                        <label>
                                            <strong><span className="text-danger">*</span> Username: </strong>
                                        </label>
                                        <input
                                               name="login-group"
                                               className="px-3 mb-2 form-control-plaintext bg-light"
                                               value={username}
                                               disabled={true}
                                               />
                                        <label>
                                            <strong><span className="text-danger">*</span> Email: </strong>
                                        </label>
                                        <input type="text"
                                               name="login-group"
                                               className="form-control mb-2"
                                               value={email}
                                               onChange={(e) => {
                                                   setUpdateSuccess(false)
                                                   setEmail(e.target.value)
                                               }}/>
                                        <label>
                                            <strong><span className="text-danger">*</span> Password: </strong>
                                        </label>
                                        <input type="text"
                                               name="login-group"
                                               className="form-control mb-2"
                                               value={password}
                                               onChange={(e) => {
                                                   setUpdateSuccess(false)
                                                   setPassword(e.target.value)
                                               }}/>
                                        <label>
                                            <strong><span className="text-danger">*</span> Account Type: </strong>
                                        </label>
                                        <select name="login-group"
                                                className="form-control mb-2"
                                                value={type}
                                                onChange={(e) => {
                                                    setUpdateSuccess(false)
                                                    setType(e.target.value)
                                                }}>
                                            <option value="weeb">Weeb (Default)</option>
                                            <option value="otaku">Otaku (Paid)</option>
                                        </select>

                                        {
                                            type === "otaku" &&
                                            <>
                                                <label>
                                                    <strong><span className="text-danger">*</span> Credit Card Info: </strong>
                                                </label>
                                                <input type="text"
                                                       name="login-group"
                                                       className="form-control mb-2"
                                                       value={cardNum}
                                                       onChange={(e) => {
                                                           setCardNum(e.target.value)
                                                           setUpdateSuccess(false)
                                                       }}/>
                                            </>
                                        }

                                        <br/>
                                        <label>
                                            <strong>Twitter: </strong>
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
                                                       onChange={(e) => {
                                                           setUpdateSuccess(false)
                                                           setTwitter(e.target.value)
                                                       }}
                                                       placeholder="Username"/>
                                            </div>
                                        </div>
                                        <label>
                                            <strong>Instagram: </strong>
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
                                                       onChange={(e) => {
                                                           setUpdateSuccess(false)
                                                           setInstagram(e.target.value)
                                                       }}
                                                       placeholder="Username"/>
                                            </div>
                                        </div>
                                        <label>
                                            <strong>Bio: </strong>
                                        </label>
                                        <textarea rows="4" className="form-control" value={bio}
                                                  onChange={(e) => {
                                                      setUpdateSuccess(false)
                                                      setBio(e.target.value)
                                                  }}/>

                                    </div>
                                    <div className="col-12 col-md-6 p-4">
                                        { currentUser.pictureURL !== "" &&
                                            <img
                                                src={currentUser.pictureURL}
                                                className="profile-img mb-2"
                                                alt={`${currentUser.username} profile image`}
                                            />
                                        }
                                        { currentUser.pictureURL === "" &&
                                        <img
                                            src={DEFAULT_USER_IMAGE}
                                            className="profile-img mb-2"
                                            alt={`${currentUser.username} profile image`}
                                        />
                                        }
                                        <div>
                                            <label>
                                                <strong>Profile Image Url: </strong>
                                            </label>
                                            <div className="profile-img-info">
                                                <input
                                                    value={imgUrl}
                                                    onChange={(e) => {
                                                        setUpdateSuccess(false)
                                                        setImageUrl(e.target.value)
                                                    }}
                                                    type="text"
                                                    name="profile-group"
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-12 my-5 pl-4">
                                        <button
                                            onClick={() => updateUser()}
                                            type="button"
                                            className="btn btn-secondary">
                                            Update Profile
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

export default Settings;