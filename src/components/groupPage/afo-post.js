import React, {useEffect, useState} from "react";
import groupService from "../../services/group-service";
import userService from "../../services/user-service";
import postService from "../../services/post-service";
import {LOGIN_STATE} from "../../actions/user-constants";
import animeService from "../../services/anime-service";
import {useHistory} from "react-router-dom";

const Post = ({group, ownerStatus, postId, setCurrentGroup}) => {

    const[currentPost, setCurrentPost] = useState({});
    const[postOwner, setPostOwner] = useState({});

    const history = useHistory();

    useEffect(() => {
        postService.findPostById(postId)
            .then((actualPost) => {
                setCurrentPost(actualPost)
            })
    }, [postId]);

    useEffect(() => {
        if(currentPost.owner){
            console.log('GroupOwner: ' + currentPost.owner);
            userService.findUserById(currentPost.owner)
                .then((actualOwner) => {
                    setPostOwner(actualOwner)
                })
        }
    }, [currentPost]);

    const deletePost = () => {
        const updatedGroup = {...group, posts: group.posts.filter(pid => pid!==postId)};
        groupService.updateGroup(group._id, updatedGroup)
            .then((returnedGroup) => {
                postService.deletePost(postId)
                    .then(() => {
                        setCurrentGroup(updatedGroup)
                    })
            })

    };

    return(
        <div className="row">
            <div className="col-12 post-container">
                <div className="post-box">
                    {
                        ownerStatus &&
                        <div className="row">
                            <div className="col-12">
                                <i className="fa fa-times float-right pr-3"
                                   onClick={() => deletePost()}></i>
                            </div>
                        </div>
                    }
                    <div className="row">
                        <div className="col-6">
                            {
                                postOwner && postOwner._id &&
                                <p>
                                    <a className="afo-purple" href={`/profile/${postOwner._id}`}>
                                        {postOwner.username}
                                    </a>
                                </p>
                            }
                        </div>
                        <div className="col-6 text-right">
                            {
                                currentPost && <p>{currentPost.createdDate}</p>
                            }

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            {
                                currentPost && currentPost.text && <p>{currentPost.text}</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Post;