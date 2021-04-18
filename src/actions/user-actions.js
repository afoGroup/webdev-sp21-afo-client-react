import userService from '../services/user-service';
import {REGISTER_USER, FIND_ALL_USERS, FIND_USER_BY_ID} from "./user-constants";

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
    registerUser, findUserById, findAllUsers
}

export default api;