import IconButton from "material-ui/IconButton";
import ArrowBack from "material-ui/svg-icons/action/exit-to-app";
import * as React from "react";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Toggle from 'material-ui/Toggle';
import FlatButton from 'material-ui/FlatButton';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { LoginPopover } from "./login.popover"


export const LogoutButton = ({ relay }) => {
    return relay.firebase.get("auth") == null ?

        <LoginPopover></LoginPopover>
        : <IconMenu
            iconButtonElement={<IconButton><MoreVertIcon /></IconButton>} >
            <MenuItem>sdfnjksdf</MenuItem>
        </IconMenu >
};
