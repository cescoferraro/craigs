import {combineReducers} from "redux";
import {firebaseStateReducer} from "react-redux-firebase";

export const allReducers = combineReducers({
    firebase: firebaseStateReducer,
});

