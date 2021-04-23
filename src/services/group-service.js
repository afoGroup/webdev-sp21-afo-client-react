const GROUP_URL = "https://anifansonly-java-server.herokuapp.com";

export const findAllGroups = () =>
    fetch(`${GROUP_URL}/api/groups`).then(response => response.json());

export const createGroup = (group) =>
    fetch(`${GROUP_URL}/api/groups/create`, {
        method: "POST",
        body: JSON.stringify(group),
        credentials: "include",
        headers: {
            'content-type' : 'application/json'
        }
    }).then(response => response.json());

export const updateGroup = (groupId, group) =>
    fetch(`${GROUP_URL}/api/groups/${groupId}`, {
        method: "PUT",
        body: JSON.stringify(group),
        credentials: "include",
        headers: {
            'content-type' : 'application/json'
        }
    }).then(response => response.json());

export const deleteGroup = (groupId) =>
    fetch(`${GROUP_URL}/api/groups/${groupId}`, {
        method: "DELETE"
    }).then(response => response.json());

export const findGroupById = (groupId) => {
    fetch(`${GROUP_URL}/api/groups/${groupId}`).then(response => response.json());
};

const api = {
    findAllGroups,
    createGroup,
    findGroupById,
    updateGroup,
    deleteGroup
};

export default api;