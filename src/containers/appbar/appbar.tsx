import * as React from "react";
import MDAppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import Pizza from "material-ui/svg-icons/maps/local-pizza";
import ArrowBack from "material-ui/svg-icons/action/exit-to-app";
import { compose } from "recompose";
import { StyleConnect } from "../../shared/components/StyleConnect";
import { connect } from "react-redux";
import { APP_ACTIONS } from "../../store/actions";
import { LogoutButton } from "./components/logout.button";
import { AppBarStyle } from "./css/style";


export const AppBar = compose(
    StyleConnect(AppBarStyle),
    connect(state => (
        {
            firebase: state.firebase,
            app: state.app
        }
    ), APP_ACTIONS)
)(({ location, LOGOUT, firebase }) => {
    return <MDAppBar
        className={AppBarStyle.shell}
        title={<span >Craigs </span>}
        iconElementLeft={<IconButton><Pizza /></IconButton>}
        iconElementRight={<LogoutButton relay={{ firebase, LOGOUT }} />}
    />
});
