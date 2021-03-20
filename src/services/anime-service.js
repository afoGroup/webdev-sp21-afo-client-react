const ANIME_URL = "https://api.jikan.moe/v3"

const findAnimeByTitle = (title) => {
    return fetch(`${ANIME_URL}/title`).then(response => response.json())
}

export default{
    findAnimeByTitle
}