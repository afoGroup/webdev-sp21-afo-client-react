import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import postActions from '../../actions/post-actions';
import AfoNavbar from "../navbar/afo-navbar";
import Post from "./afo-post";
import '../../styles/afo-group.css';
import {useParams} from "react-router-dom";
import groupService from "../../services/group-service";
import userService from "../../services/user-service";
import animeService from "../../services/anime-service";
import {LOGIN_STATE} from "../../actions/user-constants";

const Group = () => {
    const {groupId} = useParams();

    const [postBoxStatus, setPostBoxStatus] = useState(false);
    const [postText, setPostText] = useState("");

    const [currentGroup, setCurrentGroup] = useState({});
    const [groupAnime, setGroupAnime] = useState({});
    const [groupOwner, setGroupOwner] = useState({});
    const [currentUser, setCurrentUser] = useState({});
    const [loginState, setLoginState] = useState(LOGIN_STATE.LOGGED_OUT);

    useEffect(() => {
        groupService.findGroupById(groupId)
            .then((actualGroup) => {
                setCurrentGroup(actualGroup)
            });

        userService.getCurrentUser()
            .then((actualUser) => {
                console.log("(navabr): " + actualUser);
                if(actualUser === undefined || actualUser.username === "wbdv-afo-logged-out"){
                    setLoginState(LOGIN_STATE.LOGGED_OUT)
                } else {
                    console.log("(navbar) user: " + actualUser.username + " & " + actualUser._id);
                    setCurrentUser(actualUser);
                    setLoginState(LOGIN_STATE.LOGGED_IN);
                }
            }).catch(error => {
                console.log(error)
            })

    }, [groupId]);

    useEffect(() => {
        if(currentGroup.animeId){
            animeService.findAnimeByID(currentGroup.animeId)
                .then((actualAnime) => {
                    setGroupAnime(actualAnime)
                })
        }
        if(currentGroup.owner){
            userService.findUserById(currentGroup.owner)
                .then((actualOwner) => {
                    setGroupOwner(actualOwner)
                })
        }
    }, [currentGroup]);

    const joinGroup = () => {
        // include join group logic
    };

    const submitPost = () => {
        //include add post logic
    };

    return(
        <div className="container-fluid">
            <div className="row group-bg">

                <div className="col-12">
                    <AfoNavbar/>

                    <div className="row top-row">
                        <div className="col-12 group-page-bg">





                            <div className="row">
                                <div className="col-12">

                                    <div className="row mt-4">
                                        <div className="col-12 group-info-box">

                                            <div className="row">
                                                <div className="col-12">
                                                    <img
                                                        src={currentGroup.pictureURL}
                                                        className="group-img mb-4"
                                                        alt={`Group, ${currentGroup.title}`}/>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">

                                                    {
                                                        currentGroup && currentGroup.owner &&
                                                        <>
                                                            <h4 className="group-title-box py-2"><strong>{currentGroup.title}</strong></h4>
                                                            <p className="group-title float-right">
                                                                <strong>{`Group Owner: `}</strong>
                                                                <a className="afo-purple" href={`/profile/${currentGroup.owner}`}>
                                                                    {currentGroup.owner.username}
                                                                </a>
                                                            </p>
                                                        </>
                                                    }
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    {
                                                        currentGroup.animeId && groupAnime.title &&
                                                        <>
                                                            <p><strong>Group Anime: </strong>
                                                                <a className="afo-purple" href={`/anime/${currentGroup.animeId}`}>
                                                                    {groupAnime.title}
                                                                </a>
                                                            </p>
                                                        </>
                                                    }
                                                    {
                                                        currentGroup.bio &&
                                                        <p>{currentGroup.bio}</p>
                                                    }
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    {
                                                        loginState === LOGIN_STATE.LOGGED_IN &&
                                                        <button type="button"
                                                                className="btn group-btn"
                                                                onClick={() => joinGroup()}>
                                                            <strong className="afo-white">JOIN</strong>
                                                        </button>
                                                    }
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 group-info-box">
                                    <p className="group-title-box"></p>

                                    <div className="row">
                                        <div className="col-12 mb-4">
                                            <button type="button"
                                                    className="btn btn-outline-secondary float-right"
                                                    onClick={() => setPostBoxStatus(!postBoxStatus)}>
                                                <strong>+ POST</strong>
                                            </button>
                                        </div>
                                    </div>
                                    {
                                        postBoxStatus &&
                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group afo-post-input-box">
                                                    <textarea name="post-input"
                                                              value={postText}
                                                              onChange={(e) => setPostText(e.target.value)}
                                                              className="form-control"></textarea>
                                                    <br/>
                                                    <button type="button"
                                                            name="post-input"
                                                            className="btn btn-secondary form-control mb-4"
                                                            onClick={() => submitPost()}>
                                                        <strong>SUBMIT</strong>
                                                    </button>
                                                </div>
                                                <p className="group-title-box"></p>
                                            </div>
                                        </div>
                                    }

                                    <div className="row">
                                        <div className="col-12 mb-5">
                                            {
                                                currentGroup.postList && currentGroup.postList.length > 0 &&
                                                <>
                                                    {
                                                        currentGroup.postList.map((post, index) =>
                                                            <Post key={index} post={post}/>)
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

            </div>
        </div>
    )
};

const stateToPropertiesManager = (state) => ({
    posts: state.postReducer.posts
});

const dispatchToPropertiesManager = (dispatch) => ({
    findAllPosts: () => postActions.findAllPosts(dispatch),
    findPostById: (pid) => postActions.findPostById(dispatch, pid),
    findPostsForGroups: (gid) => postActions.findPostsForGroups(dispatch, gid),
    createPost: (post) => postActions.createPost(dispatch, post),
    deletePost: (pid) => postActions.deletePost(dispatch, pid)
});

export default connect(stateToPropertiesManager, dispatchToPropertiesManager)(Group);