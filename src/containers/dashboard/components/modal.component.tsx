import * as React from 'react'
import { modal } from 'react-redux-modal' // The modal emitter
import { StyleConnect } from "../../../shared/components/StyleConnect"
import { compose } from "recompose"

import { connect } from "react-redux";
import { APP_ACTIONS } from "../../../store/actions";
import { AddsForm } from "./adds.form";




export class ModalComponent extends React.Component<any, any>{

    componentWillUnmount() {
        this.props.removeModal()
    }

    render() {
        return (
            <div >
                <h2>JDFDJFFJ</h2>
                <AddsForm></AddsForm>
            </div>)
    }
}
