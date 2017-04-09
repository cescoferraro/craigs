import * as React from "react";
import { createAsyncComponent } from "react-async-component";
import { Route, IndexRoute, Router, Switch, Link } from "react-router-dom";
import { AsyncHome } from "./containers/home/async";
import { AsyncAppBar } from "./containers/shell/async";
import { AsyncToaster } from "./components/Toaster/async";



export const TideApp = ({ userAgent }) => {
    return (

        <div>
            <Route exact path="/" component={AsyncHome(userAgent)} />
            <Route component={AsyncAppBar(userAgent)} />
            {/* This always render the react-roaster  */}
            <Route component={AsyncToaster(userAgent)} />
        </div>
    )
};
