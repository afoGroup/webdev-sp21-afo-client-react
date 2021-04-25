import {ANIFANSONLY_URL} from "../constants/api-urls";
import {DELETE, HEADER, INCLUDE, POST, PUT} from "./services-constants";

export const findAllGroups = () =>
    fetch(`${ANIFANSONLY_URL}/api/clubs`).then(response => response.json());

export const createGroup = (group) =>
    fetch(`${ANIFANSONLY_URL}/api/clubs/create`, {
        method: POST,
        body: JSON.stringify(group),
        credentials: INCLUDE,
        headers: HEADER
    }).then(response => response.json());

export const updateGroup = (groupId, group) =>
    fetch(`${ANIFANSONLY_URL}/api/clubs/${groupId}/update`, {
        method: PUT,
        body: JSON.stringify(group),
        credentials: INCLUDE,
        headers: HEADER
    }).then(response => response.json());

export const deleteGroup = (groupId) =>
    fetch(`${ANIFANSONLY_URL}/api/clubs/${groupId}/remove`, {
        method: DELETE,
        credentials: INCLUDE
    }).then(response => response.json());

export const findGroupById = (groupId) =>
   fetch(`${ANIFANSONLY_URL}/api/clubs/${groupId}`)
        .then(response => response.json());

export const findGroupByTitle = (groupTitle) =>
    fetch(`${ANIFANSONLY_URL}/api/search/clubs/${groupTitle}`)
        .then(response => response.json());

const api = {
    findAllGroups,
    createGroup,
    findGroupById,
    findGroupByTitle,
    updateGroup,
    deleteGroup
};

export default api;