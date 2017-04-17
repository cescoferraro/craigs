import IconButton from "material-ui/IconButton";
import ArrowBack from "material-ui/svg-icons/action/exit-to-app";
import * as React from "react";

export const LogoutButton = ({ relay }) => {
    return relay.firebase.get("auth") != null ?
        <IconButton onClick={relay.logout}>
            <ArrowBack />
        </IconButton> :
        <IconButton onClick={relay.logout}>
            <ArrowBack />
        </IconButton>
};
