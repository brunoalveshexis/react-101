import { REFRESH_USERS_LIST, UPDATE_SEARCH } from './actionTypes'

const initialState = {
    query: '',
    usersList: []
}

function usersReducer(state = initialState, { type, payload }) {
    switch (type) {
        case UPDATE_SEARCH:
            return {
                ...state,
                query: payload
            };

        case REFRESH_USERS_LIST:
            return {
                ...state,
                usersList: payload
            };

        default:
            return state;
    }
}


export default usersReducer;