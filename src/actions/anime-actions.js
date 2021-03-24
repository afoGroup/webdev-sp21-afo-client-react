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
        .findAnimeByURL(imageURL)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        })
        .then(data => {
            const animeIds = []
            data.docs.forEach(animeResult => animeIds.push(animeResult.mal_id))
            return animeIds
        })
        .then(animeIds => {
            animeIds.forEach(animeIds => fetch())
        })
        // Lazy approach
        // Alternatively I can use the title of the 1st result and retrieve by title

        // .then(results => dispatch({
        //     type: FIND_ANIME_BY_TITLE,
        //     results: results
        // }))
}

const animeActions = {
    findAnimeByTitle, findAnimeByGenre, findAnimeByURL
}

export default animeActions;
