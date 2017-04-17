import { allReducers } from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { reactReduxFirebase, firebaseStateReducer } from "react-redux-firebase";
import { createEpicMiddleware } from "redux-observable";
import { RootEpic } from "./epics";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { startup } from "./startup";
import { FIREBASE_CONFIG } from "../shared/utils";


const FirebaseStoreCreator = compose(reactReduxFirebase(FIREBASE_CONFIG))(createStore);
let ReplacebleEpicMiddleware = createEpicMiddleware(RootEpic);


export const clientStore = (history) => {
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    let store = FirebaseStoreCreator(
        connectRouter(history)(allReducers),
        startup,
        composeEnhancers(
            applyMiddleware(routerMiddleware(history),
                ReplacebleEpicMiddleware)
        ));
    if (module.hot) {
        module.hot.accept(['./reducers.tsx'], () => {
            const nextRootReducer = require('./reducers.tsx').allReducers;
            store.replaceReducer(nextRootReducer);
        });
        module.hot.accept(["./epics.tsx"], () => {
            const nextRootEpic = require('./epics.tsx').RootEpic;
            ReplacebleEpicMiddleware.replaceEpic(nextRootEpic);
        });
    }
    return store
};
