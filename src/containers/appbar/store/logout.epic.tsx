import "rxjs";
import { Observable } from "rxjs";
import { getFirebase } from "react-redux-firebase";
import { push } from "connected-react-router";

export const LOGOUT_ACTION_NAME = "LOGOUT";
export function LOGOUT_ACTION(): Action<any> {
    return {
        type: LOGOUT_ACTION_NAME,
        payload: null
    }
}


export const logoutEpic = action$ =>
    action$
        .ofType(LOGOUT_ACTION_NAME)
        .mergeMap(action => {
            console.log("sdfjknsdfk")
            return Observable.fromPromise(
                getFirebase().auth().signOut()
            ).catch(() => {
                return Observable.empty()
            }).mapTo(push("/"))
        });
