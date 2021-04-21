import {FIND_ALL_GROUPS} from "../actions/group-constants";

const initialState = {
    groups: [{
        name: '',
        bio: '',
        animeId: '',
        users: ''
    }]
}


const groupReducer = (state=initialState, action) => {
    switch(action.type){
        case FIND_ALL_GROUPS:
            return{
                groups: action.groups
            }
        default: return state
    }
}

export default groupReducer