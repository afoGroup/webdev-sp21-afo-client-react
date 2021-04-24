import userService from '../services/user-service';
import {REGISTER_USER, FIND_ALL_USERS, FIND_USER_BY_ID, LOGIN_USER, LOGOUT_USER, USER_PROFILE} from "./user-constants";

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

const api = {
    registerUser,
    findUserById,
    findAllUsers,
    loginUser,
    logoutUser,
    getUserProfile
};

export default api;