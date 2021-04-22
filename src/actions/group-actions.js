import groupService from '../services/group-service';
import {CREATE_GROUP, FIND_ALL_GROUPS} from "./group-constants";

export const findAllGroups = (dispatch) => {
    groupService
        .findAllGroups()
        .then(results => dispatch({
        type: FIND_ALL_GROUPS,
        groups: results
    }))
}

export const createGroup = (dispatch, group) => {
    groupService.createGroup(group).then(results => dispatch({
        type: CREATE_GROUP,
        group: results
    }))
}

const api = {
    findAllGroups, createGroup
}

export default api;