import groupService from '../services/group-service';
import {FIND_ALL_GROUPS} from "./group-constants";

export const findAllClubs = (dispatch) => {
    groupService
        .findAllClubs()
        .then(results => dispatch({
        type: FIND_ALL_GROUPS,
            groups: results
    }))
}

const api = {
    findAllClubs
}

export default api;