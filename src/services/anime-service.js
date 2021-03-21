const ANIME_URL = "https://api.jikan.moe/v3"

// tested with postman for users:
// 1. Nekomata1037
// 2. taffy0066
// Note. These are usernames for MyAnimeList
const findAllAnimeForUser = (user) => {
    return fetch(`${ANIME_URL}/user/${user}/animelist/all`)
        .then(response => response.json())
}

const findWatchedAnimeForUser = (user) => {
    return fetch(`${ANIME_URL}/user/${user}/animelist/watching`)
        .then(response => response.json())
}

const findCompletedAnimeForUser = (user) => {
    return fetch(`${ANIME_URL}/user/${user}/animelist/completed`)
        .then(response => response.json())
}

// fetch request for single MyAnimeList Objects
const findAnimeByID = (id) => {
    return fetch(`${ANIME_URL}/anime/${id}`)
        .then(response => response.json())
}

// fetch request for anime by tile
const findAnimeByTitle = (title) => {
    return fetch(`${ANIME_URL}/search/anime?q=${title}`)
        .then(response => response.json())
}

// fetch request for anime by genre
const findAnimeByGenre = (genreId) => {
    return fetch(`${ANIME_URL}/search/anime?q=&genre=${genreId}`)
        .then(response => response.json())
}

const api = {
    //search operation by user
    findAllAnimeForUser,
    findWatchedAnimeForUser,
    findCompletedAnimeForUser,
    //search operation by anime
    findAnimeByID,
    findAnimeByTitle,
    findAnimeByGenre
}

export default api;