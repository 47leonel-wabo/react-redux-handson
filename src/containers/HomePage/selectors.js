import {createSelector} from 'reselect'

const homePageState = (globalState) => globalState.homePageReducer // as defined in the store

export const makeSelectUsers = createSelector(homePageState, homePage => homePage.users)
