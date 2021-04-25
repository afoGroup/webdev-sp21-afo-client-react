import {WHAT_ANIME_URL} from "../constants/api-urls"

// Rate limit of 10 requests per minute
// Results are usually not accurate unless 90% similarity
const findImageByURL = (imageURL) => {
    return fetch(`${WHAT_ANIME_URL}?url=${imageURL}`)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return Promise.reject(response)
            }
        })
        .catch(error => console.log(error))
}

const api = {
    findImageByURL
}

export default api;