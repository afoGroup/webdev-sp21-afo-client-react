import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import userActions from "../../actions/user-actions";
import userService from "../../services/user-service";
import AfoNavbar from "../navbar/afo-navbar";
import GroupDiscover from "../groupDiscover/group-discover";
import SettingsPage from "./afo-settings";
import '../../styles/afo-profile.css';
import {useDispatch, useSelector} from "react-redux";

const Profile = () => {

    const {userId} = useParams();

    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        console.log('userId-1: ' + userId);

        userService.getCurrentUser()
            .then((actualUser) => {
                if(userId === undefined || actualUser._id !== userId){
                    setCurrentUser(actualUser)
                }
            })
    }, []);

    useEffect(() => {
        console.log('userId-2: ' + userId);
        userService.findUserById(userId)
            .then((actualUser) => {
                if(actualUser._id === userId){
                    setCurrentUser(actualUser)
                }
            })
    }, [userId]);


    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <AfoNavbar/>
                    <div className="row top-row">
                        <div className="col-12">

                            {
                                currentUser &&
                                <>
                                    <div className="row">
                                        <div className="col-12">
                                            <h3 className="afo-purple afo-header">{currentUser.username}</h3>
                                            <p>{currentUser.twitter}</p>
                                            <p>{currentUser.instagram}</p>
                                            {
                                                currentUser.pictureUrl === ''?
                                                    <img
                                                        src={currentUser.pictureUrl}
                                                        className="anime-img"
                                                        alt={`${currentUser.username} profile`}/> : <></>

                                            }
                                        </div>
                                    </div>

                                    <GroupDiscover groupList={currentUser.clubs}/>
                                </>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;