import animeService from "../services/anime-service";

export const FIND_ANIME_BY_TITLE = "FIND_ANIME_BY_TITLE";
export const FIND_ANIME_BY_GENRE = "FIND_ANIME_BY_GENRE";

export const findAnimeByTitle = (dispatch, title) => {
    animeService
        .findAnimeByTitle(title)
        .then(results => dispatch({
            type: FIND_ANIME_BY_TITLE,
            results: results
        }))
}

export const findAnimeByGenre = (dispatch, genreId) => {
    animeService
        .findAnimeByGenre(genreId)
        .then(results => dispatch({
            type: FIND_ANIME_BY_GENRE,
            results: results
        }))
}

const animeActions = {
    findAnimeByTitle, findAnimeByGenre
}

export default animeActions;
