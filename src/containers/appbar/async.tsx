import { createAsyncComponent } from "react-async-component";
import * as React from "react";
import { Spinner } from "../../components/spinner/index";

export const AsyncAppBar = userAgent => createAsyncComponent({
    resolve: () => new Promise(resolve =>
        require.ensure([], (require) => {
            resolve(require("./appbar.tsx").AppBar);
        }, "appbar")),
    defer: true,
    ssrMode: "defer",
    Loading: (prop) => <Spinner userAgent={userAgent} />
});
