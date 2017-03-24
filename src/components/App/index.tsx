import * as React from "react";
import { createAsyncComponent } from "react-async-component";
import { Route, IndexRoute, Router, Switch, Link } from "react-router-dom";
import { AsyncHome } from "../../containers/home/async";
import { AsyncLogin } from "../../containers/login/async";
import { AsyncDashboard } from "../../containers/dashboard/async";
import { AsyncAppBar } from "../../containers/shell/async";
import { AsyncToaster } from "../Toaster/async";




export const CraigsApp = ({ userAgent }) => {
    return (
        <div>
            <Route exact path="/" component={() => <div>
                <h2>Here!</h2>

            </div>} />
        </div>
    )
};
