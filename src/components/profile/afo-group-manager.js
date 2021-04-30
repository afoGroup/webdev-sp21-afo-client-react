import React, {useEffect, useState} from "react";
import AfoNavbar from "../navbar/afo-navbar";
import {Link, useHistory, useParams} from "react-router-dom";
import SimpleDisplay from "../afo-simple-display";
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
                const updateUser = {
                    ...currentUser,
                    ownerClubs: currentUser.ownerClubs.filter(gid => gid !== groupId)
                };
                userService.updateUser(currentUser._id, updateUser)
                    .then(() => {
                            setCurrentUser(updateUser);
                        }
                    )
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
        <div className="container-fluid ml-5">
            <div className="row">
                <div className="col-11">
                    <AfoNavbar/>
                    <div className="row top-row">
                        <div className="col-12">

                            <div className="row">
                                <div className="col-12">
                                    <h1 className="afo-purple pt-4">Group Manager</h1>
                                    <h5 className="afo-purple">{currentUser.username}</h5>
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
                                <div className="col-12 col-md-6">
                                    <p className="afo-dark-purple"><strong>Groups Joined</strong></p>
                                    <p>total: {memberGroups.length}</p>
                                    {
                                        memberGroups.map((mGroup, index) =>
                                            <div className="row">
                                                <SimpleDisplay
                                                    type={'group'}
                                                    linkId={mGroup._id}
                                                    text={mGroup.description}
                                                    header={mGroup.title}
                                                    imageURL={mGroup.pictureURL}/>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="col-12 col-md-6">
                                    {
                                        currentUser && currentUser.userType && currentUser.userType === "otaku" &&
                                        <>
                                            <p className="afo-dark-purple"><strong>Owner Groups</strong></p>
                                            <p>total: {ownerGroups.length}</p>
                                            {
                                                ownerGroups.map((oGroup, index) =>
                                                    <div key={index*2} className="row">
                                                        <SimpleDisplay
                                                            className="col-10"
                                                            type={'group'}
                                                            linkId={oGroup._id}
                                                            text={oGroup.description}
                                                            header={oGroup.title}
                                                            imageURL={oGroup.pictureURL}/>
                                                            <span className="col-1 float-right mr-3">
                                                            <button
                                                                className="btn btn-secondary px-3 fa fa-times fa-lg afo-group-delete mr-3"
                                                                onClick={() => deleteGroup(oGroup._id)}/>
                                                            </span>
                                                    </div>
                                                )
                                            }
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