import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
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
    const [currentUserStatus, setCurrentUserStatus] = useState(false);

    useEffect(() => {
        console.log('userId-1: ' + userId);

        userService.getCurrentUser()
            .then((actualUser) => {
                if(userId === undefined || actualUser._id !== userId){
                    setCurrentUser(actualUser);
                    setCurrentUserStatus(true);
                }
            })
    }, []);

    useEffect(() => {
        console.log('userId-2: ' + userId);
        if(userId !== undefined){
            userService.findUserById(userId)
                .then((actualUser) => {
                    if(actualUser._id === userId){
                        setCurrentUser(actualUser)
                    }
                })
        }
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
                                        <div className="col-12 col-md-6 m-4">
                                            <h3 className="afo-purple afo-header">{currentUser.username}</h3>
                                            <p><strong>Twitter: @</strong> {currentUser.twitter}</p>
                                            <p><strong>Instagram: @</strong> {currentUser.instagram}</p>
                                            <p>{currentUser.bio}</p>
                                        </div>
                                        <div className="col-12 col-md-6 m-4">
                                            {
                                                currentUser.pictureUrl !== ''?
                                                    <img
                                                        src={currentUser.pictureUrl}
                                                        className="anime-img"
                                                        alt={`${currentUser.username} profile`}/> : <></>

                                            }
                                        </div>
                                    </div>
                                    <h5>{currentUser.username} Groups:</h5>
                                    <GroupDiscover groupList={currentUser.clubs}/>

                                    {
                                        currentUser.userType === "otaku" &&
                                        <>
                                            <p className="my-2">{currentUser.username} - you can view the groups you own in your
                                                <Link classname="afo-purple" to={`/profile/group-manager/${currentUser._id}`}> Group Manager</Link>
                                            </p>
                                        </>
                                    }
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