const GROUP_URL = "https://anifansonly-java-server.herokuapp.com"

export const findAllGroups = () =>
    fetch(`${GROUP_URL}/api/groups`).then(response => response.json())

export const createGroup = (group) =>
    fetch(`${GROUP_URL}/api/groups/create`, {
        method: "POST",
        body: JSON.stringify(group),
        credentials: "include",
        headers: {
            'content-type' : 'application/json'
        }
    }).then(response => response.json())

const api = {
    findAllGroups, createGroup
}

export default api;