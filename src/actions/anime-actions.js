import animeService from "../services/anime-service";
import imageAnimeService from "../services/image-search-service"

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

export const findAnimeByURL = (dispatch, imageURL) => {
    imageAnimeService
        .findImageByURL(imageURL)
        .then(data => {
            const animeName = data.docs[0].title_english
            return animeService.findAnimeByTitle(animeName)
        })
        .then(results => dispatch({
            type: FIND_ANIME_BY_TITLE,
            results: results
        }))
        .catch(error => console.log(error))
}

const animeActions = {
    findAnimeByTitle, findAnimeByGenre, findAnimeByURL
}

export default animeActions;
