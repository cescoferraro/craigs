import { tag } from "./shared";
import * as React from "react";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import { TideApp } from "./app";
import { Renderer } from "./shared/render";
import { unmountComponentAtNode } from "react-dom";
injectTapEventPlugin();


Renderer(TideApp({ userAgent: navigator.userAgent }));

if (module.hot) {
    module.hot.accept(
        [
            "./store/store.tsx",
            "./app.tsx",
            "./shared/render.tsx"
        ],
        () => {
            unmountComponentAtNode(tag);
            const NextEatApp = require("./app.tsx").App;
            const NewRenderer = require("./shared/render.tsx").Renderer;
            NewRenderer(NextEatApp({ userAgent: navigator.userAgent }));
        });
}
