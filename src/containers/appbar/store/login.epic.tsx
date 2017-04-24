import "rxjs";
import { Observable } from "rxjs";
import { getFirebase } from "react-redux-firebase";
import { push } from "connected-react-router";
import { LOGIN_ACTION_NAME } from "./login.action"
import { SEARCH_OWN_ADDS_BY_EMAIL_ACTION } from "../../dashboard/store/own.adds.action";

export const loginEpic = action$ =>
    action$
        .ofType(LOGIN_ACTION_NAME)
        .mergeMap(action =>
            Observable.fromPromise(
                getFirebase().auth()
                    .signInWithEmailAndPassword(
                    action.payload.email, action.payload.password)
            )
                .catch(() => {
                    return Observable.empty()
                }).flatMap(data => ([
                    push("/dashboard/adds")])))
