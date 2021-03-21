import {FIND_ANIME_BY_TITLE} from "../actions/anime-actions";

const initialState = {
    results: []
}

const animeReducer = (state=initialState, action) => {
    switch (action.type) {

        // find anime by search title
        case FIND_ANIME_BY_TITLE:
            return {
                ...state,
                results: action.results
            }
        default:
            return state
    }
}
export default animeReducer