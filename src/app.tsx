import * as React from "react";
import { createAsyncComponent } from "react-async-component";
import { Route, IndexRoute, Router, Switch, Link } from "react-router-dom";
import { AsyncHome } from "./containers/home/async";
import { AsyncAppBar } from "./containers/appbar/async";
import { AsyncToaster } from "./shared/components/Toaster/async";


export const CraigsApp = ({ userAgent }) => {
    return (
        <div>
            {/* This always render the AppBar*/}
            <Route component={AsyncAppBar(userAgent)} />
            <Route exact path="/" component={AsyncHome(userAgent)} />
            {/* This always render the react-roaster  */}
            <Route component={AsyncToaster(userAgent)} />
        </div>
    )
};
