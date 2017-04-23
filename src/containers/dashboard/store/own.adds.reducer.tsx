
import { SET_OWN_ADDS_ACTION_NAME } from "./own.adds.action";

export const OwnAddsReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_OWN_ADDS_ACTION_NAME:
            return action.payload
        default:
            return state
    }
}
