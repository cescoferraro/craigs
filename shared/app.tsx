import * as React from "react";
import { Route } from "react-router-dom";
import { HomeContainer } from "./containers/home/home";

export const CraigsApp = ({ userAgent }) => {
    return (
        <div>
            <Route exact path="/" component={HomeContainer} />
        </div>
    )
};
