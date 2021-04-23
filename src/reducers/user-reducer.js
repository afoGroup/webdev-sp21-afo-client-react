import {FIND_ALL_USERS, FIND_USER_BY_ID, LOGIN_USER, LOGOUT_USER, REGISTER_USER, LOGIN_STATE} from "../actions/user-constants";

const initialState = {
    loginState: '',
    user: {
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
    }
};

const userReducer = (state=initialState, action) => {
    switch(action.type){
        case (REGISTER_USER || LOGIN_USER):
            return {
                user: action.user,
                loginState: LOGIN_STATE.LOGGED_IN
            };
        case LOGOUT_USER:
            return {
                user: {},
                loginState: LOGIN_STATE.LOGGED_OUT
            };
        default:
            return state
    }
};

export default userReducer