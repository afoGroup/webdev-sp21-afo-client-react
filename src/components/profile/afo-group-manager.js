import React, {useEffect, useState} from "react";
import AfoNavbar from "../navbar/afo-navbar";
import settingsPage from "./afo-settings";
import '../../styles/afo-profile.css';
import {useParams} from "react-router-dom";
import userService from "../../services/user-service";
import animeService from "../../services/anime-service";

const GroupManager = () => {

    const {userId} = useParams();

    const [currentUser, setCurrentUser] = useState({});
    const [memberGroups, setMemberGroups] = useState([]);
    const [ownerGroups, setOwnerGroups] = useState([]);

    useEffect(() => {
        userService.findUserById(userId)
            .then((actualUser) => {
                setCurrentUser(actualUser)
            })
    }, [userId]);

    useEffect(() => {
        if(currentUser.clubs){
            clubService
            animeService.findAnimeByID(currentGroup.animeId)
                .then((actualAnime) => {
                    setGroupAnime(actualAnime)
                })
        }
        if(currentUser.ownerClubs){
            console.log('GroupOwner: ' + currentGroup.owner);
            userService.findUserById(currentGroup.owner)
                .then((actualOwner) => {
                    setGroupOwner(actualOwner)
                })
        }
    }, [currentGroup]);

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <AfoNavbar/>
                    <div className="row top-row">
                        <div className="col-12">

                            <div className="row">
                                <div className="col-12">
                                    <h1 className="afo-purple afo-header">Group Manager: {currentUser.username}</h1>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    {
                                        currentUser && currentUser.userType && currentUser.userType === "otaku" &&
                                        <>
                                            <div className="row">
                                                <div className="col-12 my-5 pl-4">
                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary">
                                                        Manage Groups
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GroupManager;