import * as React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { connect } from "react-redux";
import { isLoaded, isEmpty, firebaseConnect, dataToJS } from "react-redux-firebase";
import { compose } from "recompose";
import { FirebaseLoader } from "./components/makesure"

const css = require('./css/home.pcss');


export const HomeComponent = compose(
    withStyles(css),
    firebaseConnect([
        { path: '/app' }, // object notation
        { path: '/adds' } // object notation
    ]),
    connect(
        ({ firebase }) => ({
            // Connect todos prop to firebase todos
            app: dataToJS(firebase, '/app'),
            adds: dataToJS(firebase, '/adds'),
        })
    )
)(({ app, adds }) => {
    return <FirebaseLoader adds={adds} />
});
