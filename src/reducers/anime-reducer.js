import {FIND_ANIME_BY_GENRE, FIND_ANIME_BY_TITLE, FIND_ANIME_BY_ID} from "../actions/action-constants";

const initialState = {
    results: [],
    user: {},
    searchKey: ''
};

const animeReducer = (state=initialState, action) => {
    switch (action.type) {

        // find anime by search title
        case FIND_ANIME_BY_TITLE:
            return {
                results: action.results,
                searchKey: action.searchKey
            };
        // find anime by genre id
        case FIND_ANIME_BY_GENRE:
            return {
                results: action.results,
                searchKey: action.searchKey
            };
        case FIND_ANIME_BY_ID:
            return {
                results: action.results,
                searchKey: action.searchKey
            };
        default:
            return state
    }
};
export default animeReducer