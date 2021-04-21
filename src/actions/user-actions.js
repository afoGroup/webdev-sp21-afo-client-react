import userService from '../services/user-service';
import {REGISTER_USER, FIND_ALL_USERS, FIND_USER_BY_ID, LOGIN_USER, LOGOUT_USER} from "./user-constants";

export const registerUser = (dispatch, user) => {
    userService
        .findAllUsers()
        .then(actualUsers => {
        if(actualUsers.some(item => item.username === user.username)){
            alert("Username has already been taken.")
        }
        else{
            userService.registerUser(user).then(response => dispatch({
                type: REGISTER_USER,
                user: response
            }))
        }
    })
};

export const loginUser = (dispatch, user) => {
    userService.login(user).then(response => dispatch ({
        type: LOGIN_USER,
        user: response
    })).catch(error => {
        alert("Username/Password combination does not exist")
        console.log(error)
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