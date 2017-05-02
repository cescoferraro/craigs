import * as React from 'react'
import { modal } from 'react-redux-modal' // The modal emitter
import { StyleConnect } from "../../../shared/components/StyleConnect"
import { compose } from "recompose"
import { connect } from "react-redux";
import { APP_ACTIONS } from "../../../store/actions";
import { Field, reduxForm } from 'redux-form'
import { SelectField, TextField } from "material-ui"
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton';




@reduxForm({ form: "add-form" })
export class AddsModalComponent extends React.Component<any, any>{

    componentWillUnmount() {
        this.props.removeModal()
    }

    render() {
        return (
            <form>
                <Field name="Title"
                    fullWidth={true}
                    component={TextField}
                    hintText="Title" />
                <Field name="Price"
                    type="number"
                    fullWidth={true}
                    component={TextField}
                    hintText="Price" />
                <Field name="Description"
                    fullWidth={true}
                    component={TextField}
                    hintText="Description" />
                <Field name="plan" component={SelectField} hintText="Select a plan">
                    <MenuItem value="monthly" primaryText="Monthly" />
                    <MenuItem value="yearly" primaryText="Yearly" />
                    <MenuItem value="lifetime" primaryText="Lifetime" />
                </Field>
                <br />
                <RaisedButton
                    primary={true}
                    fullWidth={true}
                    type="submit"
                    label="Submit" />
                <br />
                <br />
                <RaisedButton
                    fullWidth={true}
                    type="button"
                    onClick={this.props.reset} label="Clear" />
            </form>
        )
    }
}
