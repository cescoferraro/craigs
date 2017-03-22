import "rxjs";
import {Observable} from "rxjs";
import {getFirebase} from "react-redux-firebase";
import {push} from "connected-react-router";
import {SHOW_MODAL} from "./jobs.actions";
import {toastr} from "react-redux-toastr";

export const JOB_FORM_SUBMIT_ACTION_NAME = "JOB_FORM_SUBMIT";
export const JOB_FORM_SUBMIT =
    (jobstore: any, form: Job): Action <{id, form, kind}> => {
        return {
            type: JOB_FORM_SUBMIT_ACTION_NAME,
            payload: {
                id: jobstore.editing_job.id,
                form: form,
                kind: jobstore.form_mode
            }
        }
    };


export const jobsFormEpic = action$ => {
    return action$.ofType(JOB_FORM_SUBMIT_ACTION_NAME)
        .mergeMap(
            (action: Action<{id, form: Job, kind}>) => {

                return Observable.fromPromise(
                    getFirebase().database()
                        .ref('jobs/' + action.payload.id)
                        .set(action.payload.form)
                )
                    .catch(err => Observable.of(toastr.error('The error title',
                        'The error ' + err)))
                    .mapTo(toastr.success('The title', SuccessMsg(action)))
                    .mapTo(SHOW_MODAL(false))
            }
        )
};

const SuccessMsg = action => ('The job ' +
    action.payload.form.title +
    " from the client " +
    action.payload.form.company +
    " got " + action.payload.kind + "ed"
);

