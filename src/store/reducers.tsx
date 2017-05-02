import { combineReducers } from "redux";
/* 3rd Party Reducers imports */
import { firebaseStateReducer } from "react-redux-firebase";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";
import { reducer as modalReducer } from 'react-redux-modal'
/* App's reducers imports*/
import { DisplaySearchReducer } from "../containers/home/store/adds.reducer"
import { OwnAddsReducer } from "../containers/dashboard/store/own.adds.reducer";


export const allReducers = combineReducers({
    /* 3rd Party Reducers */
    firebase: firebaseStateReducer,
    toastr: toastrReducer,
    modals: modalReducer,
    form: formReducer,
    /* App's Reducers */
    OwnAddsReducer: OwnAddsReducer,
    AddsReducer: DisplaySearchReducer
});
