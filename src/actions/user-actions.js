import userService from '../services/user-service';
import {REGISTER_USER, FIND_ALL_USERS, FIND_USER_BY_ID, LOGIN_USER, LOGOUT_USER} from "./user-constants";

export const registerUser = (dispatch, user) => {
    // retrieve all users
    userService
        .findAllUsers()
        .then(actualUsers => {
            let flag = 0
            // of the actual users, iterate through each and check if the username has not been taken.
            actualUsers.forEach(actualUser => {
                if(actualUser.username === user.username){
                    // if taken, mark it as such.
                    flag = -1
                }
            })
            // if the username has not been taken, register the new user
            if(flag !== -1){
                dispatch({
                    type: REGISTER_USER,
                    user: user
                })
            }
            else{
                alert("Username has already been taken.")
            }
        })
};

export const loginUser = (dispatch, user) => {
    // retrieve all users
    userService
        .findAllUsers()
        .then(actualUsers => {
            let flag = -1
            // of the actual users, iterate through each and check if the user exists.
            actualUsers.forEach(actualUser => {
                if(actualUser.username === user.username && actualUser.password === user.password){
                    // user has been found
                    flag = 0
                }
            })
            // if the user exists, then we should allow the login operation
            if(flag !== -1){
                dispatch({
                    type: LOGIN_USER,
                    user: user
                })
            }
            else{
                alert("Username/Password combination does not exist.")
            }
        })
}

export const logoutUser = (dispatch) => {
    userService
        .logout()
        .then(() => dispatch({
            type: LOGOUT_USER})
        )
}

export const findAllUsers = (dispatch) => {
    userService
        .findAllUsers()
        .then(results => dispatch({
                type: FIND_ALL_USERS,
                user: results})
        )
};

export const findUserById = (dispatch, uid) => {
    userService
        .findUserById(uid)
        .then(results => dispatch({
            type: FIND_USER_BY_ID,
            user: results})
        )
};

const api = {
    registerUser, findUserById, findAllUsers, loginUser, logoutUser
}

export default api;