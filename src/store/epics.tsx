import { combineEpics } from "redux-observable";
import "rxjs";
import { searchEpic } from "../containers/home/store/search.epic"

const pingEpic = action$ =>
    action$.filter(action => action.type === 'PING')
        .mapTo({ type: 'PONG' });
export const RootEpic = combineEpics(
    searchEpic,
    pingEpic
);
