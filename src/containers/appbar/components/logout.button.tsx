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
import { ModalButton } from "./modal.button"
import { StyleConnect } from "../../../shared/components/StyleConnect";
import { AppBarStyle } from "../css/style"

export const SecureAcess = compose(
    StyleConnect(AppBarStyle)
)(({ relay }) => {
    return relay.firebase.get("auth") == null ?
        <ModalButton />
        :
        <FlatButton label="LOOUT" />
});
