import { bindActionCreators } from "redux";
import { LOGOUT_ACTION } from "../containers/appbar/logout.epic";
import { SEARCH_ACTION } from "../containers/home/store/search.actions";
import { DISPLAY_SEARCH } from "../containers/home/store/adds.actions";

export const APP_ACTIONS = (dispatch) => {
    return bindActionCreators({
        LOGOUT: LOGOUT_ACTION,
        SEARCH: SEARCH_ACTION,
        DISPLAY_SEARCH: DISPLAY_SEARCH
    }, dispatch);
};
