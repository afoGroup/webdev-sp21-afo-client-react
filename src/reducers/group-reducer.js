import {
    CREATE_GROUP,
    DELETE_GROUP,
    FIND_ALL_GROUPS,
    FIND_GROUP_BY_ID,
    FIND_GROUP_BY_TITLE,
    UPDATE_GROUP
} from "../actions/group-constants";

const initialState = {
    currentGroup: {
        _id: '',
        title: '',
        description: '',
        animeId: '',
        pictureUrl: '',
        owner: '',
        posts: []
    },
    searchedGroupList: [],
    searchedGroup: {}
};

const groupReducer = (state=initialState, action) => {
    switch(action.type){
        case (CREATE_GROUP || UPDATE_GROUP):
            return {
                ...state,
                currentGroup: action.group
            };
        case DELETE_GROUP:
            return {
                ...state,
                currentGroup: initialState.currentGroup
            };
        case FIND_ALL_GROUPS:
            return {
                ...state,
                searchedGroupList: action.groupsList
            };
        case FIND_GROUP_BY_ID:
            return {
                ...state,
                searchedGroup: action.group
            };
        case FIND_GROUP_BY_TITLE:
            return {
                ...state,
                searchedGroupList: action.group
            };
        default: return state
    }
}

export default groupReducer