import React, {useEffect, useState} from "react";
import AfoNavbar from "../navbar/afo-navbar";
import settingsPage from "./afo-settings";
import {Link, useHistory, useParams} from "react-router-dom";
import userService from "../../services/user-service";
import groupService from "../../services/group-service";
import animeService from "../../services/anime-service";
import '../../styles/afo-profile.css';

const GroupManager = () => {

    const {userId} = useParams();

    const history = useHistory();

    const [currentUser, setCurrentUser] = useState({});
    const [memberGroups, setMemberGroups] = useState([]);
    const [ownerGroups, setOwnerGroups] = useState([]);

    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newPictureURL, setNewPictureURL] = useState("");
    const [newAnimeId, setNewAnimeId] = useState("");
    const [animeInput, setAnimeInput] = useState("");
    const [animeSearchResult, setAnimeSearchResult] = useState([]);
    const [animeSelected, setAnimeSelected] = useState("");
    const [aniSearchStatus, setAniSearchStatus] = useState(false);

    const [createdGroup, setCreatedGroup] = useState({});

    const [groupFormStatus, setGroupFormStatus] = useState(false);

    useEffect(() => {
        userService.findUserById(userId)
            .then((actualUser) => {
                setCurrentUser(actualUser)
            })
    }, [userId]);

    useEffect(() => {
        console.log('curentUser: ' + currentUser.username);
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

    const joinGroup = (group, groupId) => {
        console.log('groupId: ' + groupId);
        console.log('clubsList:' + currentUser.ownerClubs);
        console.log('clubsList JSON.stringify:' + JSON.stringify(currentUser.ownerClubs));
        let newClubs = [...currentUser.ownerClubs, groupId];
        console.log('newClubs: ' + newClubs.toString());
        const updateUser = {
            ...currentUser,
            ownerClubs: newClubs
        };
        console.log('updated Club: ' + JSON.stringify(updateUser));
        console.log("updateUser in JoinGroup:" + updateUser.clubs.toString());
        userService.updateUser(currentUser._id, updateUser)
            .then(() => {
                    setCurrentUser(updateUser);
                }
            )
    };

    const addGroup = () => {
        setGroupFormStatus(false);
        setNewTitle("");
        setNewDescription("");
        setNewPictureURL("");
        setNewAnimeId("");
        setAnimeInput("");
        setAnimeSearchResult([]);
        setAnimeSelected("");
        setAniSearchStatus(false);

        let newGroup = {
            title: newTitle,
            description: newDescription,
            pictureURL: newPictureURL,
            createdDate: Date.now(),
            animeId: newAnimeId,
            ownerId: currentUser._id
        };
        groupService.createGroup(newGroup)
            .then(group => {
                joinGroup(group, group._id)
            }).catch(error => console.log(error))
    };

    const deleteGroup = (groupId) => {
        groupService.deleteGroup(groupId)
            .then(() => {
                setCurrentUser(currentUser);
            })
            .catch(error => console.log(error))
    };

    const searchAnime = () => {
        animeService.findAnimeByTitle(animeInput)
            .then(result => {
                console.log('anime resuts: ' + result);
                setAnimeSearchResult(result);
                setAniSearchStatus(true);
            })
            .catch(error => console.log(error))
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
                                    <h1 className="afo-purple afo-header pt-4">Group Manager</h1>
                                    <h5>{currentUser.username}</h5>
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
                                                        Create New Group
                                                    </button>
                                                </div>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 mb-4">
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
                                            <label>
                                                <strong>New Group Description: </strong>
                                            </label>
                                            <textarea name="new-group"
                                                      value={newDescription}
                                                      onChange={(e) => setNewDescription(e.target.value)}
                                                      className="form-control"></textarea>
                                            <label>
                                                <strong>New Group Image URL: </strong>
                                            </label>
                                            <input type="text"
                                                   name="new-group"
                                                   className="form-control mb-2"
                                                   value={newPictureURL}
                                                   onChange={(e) => setNewPictureURL(e.target.value)}/>
                                            <label>
                                                <strong>Group Anime: </strong>
                                            </label>
                                            <input type="text"
                                                   name="new-group"
                                                   className="form-control mb-2"
                                                   value={animeInput}
                                                   onChange={(e) => setAnimeInput(e.target.value)}/>
                                            <button
                                                type="button"
                                                disabled={aniSearchStatus}
                                                onClick={() => searchAnime()}
                                                className="btn afo-purple">
                                                Search Anime
                                            </button>

                                            {
                                                animeInput !== "" && animeSearchResult && aniSearchStatus &&
                                                <>
                                                    <p>{animeSearchResult.length} Results for {animeInput}</p>
                                                    <ul className="mini-anime-search">
                                                        {
                                                            animeSearchResult.results &&
                                                            animeSearchResult.results.map((result, index) =>
                                                                <li key={index}>
                                                                    <p onClick={() => {
                                                                        setNewAnimeId(result.mal_id);
                                                                        setAnimeSelected(result.title);
                                                                    }}>
                                                                        {result.title}
                                                                    </p>
                                                                </li>
                                                            )
                                                        }
                                                    </ul>
                                                    {
                                                        newAnimeId !== "" &&
                                                        <>
                                                            <p className="mt-3">Selected Group Anime: {animeSelected}</p>
                                                        </>
                                                    }
                                                </>
                                            }


                                            <button
                                                type="button"
                                                onClick={() => addGroup()}
                                                className="btn btn-secondary float-right">
                                                + Add Group
                                            </button>

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
                                                    <Link to={`/details/group/${mGroup._id}`}>
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
                                                            <Link to={`/details/group/${oGroup._id}`}>
                                                                {oGroup.title}{` `}
                                                            </Link>
                                                            <i className="fa fa-times float-right afo-group-delete"
                                                               onClick={() => deleteGroup(oGroup._id)}></i>
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