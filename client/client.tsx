import { tag } from "../shared/utils";
import * as React from "react";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import { CraigsApp } from "../shared/app";
import { Renderer } from "./render";
import { unmountComponentAtNode } from "react-dom";
injectTapEventPlugin();




Renderer(CraigsApp({ userAgent: navigator.userAgent }));

if (module.hot) {
    module.hot.accept(
        [
            "../store/store.tsx",
            "../shared/app.tsx",
            "./render.tsx"
        ],
        () => {
            unmountComponentAtNode(tag);
            const NextEatApp = require("../shared/app.tsx").App;
            const NewRenderer = require("./render.tsx").Renderer;
            NewRenderer(NextEatApp({ userAgent: navigator.userAgent }));
        });
}
