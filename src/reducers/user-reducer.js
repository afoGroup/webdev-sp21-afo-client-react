import {FIND_ALL_USERS, FIND_USER_BY_ID, REGISTER_USER} from "../actions/user-constants";

const initialState = {
    user: {}
}

const userReducer = (state=initialState, action) => {
    switch(action.type){

        case REGISTER_USER:
            return {
                user: action.user
            }
        case FIND_ALL_USERS:
            // TODO?
        case FIND_USER_BY_ID:
            // TODO?
        default: return state
    }
}

export default userReducer