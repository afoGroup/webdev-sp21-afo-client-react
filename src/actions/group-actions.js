import groupService from '../services/group-service';
import {CREATE_GROUP, DELETE_GROUP, FIND_ALL_GROUPS, FIND_GROUP_BY_ID, UPDATE_GROUP} from "./group-constants";

export const findAllGroups = (dispatch) => {
    groupService
        .findAllGroups()
        .then(results => dispatch({
        type: FIND_ALL_GROUPS,
        groups: results
    }))
};

export const findGroupById = (dispatch, groupId) => {
    groupService
        .findGroupById(groupId)
        .then(results => dispatch({
        type: FIND_GROUP_BY_ID,
        group: results
    }))
};

export const createGroup = (dispatch, group) => {
    groupService
        .createGroup(group)
        .then(results => dispatch({
        type: CREATE_GROUP,
        group: results
    }))
};

export const updateGroup = (dispatch, groupId, group) => {
    groupService
        .updateGroup(groupId, group)
        .then(results => dispatch({
        type: UPDATE_GROUP,
        group: results
    }))
};

export const deleteGroup = (dispatch, groupId) => {
    groupService
        .deleteGroup(groupId)
        .then(results => dispatch({
        type: DELETE_GROUP,
        group: results
    }))
};

const api = {
    findAllGroups,
    findGroupById,
    createGroup,
    updateGroup,
    deleteGroup
}

export default api;