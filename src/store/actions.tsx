import { bindActionCreators } from "redux";
import { LOGOUT_ACTION } from "../containers/appbar/logout.epic";

export const APP_ACTIONS = (dispatch) => {
    return bindActionCreators({
        LOGOUT: LOGOUT_ACTION,
    }, dispatch);
};
