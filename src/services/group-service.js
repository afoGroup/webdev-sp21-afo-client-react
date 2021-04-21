const GROUP_URL = "https://anifansonly-java-server.herokuapp.com"

export const findAllClubs = () =>
    fetch(`${GROUP_URL}/api/boards`).then(response => response.json())

const api = {
    findAllClubs
}

export default api;