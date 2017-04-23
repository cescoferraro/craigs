
export const SEARCH_OWN_ADDS_BY_EMAIL_ACTION_NAME = "OWD_ADDS";
export function SEARCH_OWN_ADDS_BY_EMAIL_ACTION(email: string): Action<any> {
    return {
        type: SEARCH_OWN_ADDS_BY_EMAIL_ACTION_NAME,
        payload: email
    }
}

export const SET_OWN_ADDS_ACTION_NAME = "SET_OWN_ADDS";

export function SET_OWN_ADDS_ACTION(obj: any): Action<any> {
    console.log(obj)
    return {
        type: SET_OWN_ADDS_ACTION_NAME,
        payload: obj
    }
}
