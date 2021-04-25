import userService from '../services/user-service';
import {
    REGISTER_USER,
    FIND_ALL_USERS,
    FIND_USER_BY_ID,
    LOGIN_USER,
    LOGOUT_USER,
    USER_PROFILE,
    FIND_USER_BY_USERNAME, UPDATE_USER, DELETE_USER
} from "./user-constants";

const ERROR = -1;
const SUCCESS = 0;

export const registerUser = (dispatch, user) => {
    return userService.findAllUsers()
        .then(actualUsers => {
            let flag = SUCCESS;
            actualUsers.forEach(actualUser => {
                if (actualUser.username === user.username) {flag = ERROR}
            });
            if (flag !== ERROR) {
                userService.registerUser(user)
                    .then(response => dispatch({
                        type: REGISTER_USER,
                        user: response
                    }))
            }
            return flag;
        })
};

export const loginUser = (dispatch, user) => {
    return userService.login(user)
        .then(response => {
            dispatch({
                type: LOGIN_USER,
                user: response
            });
            console.log('current user:' + response.username);
    }).catch(error => {
        console.log(error)
    })
};

export const logoutUser = (dispatch) => {
    userService.logout()
        .then(() => dispatch({
            type: LOGOUT_USER
        }))
};

export const findAllUsers = (dispatch) => {
    userService.findAllUsers()
        .then(results => dispatch({
                type: FIND_ALL_USERS,
                userList: results
            })
        )
};

export const findUserById = (dispatch, userId) => {
    userService.findUserById(userId)
        .then(result => dispatch({
            type: FIND_USER_BY_ID,
            user: result
        }))
};

export const findUserByUsername = (dispatch, username) => {
    userService.findUserByUsername(username)
        .then(result => dispatch({
            type: FIND_USER_BY_USERNAME,
            user: result
        }))
};

export const updateUser = (dispatch, userId, user) => {
    userService.updateUser(userId, user)
        .then(result => dispatch({
            type: UPDATE_USER,
            user: result
        }))
};

export const getUserProfile = (dispatch) => {
    userService.profile()
        .then(result => {
            dispatch({
                type: USER_PROFILE,
                user: result
            });
            console.log('current profile: ' + result.username);
        }).catch(error => {
            console.log(error)
        })
};

export const deleteUser = (dispatch, userId) => {
    userService.logout()
        .then(logoutRes => {
            console.log(logoutRes);
            return userService.deleteUser(userId)
        })
        .then(userDeleted => dispatch({
            type: DELETE_USER
        }))

};

const api = {
    registerUser,
    findUserById,
    findUserByUsername,
    findAllUsers,
    updateUser,
    deleteUser,
    loginUser,
    logoutUser,
    getUserProfile
};

export default api;