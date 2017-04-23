import { bindActionCreators } from "redux";
import { LOGOUT_ACTION } from "../containers/appbar/store/logout.epic";
import { LOGIN_ACTION } from "../containers/appbar/store/login.action";
import { SEARCH_ACTION } from "../containers/home/store/search.actions";
import { DISPLAY_SEARCH } from "../containers/home/store/adds.actions";
import { SEARCH_OWN_ADDS_BY_EMAIL_ACTION, SET_OWN_ADDS_ACTION } from "../containers/dashboard/store/own.adds.action";

export const APP_ACTIONS = (dispatch) => {
    return bindActionCreators({
        LOGIN: LOGIN_ACTION,
        LOGOUT: LOGOUT_ACTION,
        SEARCH: SEARCH_ACTION,
        OWN_ADDS: SEARCH_OWN_ADDS_BY_EMAIL_ACTION,
        SET_OWN_ADD: SET_OWN_ADDS_ACTION,
        DISPLAY_SEARCH: DISPLAY_SEARCH
    }, dispatch);
};
