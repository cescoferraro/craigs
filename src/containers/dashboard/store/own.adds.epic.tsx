import "rxjs";
import { Observable } from "rxjs";
import { getFirebase } from "react-redux-firebase";
import { push } from "connected-react-router";
import { SEARCH_OWN_ADDS_BY_EMAIL_ACTION_NAME, SET_OWN_ADDS_ACTION } from "./own.adds.action";
import * as _ from "lodash"

export const OwnAddsEpic = action$ =>
    action$
        .ofType(SEARCH_OWN_ADDS_BY_EMAIL_ACTION_NAME)
        .mergeMap(action => {
            return Observable.fromPromise(
                getFirebase().database().ref("adds").once("value")
            ).catch(() => {
                return Observable.empty()
            }).map((all: any) =>
                _.pickBy(all.val(), state => state.author === action.payload)
                ).filter((value: any) => {
                    console.log(value)
                    return value
                })
                .map(
                payload => SET_OWN_ADDS_ACTION(payload)
                )
        });
