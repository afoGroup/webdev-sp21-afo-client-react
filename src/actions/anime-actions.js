import animeService from "../services/anime-service";

export const FIND_ANIME_BY_TITLE = "FIND_ANIME_BY_TITLE";

export const findAnimeByTitle = (dispatch, title) => {
    animeService
        .findAnimeByTitle(title)
        .then(results => dispatch({
            type: FIND_ANIME_BY_TITLE,
            results
        }))
}

const animeActions = {
    findAnimeByTitle
}

export default animeActions;
