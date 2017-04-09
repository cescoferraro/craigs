import { tag } from "./shared/utils";
import * as React from "react";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import { TideApp } from "./app";
import { Renderer } from "./renderer";
import { unmountComponentAtNode } from "react-dom";
injectTapEventPlugin();

Renderer(TideApp({ userAgent: navigator.userAgent }));

if (module.hot) {
    module.hot.accept(
        [
            "./store/store.tsx",
            "./app.tsx",
            "./renderer.tsx"
        ],
        () => {
            unmountComponentAtNode(tag);
            const NextEatApp = require("./app.tsx").TideApp;
            const NewRenderer = require("./renderer.tsx").Renderer;
            NewRenderer(NextEatApp({ userAgent: navigator.userAgent }));
        });
}
