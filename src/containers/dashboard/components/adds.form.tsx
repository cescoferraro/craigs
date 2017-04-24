import * as React from "react";
import { compose } from "recompose"
import { Field, reduxForm } from 'redux-form'
import { TextField } from "material-ui"

import RaisedButton from 'material-ui/RaisedButton';
export const AddsForm = compose(
    reduxForm({ form: "add-form" })
)(({ reset }) => {
    return <form>
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
            onClick={reset} label="Clear" />
    </form>
}
    )
