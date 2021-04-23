import React, {useState} from "react";
import {connect} from 'react-redux';
import postActions from '../../actions/post-actions';
import AfoNavbar from "../navbar/afo-navbar";
import Post from "./afo-post";
import '../../styles/afo-group.css';

const Group = () => {

    const [postBoxStatus, setPostBoxStatus] = useState(false);
    const [postText, setPostText] = useState("");

    //test group
    const currentGroup = {
        title: 'The Best Naruto Group on AFO!',
        image_url: 'https://variety.com/wp-content/uploads/2015/07/naruto_movie-lionsgate.jpg?w=681%26h=383%26crop=1',
        ownerName: 'Kris',
        ownerId: '123',
        animeName: 'Naruto: Shippuuden',
        animeId: '1735',
        bio: 'Naruto is the best anime ever! If you agree, join this group to connect with other like-minded, ' +
            'awesome individuals! If you do not agree... you are missing out!',
        postList: [
            {
                id: '123p1',
                username: 'tiff',
                userId: '987',
                date: '4/20/2021',
                text: 'I think Naruto is better than Naruto Shippuuden! I said what I said.'
            },
            {
                id: '123p2',
                username: 'tom',
                userId: '654',
                date: '4/21/2021',
                text: 'Checkout this awesome link on the Shippuuden relationships: ' +
                    'https://screenrant.com/naruto-anime-every-romance-relationship-ranked-how-long-they-lasted/'
            },
            {
                id: '123p3',
                username: 'kris',
                userId: '321',
                date: '4/22/2021',
                text: 'There is going to be a virtual Shippuuden marathon next week! If anyone wants in, message me.'
            }
        ]
    };

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
                                                        src={currentGroup.image_url}
                                                        className="group-img mb-4"
                                                        alt={`Group, ${currentGroup.title}`}/>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <h4 className="group-title-box py-2"><strong>{currentGroup.title}</strong></h4>
                                                    <p className="group-title float-right">
                                                        <strong>{`Group Owner: `}</strong>
                                                        <a className="afo-purple" href={`/profile/${currentGroup.ownerId}`}>
                                                            {currentGroup.ownerName}
                                                        </a>
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <p><strong>Group Anime: </strong>
                                                        <a className="afo-purple" href={`/anime/${currentGroup.animeId}`}>
                                                            {currentGroup.animeName}
                                                        </a>
                                                    </p>
                                                    <p>{currentGroup.bio}</p>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-12">
                                                    <button type="button"
                                                            className="btn group-btn"
                                                            onClick={() => joinGroup()}>
                                                        <strong className="afo-white">JOIN</strong>
                                                    </button>
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
                                                currentGroup.postList.length > 0 &&
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
})

const dispatchToPropertiesManager = (dispatch) => ({
    findAllPosts: () => postActions.findAllPosts(dispatch),
    findPostById: (pid) => postActions.findPostById(dispatch, pid),
    findPostsForGroups: (gid) => postActions.findPostsForGroups(dispatch, gid),
    createPost: (post) => postActions.createPost(dispatch, post),
    deletePost: (pid) => postActions.deletePost(dispatch, pid)
})

export default connect(stateToPropertiesManager, dispatchToPropertiesManager)(Group);