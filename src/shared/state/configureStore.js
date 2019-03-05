import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import users from './users';

export default (initialState) => {
    const reducers = combineReducers(users.usersReducer);
    const composeEnhancers = composeWithDevTools({
        // Specify name here, actionsBlacklist, actionsCreators and other options if needed
    });

    return createStore(
        users.usersReducer,
        composeEnhancers(
            applyMiddleware(thunk)
        )
    );
}
