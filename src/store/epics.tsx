import { combineEpics } from "redux-observable";
import "rxjs";
import { loginEpic } from "../containers/login/login.epic";
import { logoutEpic } from "../containers/shell/logout.epic";


export const RootEpic = combineEpics(
    loginEpic,
    logoutEpic,
);
