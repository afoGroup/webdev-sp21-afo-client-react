import animeService from "../services/anime-service";
import imageAnimeService from "../services/image-search-service"
import {FIND_ANIME_BY_GENRE, FIND_ANIME_BY_TITLE, FIND_ANIME_BY_ID} from "./action-constants";

export const findAnimeByTitle = (dispatch, title) => {
    animeService
        .findAnimeByTitle(title)
        .then(results => dispatch({
            type: FIND_ANIME_BY_TITLE,
            results: results,
            searchKey: title,
            pages: makePageLists(results)
        }))
};

export const findAnimeById = (dispatch, animeId) => {
    animeService
        .findAnimeByID(animeId)
        .then(results => dispatch({
            type: FIND_ANIME_BY_ID,
            results: results,
            searchKey: 'id',
            pages: makePageLists(results)
        }))
};

export const findAnimeByGenre = (dispatch, genreId) => {
    animeService
        .findAnimeByGenre(genreId)
        .then(results => dispatch({
            type: FIND_ANIME_BY_GENRE,
            results: results,
            searchKey: 'id',
            pages: makePageLists(results)
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
            searchKey: 'url',
            pages: makePageLists(results)
        }))
        .catch(error => console.log(error))
};

const animeActions = {
    findAnimeByTitle, findAnimeByGenre, findAnimeByURL, findAnimeById
};

export default animeActions;

const makePageLists = (results) => {
    let newSearchPages = [];

    let numResults = results.length;
    let remainder = numResults % 10;
    let numPages = Math.floor( numResults / 10);
    if(!(remainder === 0)){
        numPages = numPages + 1;
    }
    for(let p = 1; p < numPages+1; p++){
        let tempPageList = [];
        let first = 0;
        let last = 0;
        if(p === numPages && !(remainder === 0)){
            first = (p*10)-10;
            last = first + (remainder+1);
        } else{
            last = p*10;
            first = last-10;
        }
        tempPageList = results.slice(first, last);
        newSearchPages.push(tempPageList);
    }
    return newSearchPages;

};