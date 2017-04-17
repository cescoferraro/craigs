import * as React from "react";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import { connect } from "react-redux";
import { isLoaded, isEmpty, firebaseConnect, dataToJS } from "react-redux-firebase";
import { compose } from "recompose";
import { APP_ACTIONS } from "../../store/actions"
const css = require('./css/home.pcss');

import { AddsList } from "./components/adds-list";
import { SearchInput } from "./components/adds-search";

@withStyles(css)
@connect(state => ({ AddsReducer: state.AddsReducer }), APP_ACTIONS)
export class HomeComponent extends React.Component<any, any>{

    constructor(props) {
        super(props)
        this.props.SEARCH("")
    }
    render() {
        console.log(this.props.AddsReducer)
        console.log(this.props.SEARCH)
        return <div>
            <SearchInput search={this.props.SEARCH} />
            <AddsList searchAdds={this.props.AddsReducer} />
        </div>

    }

}
