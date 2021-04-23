import {CREATE_POST, DELETE_POST, FIND_ALL_POSTS, FIND_POSTS_FOR_GROUPS} from "../actions/post-constants";

const initialState = {
    posts: [{
        username: '',
        body: '',
        timestamp: '',
        group: ''
    }]
}

const postReducer = (state=initialState, action) => {
    switch(action.type){
        case (FIND_ALL_POSTS || FIND_POSTS_FOR_GROUPS):
            return{
                posts: action.posts
            }
        case CREATE_POST:
            return{
                posts: [
                    ...state.posts,
                    action.post
                ]
            }
        case DELETE_POST:
            return {
                posts: state.posts.filter(p => {
                    if(p.id === action.post.id){return false}
                    else{return true}
                })
            }
        default: return state
    }
}

export default postReducer