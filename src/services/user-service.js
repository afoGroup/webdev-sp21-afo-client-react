import {ANIFANSONLY_URL} from "../constants/api-urls";

export const registerUser = (user) =>
    fetch(`${ANIFANSONLY_URL}/api/users/create`, {
        method: "POST",
        body: JSON.stringify(user),
        credentials: "include",
        headers: {
            'content-type' : 'application/json'
        }
    }).then(response => response.json());

// export const profile = () =>
//     fetch(`${ANIFANSONLY_URL}/api/profile`, {
//         method: "POST",
//         credentials: "include"
//     }).then(response => response.json());

export const login = (user) =>
    fetch(`${ANIFANSONLY_URL}/api/login`, {
        method: "POST",
        body: JSON.stringify(user),
        credentials: "include",
        headers: {
            'content-type' : 'application/json'
        }
    }).then(response => response.json());

export const logout = () =>
    fetch(`${ANIFANSONLY_URL}/api/logout`, {
        method: "POST",
        credentials: "include"
    });

export const findAllUsers = () =>
    fetch(`${ANIFANSONLY_URL}/api/users`)
        .then(response => response.json());


export const findUserById = (uid) =>
    fetch(`${ANIFANSONLY_URL}/api/users/${uid}`)
        .then(response => response.json());

const api = {
    registerUser,
    findAllUsers,
    findUserById,
    logout,
    login
};

export default api;