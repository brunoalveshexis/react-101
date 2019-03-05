import usersReducer from "./reducer";
import { usersRefresh } from "./action";

export default {
    usersReducer: usersReducer,
    actions: usersRefresh,
};