import * as React from "react";
import { connect } from "react-redux"
import { APP_ACTIONS } from "../../store/actions";

import { pathToJS } from 'react-redux-firebase'
import {
    firebaseConnect,
    isLoaded,
    isEmpty,
    dataToJS
} from 'react-redux-firebase'

@firebaseConnect([])
@connect(({ firebase, OwnAddsReducer }) => ({
    authError: pathToJS(firebase, 'authError'),
    auth: pathToJS(firebase, 'auth'),
    profile: pathToJS(firebase, 'profile'),
    user: pathToJS(firebase, 'User'),
    OwnAddsReducer: OwnAddsReducer
}), APP_ACTIONS)
export class Dashboard extends React.Component<any, any>{
    constructor(props) {
        super(props)
    }

    render() {
        return !isLoaded(this.props.auth)
            ? <h2>Loading</h2>
            :
            <div>
                {this.props.auth === null ? null :
                    () => {
                        this.props.OWN_ADDS(this.props.firebase.auth().currentUser.email)
                    }}
                <h2
                    onClick={() => {
                        console.log(this.props.OwnAddsReducer)
                        this.props.OWN_ADDS(this.props.firebase.auth().currentUser.email)
                    }} >

                    Get my Adds</h2>
                {Object.keys(this.props.OwnAddsReducer).map(
                    each =>
                        <h2 key={Math.random()}>{each}</h2>

                )}
            </div>
    }
}
