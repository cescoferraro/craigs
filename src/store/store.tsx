import { allReducers } from "./reducers";
import { createStore, applyMiddleware, compose } from "redux";
import { reactReduxFirebase, firebaseStateReducer } from "react-redux-firebase";
import { createEpicMiddleware } from "redux-observable";
import { RootEpic } from "./epics";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { startup } from "./startup";


let config = {
    apiKey: "AIzaSyCR1eRcu-FHxG6Yp1RarrBq1wKWWi8Ha2k",
    authDomain: "craigs-8e724.firebaseapp.com",
    databaseURL: "https://craigs-8e724.firebaseio.com",
    projectId: "craigs-8e724",
    storageBucket: "craigs-8e724.appspot.com",
    messagingSenderId: "794041684762"
};


const FirebaseStoreCreator = compose(
    reactReduxFirebase(config)
)(createStore);


let ReplacebleEpicMiddleware = createEpicMiddleware(RootEpic);


export const clientStore = (history) => {
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    let store = FirebaseStoreCreator(
        connectRouter(history)(allReducers),
        startup,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
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
