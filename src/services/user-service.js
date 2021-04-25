import {ANIFANSONLY_URL} from "../constants/api-urls";
import {DELETE, HEADER, INCLUDE, POST, PUT, GET} from "./services-constants";

export const registerUser = (user) =>
    fetch(`${ANIFANSONLY_URL}/api/register`, {
        method: POST,
        body: JSON.stringify(user),
        credentials: INCLUDE,
        headers: HEADER
    }).then(response => response.json());

export const getCurrentUser = () =>
     fetch(`${ANIFANSONLY_URL}/api/users/current`, {
         credentials: INCLUDE,
         headers: HEADER
     }).then(response => {
         let actual = response.json();
         console.log("(getCurrentUser) response: " + actual);
         return actual;
     });

export const login = (user) =>
    fetch(`${ANIFANSONLY_URL}/api/login`, {
        method: POST,
        body: JSON.stringify(user),
        credentials: INCLUDE,
        headers: HEADER
    }).then(response => response.json());

export const logout = () =>
    fetch(`${ANIFANSONLY_URL}/api/logout`, {
        method: POST,
        credentials: INCLUDE
    });

export const findAllUsers = () =>
    fetch(`${ANIFANSONLY_URL}/api/users`)
        .then(response => response.json());


export const findUserById = (uid) =>
    fetch(`${ANIFANSONLY_URL}/api/users/${uid}`)
        .then(response => response.json());

export const findUserByUsername = (username) =>
    fetch(`${ANIFANSONLY_URL}/search/users/${username}`)
        .then(response => response.json());


export const updateUser = (uid, user) =>
    fetch (`${ANIFANSONLY_URL}/api/users/${uid}/update`, {
        method: PUT,
        body: JSON.stringify(user),
        credentials: INCLUDE,
        headers: HEADER,
    }).then(response => response.json());

export const deleteUser = (uid) =>
    fetch(`${ANIFANSONLY_URL}/api/users/${uid}/remove`, {
        method: DELETE
    }).then(response => response.json());


const api = {
    registerUser,
    findAllUsers,
    findUserById,
    findUserByUsername,
    updateUser,
    deleteUser,
    logout,
    login,
    getCurrentUser
};

export default api;