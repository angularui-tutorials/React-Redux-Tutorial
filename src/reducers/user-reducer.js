import {UPDATE_USER} from "../actions/user-actions";

function userReducer(initialState = ' ', action){
    switch (action.type) {
        case UPDATE_USER:
            return action.payload;
        default:
            return initialState;
    }
}

export default userReducer;
