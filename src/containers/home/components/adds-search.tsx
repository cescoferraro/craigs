import * as React from "react";
import * as lodash from "lodash";
import { List, ListItem } from 'material-ui/List';
import { reduxForm, Field } from 'redux-form'
import { TextField } from 'redux-form-material-ui'
import { compose } from "recompose"
import { connect } from "react-redux"


export const SearchInput = compose(
    reduxForm({ form: 'search' }),
)(({ handleSubmit, search, form }) => {
    return (
        <div>
            <Field
                name="search"
                component={TextField}
                onChange={(evt) => {
                    console.log(evt)
                    search(evt.target.value)
                }}
                hintText="Search" />

        </div>)
});
