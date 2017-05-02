import { tag } from "./shared/utils";
import * as React from "react";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import { CraigsApp } from "./app";
import { Renderer } from "./renderer";
import { unmountComponentAtNode } from "react-dom";
injectTapEventPlugin();


Renderer(CraigsApp({ userAgent: navigator.userAgent }));

if (module.hot) {
    module.hot.accept(
        [
            "./store/store.tsx",
            "./app.tsx",
            "./renderer.tsx"
        ],
        () => {
            unmountComponentAtNode(tag);
            const NextCraigsApp = require("./app.tsx").CraigsApp;
            const NewRenderer = require("./renderer.tsx").Renderer;
            NewRenderer(NextCraigsApp({ userAgent: navigator.userAgent }));
        });
}
