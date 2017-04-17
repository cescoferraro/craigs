
export const LOGIN_ACTION_NAME = "LOGIN";
export function LOGIN_ACTION(form): Action<any> {
    return {
        type: LOGIN_ACTION_NAME,
        payload: form
    }
}
