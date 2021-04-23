const USER_URL = "https://anifansonly-java-server.herokuapp.com"

export const registerUser = (user) =>
    fetch(`${USER_URL}/api/register`, {
        method: "POST",
        body: JSON.stringify(user),
        credentials: "include",
        headers: {
            'content-type' : 'application/json'
        }
    })
        .then(response => response.json());

export const profile = () =>
    fetch(`${USER_URL}/api/profile`, {
        method: "POST",
        credentials: "include"
    })
        .then(response => response.json());

export const login = (user) =>
    fetch(`${USER_URL}/api/login`, {
        method: "POST",
        body: JSON.stringify(user),
        credentials: "include",
        headers: {
            'content-type' : 'application/json'
        }
    })
        .then(response => response.json());

export const logout = () =>
    fetch(`${USER_URL}/api/logout`, {
        method: "POST",
        credentials: "include"
    })
        .then(response => response.json());

export const findAllUsers = () =>
    fetch(`${USER_URL}/api/users`).then(response => response.json());


export const findUserById = (uid) =>
    fetch(`${USER_URL}/api/users/${uid}`).then(response => response.json());


const api = {
    registerUser, findAllUsers, findUserById, profile, logout, login
};

export default api;