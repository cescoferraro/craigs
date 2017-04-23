import { combineEpics } from "redux-observable";
import "rxjs";
import { searchEpic } from "../containers/home/store/search.epic"
import { loginEpic } from "../containers/appbar/store/login.epic"
import { logoutEpic } from "../containers/appbar/store/logout.epic"

const pingEpic = action$ =>
    action$.filter(action => action.type === 'PING')
        .mapTo({ type: 'PONG' });
export const RootEpic = combineEpics(
    searchEpic,
    loginEpic,
    logoutEpic,
    pingEpic
);
