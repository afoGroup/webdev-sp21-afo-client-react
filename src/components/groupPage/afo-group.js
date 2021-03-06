import React, {useEffect, useState} from "react";
import {connect} from 'react-redux';
import postActions from '../../actions/post-actions';
import AfoNavbar from "../navbar/afo-navbar";
import Post from "./afo-post";
import {useHistory, useParams} from "react-router-dom";
import groupService from "../../services/group-service";
import userService from "../../services/user-service";
import postService from "../../services/post-service";
import animeService from "../../services/anime-service";
import {LOGIN_STATE} from "../../actions/user-constants";
import '../../styles/afo-group.css';

const Group = () => {
    const {groupId} = useParams();
    const history = useHistory();

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
            }).catch(error => console.log(error));

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
        console.log('CurrentGroup: ' + currentGroup);
        if(currentGroup.animeId){
            animeService.findAnimeByID(currentGroup.animeId)
                .then((actualAnime) => {
                    setGroupAnime(actualAnime)
                })
        }
        if(currentGroup.ownerId){
            console.log('GroupOwner: ' + currentGroup.ownerId);
            userService.findUserById(currentGroup.ownerId)
                .then((actualOwner) => {
                    setGroupOwner(actualOwner)
                })
        }
    }, [currentGroup]);

    const joinGroup = () => {
        let newClubs = [...currentUser.clubs, groupId];
        const updateUser = {
            ...currentUser,
            clubs: newClubs
        };
        userService.updateUser(currentUser._id, updateUser)
            .then(() => {
                setCurrentUser(updateUser);
                }
            )
    };

    const leaveGroup = () => {
        const userLeaving = {
            ...currentUser,
            clubs: currentUser.clubs.filter(clubId => clubId !== groupId)
        };
        userService.updateUser(currentUser._id, userLeaving)
            .then(() => {
                setCurrentUser(userLeaving);
            })
    };

    const submitPost = () => {
        const newPost = {
            text: postText,
            ownerId: currentUser._id,
            groupId: groupId,
            createdDate: Date.now()
        };
        postService.createPost(groupId, newPost)
            .then((post) => {
                const postInGroup = {
                    ...currentGroup,
                    posts: [...currentGroup.posts, post._id]
                };
                groupService.updateGroup(groupId, postInGroup)
                    .then(() => {
                        setCurrentGroup(postInGroup);
                        setPostBoxStatus(false);
                        setPostText("");
                    }).catch(error => console.log(error))
            })
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
                                                        currentGroup && groupOwner.username &&
                                                        <>
                                                            <h4 className="group-title-box py-2"><strong>{currentGroup.title}</strong></h4>
                                                            <p className="group-title float-right">
                                                                <strong>{`Group Owner: `}</strong>
                                                                <a className="afo-purple" href={`/profile/${currentGroup.owner}`}>
                                                                    {groupOwner.username}
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
                                                                <a className="afo-purple" href={`/details/anime/${currentGroup.animeId}`}>
                                                                    {groupAnime.title}
                                                                </a>
                                                            </p>
                                                        </>
                                                    }
                                                    {
                                                        currentGroup.description &&
                                                        <p>{currentGroup.description}</p>
                                                    }
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    {
                                                        (currentUser._id !== groupOwner._id) &&
                                                        loginState === LOGIN_STATE.LOGGED_IN &&
                                                        (!currentUser.clubs.includes(currentGroup._id)) &&
                                                        <button type="button"
                                                                className="btn group-btn"
                                                                onClick={() => joinGroup()}>
                                                            <strong className="afo-white">JOIN</strong>
                                                        </button>
                                                    }
                                                    {
                                                        (currentUser._id !== groupOwner._id) &&
                                                        loginState === LOGIN_STATE.LOGGED_IN &&
                                                        (currentUser.clubs.includes(currentGroup._id)) &&
                                                        <button type="button"
                                                                className="btn group-btn"
                                                                onClick={() => leaveGroup()}>
                                                            <strong className="afo-white">LEAVE GROUP</strong>
                                                        </button>
                                                    }
                                                    {
                                                        (currentUser._id !== groupOwner._id) &&
                                                        loginState === LOGIN_STATE.LOGGED_OUT &&
                                                        <button type="button"
                                                                className="btn group-btn btn-block my-3"
                                                                onClick={() => {history.push("/login")}}>
                                                            <strong className="afo-white">Login to join group & post</strong>
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
                                            {
                                                ((currentUser._id === groupOwner._id) ||
                                                    (loginState === LOGIN_STATE.LOGGED_IN &&
                                                    (currentUser.clubs.includes(currentGroup._id)))) &&
                                                <button type="button"
                                                        className="btn btn-outline-secondary float-right"
                                                        onClick={() => setPostBoxStatus(!postBoxStatus)}>
                                                    <strong>+ POST</strong>
                                                </button>
                                            }
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
                                                currentGroup.posts && currentGroup.posts.length > 0 &&
                                                <>
                                                    {
                                                        currentGroup.posts.map((postId, index) =>
                                                                <Post
                                                                    key={index}
                                                                    ownerStatus={groupOwner._id === currentUser._id}
                                                                    group={currentGroup}
                                                                    postId={postId}
                                                                    setCurrentGroup={setCurrentGroup}
                                                                />
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