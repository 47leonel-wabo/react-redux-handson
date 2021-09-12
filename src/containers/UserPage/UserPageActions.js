import {UserActionTypes} from "./constants";

export const setUser = (user) => ({
    type: UserActionTypes.SET_USER,
    payload: user
})
