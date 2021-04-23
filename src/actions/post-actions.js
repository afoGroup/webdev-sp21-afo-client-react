import postService from '../services/post-service';
import {CREATE_POST, DELETE_POST, FIND_ALL_POSTS, FIND_POST_BY_ID, FIND_POSTS_FOR_GROUPS} from "./post-constants";

export const findAllPosts = (dispatch) => {
    postService
        .findAllPosts()
        .then(results => dispatch({
        type: FIND_ALL_POSTS,
        posts: results
    }))
}

export const findPostById = (dispatch, postId) => {
    postService
        .findPostById(postId)
        .then(results => dispatch({
        type: FIND_POST_BY_ID,
        post: results
    }))
}

export const findPostsForGroups = (dispatch, groupId) => {
    postService
        .findPostsForGroups(groupId)
        .then(results => dispatch({
        type: FIND_POSTS_FOR_GROUPS,
        posts: results
    }))
}

export const createPost = (dispatch, post) => {
    postService
        .createPost(post)
        .then(results => dispatch({
        type: CREATE_POST,
        post: results
    }))
}

export const deletePost = (dispatch, postId) => {
    postService
        .deletePost(postId)
        .then(results => dispatch({
        type: DELETE_POST,
        posts: results
    }))
}


const api = {
    findAllPosts, findPostById, findPostsForGroups, createPost, deletePost
}

export default api;