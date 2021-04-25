import {
    FIND_ALL_USERS, FIND_USER_BY_ID, LOGIN_USER, LOGOUT_USER, REGISTER_USER,
    LOGIN_STATE, USER_PROFILE, FIND_USER_BY_USERNAME, UPDATE_USER, DELETE_USER
} from "../actions/user-constants";

const initialState = {
    loginState: LOGIN_STATE.LOGGED_OUT,
    currentUser: {
        id: '',
        password: '',
        username: '',
        userType: '',
        email: '',
        bio: '',
        instagram: '',
        pictureUrl: '',
        twitter: '',
        clubs: []
    },
    searchedUserList: [],
    searchedUser: {}
};

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case (REGISTER_USER || LOGIN_USER):
            return {
                ...state,
                currentUser: action.user,
                loginState: LOGIN_STATE.LOGGED_IN
            };
        case LOGOUT_USER:
            return {
                ...state,
                currentUser: initialState.user,
                loginState: LOGIN_STATE.LOGGED_OUT
            };
        case DELETE_USER:
            return {
                ...state,
                currentUser: initialState.user,
                loginState: LOGIN_STATE.LOGGED_OUT
            };
        case UPDATE_USER:
            return {
                ...state,
                currentUser: action.user
            };
        case FIND_ALL_USERS:
            return {
                ...state,
                searchedUserList: action.userList
            };
        case FIND_USER_BY_ID:
            return {
                ...state,
                searchedUser: action.user
            };
        case FIND_USER_BY_USERNAME:
            return {
                ...state,
                searchedUser: action.user
            }
        default:
            return state
    }
};

export default userReducer