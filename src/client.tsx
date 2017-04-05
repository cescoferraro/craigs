import { tag } from "./shared";
import * as React from "react";
import * as injectTapEventPlugin from "react-tap-event-plugin";
import { CraigsApp } from "./app";
import { Renderer } from "./shared/render";
import { unmountComponentAtNode } from "react-dom";
injectTapEventPlugin();




Renderer(CraigsApp({ userAgent: navigator.userAgent }));

if (module.hot) {
    module.hot.accept(
        [
            "./store/store.tsx",
            "./components/App/index.tsx",
            "./shared/render.tsx"
        ],
        () => {
            unmountComponentAtNode(tag);
            const NextEatApp = require("./components/App/index.tsx").App;
            const NewRenderer = require("./shared/render.tsx").Renderer;
            NewRenderer(NextEatApp({ userAgent: navigator.userAgent }));
        });
}
