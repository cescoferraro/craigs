import { combineReducers } from "redux";
import { firebaseStateReducer } from "react-redux-firebase";
import { reducer as formReducer } from "redux-form";
import { reducer as toastrReducer } from "react-redux-toastr";

export const allReducers = combineReducers({
    firebase: firebaseStateReducer,
    toastr: toastrReducer,
    form: formReducer,
});
