import { combineReducers } from "redux";
import { firebaseStateReducer } from "react-redux-firebase";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

import { reducer as modalReducer } from 'react-redux-modal'

import { DisplaySearchReducer } from "../containers/home/store/adds.reducer"

import { OwnAddsReducer } from "../containers/dashboard/store/own.adds.reducer";


export const allReducers = combineReducers({
    firebase: firebaseStateReducer,
    toastr: toastrReducer,
    modals: modalReducer,
    form: formReducer,
    OwnAddsReducer: OwnAddsReducer,
    AddsReducer: DisplaySearchReducer
});
