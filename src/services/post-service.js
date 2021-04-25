import {ANIFANSONLY_URL} from "../constants/api-urls";

export const findAllPosts = () =>
    fetch(`${ANIFANSONLY_URL}/api/posts`).then(response => response.json());

export const findPostById = (postId) =>
    fetch(`${ANIFANSONLY_URL}/api/posts/${postId}`).then(response => response.json());

export const createPost = (groupId, post) =>
    fetch(`${ANIFANSONLY_URL}/api/clubs/${groupId}/posts/create`, {
        method: "POST",
        body: JSON.stringify(post),
        credentials: "include",
        headers: {
            'content-type' : 'application/json'
        }
    }).then(response => response.json());

export const deletePost = (postId) =>
    fetch(`${ANIFANSONLY_URL}/api/posts/${postId}/remove`, {
        method: "DELETE"
    }).then(response => response.json());

const api = {
    findAllPosts, findPostById, createPost, deletePost
}

export default api;