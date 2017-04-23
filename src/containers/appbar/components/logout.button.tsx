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
import { AppBarStyle } from "../css/style"
import { ModalComponent } from "./modal.component"
import { modal } from 'react-redux-modal'

export const SecureAcess = compose(
    StyleConnect(AppBarStyle)
)(({ relay }) => {
    return relay.firebase.get("auth") == null ?
        <FlatButton label="LOGIN" onClick={() => {
            modal.add(ModalComponent, {
                title: 'Welcome to Craigs!',
                size: 'medium',
                closeOnOutsideClick: true,
                hideTitleBar: false,
                hideCloseButton: false
            })
        }} />
        :
        <FlatButton label="LOOUT" onClick={relay.LOGOUT} />
});
