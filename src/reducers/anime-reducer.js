import {FIND_ANIME_BY_GENRE, FIND_ANIME_BY_TITLE} from "../actions/anime-actions";

const initialState = {
    results: []
}

const animeReducer = (state=initialState, action) => {
    switch (action.type) {

        // find anime by search title
        case FIND_ANIME_BY_TITLE:
            return {
                results: action.results
            }
        // find anime by genre id
        case FIND_ANIME_BY_GENRE:
            return {
                results: action.results
            }
        // case FIND_ANIME_BY_URL:
        //     return {
        //         results: action.results
        //     }
        default:
            return state
    }
}
export default animeReducer