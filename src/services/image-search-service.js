import {WHAT_ANIME_URL} from "../constants/api-urls"

// Rate limit of 10 requests per minute
// Results are usually not accurate unless 90% similarity
const findImageByURL = (imageURL) => {
    return fetch(`${WHAT_ANIME_URL}/?url=${imageURL}`)
        .then(response => response.json)
        .catch(error => console.log(error))
//    Probably need to catch not successful requests
    // After getting results from this we need to be able to have a list of (mal_id)s
}

const api = {
    findImageByURL
}

export default api;