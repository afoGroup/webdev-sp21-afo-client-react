import {CREATE_GROUP, DELETE_GROUP, FIND_ALL_GROUPS, UPDATE_GROUP} from "../actions/group-constants";

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
        case CREATE_GROUP:
            return{
                groups: [
                    ...state.groups,
                    action.group
                ]
            }
        case UPDATE_GROUP:
            return {
                groups: state.groups.map(g => {
                    if(g.id === action.group.id){return action.group}
                    else{return g}
                })
            }
        case DELETE_GROUP:
            return {
                groups: state.groups.filter(g => {
                    if(g.id === action.group.id){return false}
                    else{return true}
                })
            }
        default: return state
    }
}

export default groupReducer