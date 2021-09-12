import {combineReducers, createStore} from "redux";
import homePageReducer from "./containers/HomePage/homePageReducer";
import userPageReducer from "./containers/UserPage/UserPageReducer";

const reducers = combineReducers({
    homePageReducer,
    userPageReducer
})
export default createStore(reducers)
