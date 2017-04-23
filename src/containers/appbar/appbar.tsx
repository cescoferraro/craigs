import * as React from "react";
import MDAppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import Pizza from "material-ui/svg-icons/maps/local-pizza";
import { compose } from "recompose";
import { StyleConnect } from "../../shared/components/StyleConnect";
import { connect } from "react-redux";
import { APP_ACTIONS } from "../../store/actions";
import { SecureAcess } from "./components/logout.button";
import { AppBarStyle, ModalStyle } from "./css/style";


export const AppBar = compose(
    StyleConnect(AppBarStyle),
    StyleConnect(ModalStyle),
    connect(state => (
        {
            firebase: state.firebase,
            app: state.app
        }
    ), APP_ACTIONS)
)(({ location, LOGOUT, firebase }) => {
    return <MDAppBar
        title={<span >Craigs </span>}
        iconElementLeft={<IconButton><Pizza /></IconButton>}
        iconStyleRight={{
            alignItems: "center",
            display: "flex",
            marginTop: "0px"
        }}
        iconElementRight={<SecureAcess relay={{ firebase, LOGOUT }} />}
    />
});
