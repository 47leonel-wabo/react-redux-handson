import {UserActionTypes} from "./constants";

const userInitialState = {
    user: null
}

export default function userPageReducer(state = userInitialState, action) {
    switch (action.type) {
        case UserActionTypes.SET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}
