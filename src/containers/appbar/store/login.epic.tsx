import "rxjs";
import { Observable } from "rxjs";
import { getFirebase } from "react-redux-firebase";
import { push } from "connected-react-router";
import { LOGIN_ACTION_NAME } from "./login.action"

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
                }).mapTo(push("/dashboard"))
        );
