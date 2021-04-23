const POST_URL = "https://anifansonly-java-server.herokuapp.com";

export const findAllPosts = () =>
    fetch(`${POST_URL}/api/posts`).then(response => response.json());

export const findPostById = (postId) =>
    fetch(`${POST_URL}/api/posts/${postId}`).then(response => response.json());

export const findPostsForGroups = (groupId) =>
    fetch(`${POST_URL}/api/groups/${groupId}/posts`).then(response => response.json());

export const createPost = (groupId, post) =>
    fetch(`${POST_URL}/api/groups/${groupId}/posts`, {
        method: "POST",
        body: JSON.stringify(post),
        credentials: "include",
        headers: {
            'content-type' : 'application/json'
        }
    }).then(response => response.json());

export const deletePost = (postId) =>
    fetch(`${POST_URL}/api/posts/${postId}`, {
        method: "DELETE"
    }).then(response => response.json());

const api = {
    findAllPosts, findPostById, findPostsForGroups, createPost, deletePost
}

export default api;