import {createSelector} from "reselect";

const userPageState = globalState => globalState.userPageReducer // as defined in the store

export const makeSelectUser = createSelector(userPageState, userPage => userPage.user)
