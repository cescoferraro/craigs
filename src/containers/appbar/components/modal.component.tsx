import * as React from 'react'
import { modal } from 'react-redux-modal' // The modal emitter
import { ModalStyle } from "../css/style"
import { StyleConnect } from "../../../shared/components/StyleConnect"
import { compose } from "recompose"

import { connect } from "react-redux";
import { APP_ACTIONS } from "../../../store/actions";
import { LoginForm } from "./modal.form"




@StyleConnect(ModalStyle)
@connect(state => (
    {
        app: state.app
    }
), APP_ACTIONS)
export class ModalComponent extends React.Component<any, any>{

    componentWillUnmount() {
        this.props.removeModal()
    }

    render() {
        return (
            <div className={ModalStyle.modal}>

                <LoginForm
                    customClass={ModalStyle.form}
                    onSubmit={this.props.LOGIN} />
            </div>)
    }
}
