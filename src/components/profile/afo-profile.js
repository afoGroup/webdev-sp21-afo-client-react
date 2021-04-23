import React from "react";
import {useParams} from "react-router-dom";
import userActions from "../../actions/user-actions";
import AfoNavbar from "../navbar/afo-navbar";
import GroupDiscover from "../groupDiscover/group-discover";
import SettingsPage from "./afo-settings";
import '../../styles/afo-profile.css';
import {useDispatch, useSelector} from "react-redux";

const Profile = () => {

    const dispatch = useDispatch();
    const {userId} = useParams();

    const currentUser = userActions.findUserById(dispatch, userId);

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <AfoNavbar/>
                    <div className="row top-row">
                        <div className="col-12">

                            <div className="row">
                                <div className="col-12">
                                    <h3 className="afo-purple afo-header">{currentUser.username}</h3>
                                    <p>{currentUser.twitter}</p>
                                    <p>{currentUser.instagram}</p>
                                    {
                                        currentUser.imageUrl === ''?
                                            <img
                                                src={currentUser.image_url}
                                                className="anime-img"
                                                alt={`${currentUser.username} profile`}/> : <></>

                                    }
                                </div>
                            </div>

                            <GroupDiscover groupList={currentUser.clubs}/>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;