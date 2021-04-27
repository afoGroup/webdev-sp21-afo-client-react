import React, {useEffect, useState} from "react";
import AfoNavbar from "../navbar/afo-navbar";
import settingsPage from "./afo-settings";
import '../../styles/afo-profile.css';
import {Link, useParams} from "react-router-dom";
import userService from "../../services/user-service";
import groupService from "../../services/group-service";

const GroupManager = () => {

    const {userId} = useParams();

    const [currentUser, setCurrentUser] = useState({});
    const [memberGroups, setMemberGroups] = useState([]);
    const [ownerGroups, setOwnerGroups] = useState([]);

    const [newTitle, setNewTitle] = useState("");

    const [groupFormStatus, setGroupFormStatus] = useState(false);

    useEffect(() => {
        userService.findUserById(userId)
            .then((actualUser) => {
                setCurrentUser(actualUser)
            })
    }, [userId]);

    useEffect(() => {
        if(currentUser.clubs){
            console.log('currentUser clubs: ' + currentUser.clubs);
            groupService.findGroupsById(currentUser.clubs)
                .then(memberResults => setMemberGroups(memberResults))
                .catch(error => console.log(error))
        }
        if(currentUser.ownerClubs && currentUser.userType === "otaku"){
            console.log('currentUser ownerClubs: ' + currentUser.ownerClubs);
            groupService.findGroupsById(currentUser.ownerClubs)
                .then(ownerResults => setOwnerGroups(ownerResults))
                .catch(error => console.log(error))
        }
    }, [currentUser]);

    const addGroup = () => {
        //
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
                                    <h1 className="afo-purple afo-header pt-4">Group Manager: {currentUser.username}</h1>
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
                                                        onClick={() => setGroupFormStatus(!groupFormStatus)}
                                                        className="btn btn-outline-secondary float-right">
                                                        + Add Group
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    {
                                        groupFormStatus &&
                                        <>
                                            <label>
                                                <strong>New Group Name: </strong>
                                            </label>
                                            <input type="text"
                                                   name="new-group"
                                                   className="form-control mb-2"
                                                   value={newTitle}
                                                   onChange={(e) => setNewTitle(e.target.value)}/>
                                        </>
                                    }
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6 pl-3">
                                    <p className="afo-dark-purple"><strong>Member Groups</strong></p>
                                    <p>total: {memberGroups.length}</p>
                                    <ul>
                                        {
                                            memberGroups.map((mGroup, index) =>
                                                <li key={index}>
                                                    <Link to={`/group/${mGroup._id}`}>
                                                        {mGroup.title}
                                                    </Link>
                                                </li>
                                            )
                                        }
                                    </ul>
                                </div>
                                <div className="col-6">
                                    {
                                        currentUser && currentUser.userType && currentUser.userType === "otaku" &&
                                        <>
                                            <p className="afo-dark-purple"><strong>Owner Groups</strong></p>
                                            <p>total: {ownerGroups.length}</p>
                                            <ul>
                                                {
                                                    ownerGroups.map((oGroup, index) =>
                                                        <li key={index*2}>
                                                            <Link to={`/group/${oGroup._id}`}>
                                                                {oGroup.title}
                                                            </Link>
                                                        </li>
                                                    )
                                                }
                                            </ul>
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