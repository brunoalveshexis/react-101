import { REFRESH_USERS_LIST, UPDATE_SEARCH } from "./actionTypes";
import usersApi from "../../utils/api-service/users"

export const usersRefresh = (usersList) => ({
    type: REFRESH_USERS_LIST,
    payload: usersList
});

export const updateQuery = (query) => ({
    type: UPDATE_SEARCH,
    payload: query
})


export function usersFetch() {
    return async (dispatch, getState) => {
        const { query } = getState();

        const usersList = await usersApi.search(query);

        dispatch(usersRefresh(usersList));
    };
}

