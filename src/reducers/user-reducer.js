import {FIND_ALL_USERS, FIND_USER_BY_ID, LOGIN_USER, LOGOUT_USER, REGISTER_USER} from "../actions/user-constants";

const initialState = {
    user: {
        // req fields
        password: '',
        username: '',
        usertype: '',

        // opt fields
        bio: '',
        email: '',
        instagram: '',
        pictureurl: '',
        twitter: ''
    }
}

const userReducer = (state=initialState, action) => {
    switch(action.type){

        case (REGISTER_USER || LOGIN_USER):
            return {
                user: action.user
            }
        case LOGOUT_USER:
            return {
                user: {
                    password: '',
                    username: '',
                    usertype: '',
                    bio: '',
                    email: '',
                    instagram: '',
                    pictureurl: '',
                    twitter: ''
                }
            }
        case FIND_ALL_USERS:
            // TODO?
        case FIND_USER_BY_ID:
            // TODO?
        default: return state
    }
}

export default userReducer