import { bindActionCreators } from "redux";
import { LOGIN_ACTION } from "../containers/login/login.epic";
import { LOGOUT_ACTION } from "../containers/shell/logout.epic";

export const APP_ACTIONS = (dispatch) => {
    return bindActionCreators({
        LOGIN: LOGIN_ACTION,
        LOGOUT: LOGOUT_ACTION,
    }, dispatch);
};
