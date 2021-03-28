import animeService from "../services/anime-service";
import imageAnimeService from "../services/image-search-service"
import {FIND_ANIME_BY_GENRE, FIND_ANIME_BY_TITLE, FIND_ANIME_BY_ID} from "./action-constants";

export const findAnimeByTitle = (dispatch, title) => {
    animeService
        .findAnimeByTitle(title)
        .then(results => dispatch({
            type: FIND_ANIME_BY_TITLE,
            results: results,
            searchKey: title
        }))
};

export const findAnimeById = (dispatch, animeId) => {
    animeService
        .findAnimeByID(animeId)
        .then(results => dispatch({
            type: FIND_ANIME_BY_ID,
            results: results,
            searchKey: 'id'
        }))
};

export const findAnimeByGenre = (dispatch, genreId) => {
    animeService
        .findAnimeByGenre(genreId)
        .then(results => dispatch({
            type: FIND_ANIME_BY_GENRE,
            results: results,
            searchKey: 'id'
        }))
};

export const findAnimeByURL = (dispatch, imageURL) => {
    imageAnimeService
        .findImageByURL(imageURL)
        .then(data => {
            const animeName = data.docs[0].title_english;
            return animeService.findAnimeByTitle(animeName)
        })
        .then(results => dispatch({
            type: FIND_ANIME_BY_TITLE,
            results: results,
            searchKey: 'url'
        }))
        .catch(error => console.log(error))
};

const animeActions = {
    findAnimeByTitle, findAnimeByGenre, findAnimeByURL, findAnimeById
};

export default animeActions;
