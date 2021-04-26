import React, {useEffect, useState} from "react";
import AfoNavbar from "../navbar/afo-navbar";
import '../../styles/afo-profile.css';
import userActions from "../../actions/user-actions";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import userService from "../../services/user-service";

const Settings = () => {
    const {userId} = useParams();
    const [imgUrl, setImageUrl] = useState(currentUser.pictureURL);
    const [username, setUsername] = useState(currentUser.username);
    const [email, setEmail] = useState(currentUser.email);
    const [password, setPassword] = useState(currentUser.password);
    const [type, setType] = useState(currentUser.userType);
    const [twitter, setTwitter] = useState(currentUser.twitter);
    const [instagram, setInstagram] = useState(currentUser.instagram);
    const [cardNum, setCardNum] = useState('');
    const [bio, setBio] = useState(currentUser.bio);
    const [currentUser, setCurrentUser] = useState({});
    const [loginState, setCurrentLoginState] = useState("logged-out");

    useEffect(() => {
        userService.getCurrentUser()
            .then((actualUser) => {
                if(actualUser && actualUser !== "no currentUser"){
                    setCurrentUser(actualUser);
                }
            });

    }, [userId]);


    const updateUser = () => {
        //
    };

    const manageGroups = () => {
        //
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
                                    <div className="col-12 col-md-6 p-4">


                                        <br/>
                                        <label>
                                            <strong>Username: </strong>
                                        </label>
                                        <input type="text"
                                               name="login-group"
                                               className="form-control mb-2"
                                               value={username}
                                               onChange={(e) => setUsername(e.target.value)}/>
                                        <label>
                                            <strong>Email: </strong>
                                        </label>
                                        <input type="text"
                                               name="login-group"
                                               className="form-control mb-2"
                                               value={email}
                                               onChange={(e) => setEmail(e.target.value)}/>
                                        <label>
                                            <strong>Password: </strong>
                                        </label>
                                        <input type="text"
                                               name="login-group"
                                               className="form-control mb-2"
                                               value={password}
                                               onChange={(e) => setPassword(e.target.value)}/>
                                        <label>
                                            <strong>Account Type: </strong>
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
                                                    <strong>Credit Card Info: </strong>
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
                                                       onChange={(e) => setTwitter(e.target.value)}
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
                                                       onChange={(e) => setInstagram(e.target.value)}
                                                       placeholder="Username"/>
                                            </div>
                                        </div>
                                        <label>
                                            <strong>Bio: </strong>
                                        </label>
                                        <textarea rows="4" className="form-control">{bio}</textarea>




                                    </div>
                                    <div className="col-12 col-md-6 p-4">
                                        { currentUser.pictureURL &&
                                            <img
                                                src={currentUser.pictureURL}
                                                className="profile-img mb-2"
                                                alt={`${currentUser.username} profile image`}
                                            />
                                        }
                                        { currentUser.pictureURL === undefined &&
                                        <img
                                            src="https://www.iotric.com/assets/images/dummy.png"
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
                                                    onChange={(e) => setImageUrl(e.target.value)}
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

                                <div className="row">
                                    <div className="col-12 my-5 pl-4">
                                        <button
                                            onClick={() => manageGroups()}
                                            type="button"
                                            className="btn btn-secondary">
                                            Manage Groups
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