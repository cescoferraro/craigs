import IconButton from "material-ui/IconButton";
import ArrowBack from "material-ui/svg-icons/action/exit-to-app";
import * as React from "react";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';
import { compose } from "recompose"
import { StyleConnect } from "../../../shared/components/StyleConnect";
import { ModalComponent } from "./modal.component"
import { modal } from 'react-redux-modal'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import RaisedButton from 'material-ui/RaisedButton';
import Refresh from 'material-ui/svg-icons/navigation/refresh';

import ContentAdd from 'material-ui/svg-icons/content/add';
export const AddAdd = compose(
)(({ customStyle }) => {
    return <FloatingActionButton
        className={customStyle}
        onClick={() => {
            modal.add(ModalComponent, {
                title: 'Add an add to Craigs!',
                size: 'medium',
                closeOnOutsideClick: true,
                hideTitleBar: false,
                hideCloseButton: false
            })
        }}>
        <ContentAdd />
    </FloatingActionButton >
});
