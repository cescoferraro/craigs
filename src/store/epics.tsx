import { combineEpics } from "redux-observable";
import "rxjs";
import { searchEpic } from "../containers/home/store/search.epic"
import { loginEpic } from "../containers/appbar/store/login.epic"
import { logoutEpic } from "../containers/appbar/store/logout.epic"
import { OwnAddsEpic } from "../containers/dashboard/store/own.adds.epic"


const pingEpic = action$ =>
    action$.filter(action => action.type === 'PING')
        .mapTo({ type: 'PONG' });
export const RootEpic = combineEpics(
    searchEpic,
    OwnAddsEpic,
    loginEpic,
    logoutEpic,
    pingEpic
);
