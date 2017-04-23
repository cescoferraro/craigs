import * as React from 'react'
import { modal } from 'react-redux-modal' // The modal emitter
import { ModalStyle } from "../css/style"
import { StyleConnect } from "../../../shared/components/StyleConnect"
import { compose } from "recompose"
import { Field, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui'

import RaisedButton from 'material-ui/RaisedButton';



export const LoginForm = compose(
    reduxForm({
        form: 'login',
    })
)(({ handleSubmit, customClass, pristine, submitting, reset }) => {
    return <form className={customClass} onSubmit={handleSubmit}>

        <Field
            name="email"
            fullWidth={true}
            type="email"
            component={TextField} hintText="Email" />
        <br />
        <Field
            fullWidth={true}
            name="password" type="password" component={TextField} hintText="Password" />
        <br />
        <RaisedButton
            primary={true}
            disabled={pristine || submitting}
            fullWidth={true}
            type="submit"
            label="Submit" />
        <br />
        <br />
        <RaisedButton
            fullWidth={true}
            type="button"
            onClick={reset} label="Clear" />
    </form>
})


export const ModalComponent = compose(
    StyleConnect(ModalStyle)
)(({ removeModal }) => (
    <div className={ModalStyle.modal}>
        <LoginForm
            customClass={ModalStyle.form}
            onSubmit={() => { console.log("dskfjnsd") }} />
    </div>
));
