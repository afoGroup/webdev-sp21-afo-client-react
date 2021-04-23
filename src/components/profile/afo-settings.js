import React, {useState} from "react";
import AfoNavbar from "../navbar/afo-navbar";
import '../../styles/afo-profile.css';

const Settings = () => {

    const profile = {
        username: 'kris10',
        email: 'kris10@gmail.com',
        password: 'kris1234',
        image_url: 'https://cdn.pixabay.com/photo/2017/04/13/15/19/hands-2227857_960_720.jpg',
        bio: 'This is a test bio so I am just going to type and type and type and type and type ' +
            'and type and type and type and type and type and type and type and type and type ' +
            'and type and type and type and type and type and type and type and type.',
        type: 'otaku',
        cardNum: '123456789',
        twitter: 'kris10',
        instagram: 'kris10'
    };

    const [imgUrl, setImageUrl] = useState(profile.image_url);
    const [username, setUsername] = useState(profile.username);
    const [email, setEmail] = useState(profile.email);
    const [password, setPassword] = useState(profile.password);
    const [type, setType] = useState(profile.type);
    const [twitter, setTwitter] = useState(profile.twitter);
    const [instagram, setInstagram] = useState(profile.instagram);
    const [cardNum, setCardNum] = useState(profile.cardNum);
    const [bio, setBio] = useState(profile.bio);

    const updateUser = () => {
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
                                        <img
                                            src={profile.image_url}
                                            className="profile-img mb-2"
                                            alt={`${profile.username} profile image`}
                                        />
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

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Settings;