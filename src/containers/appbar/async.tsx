import * as React from "react";
import { Spinner } from "../../shared/components/spinner/index";
import { asyncComponent } from 'react-async-component';



export const AsyncAppBar = userAgent => asyncComponent({
    resolve: () => new Promise(resolve =>
        // Webpack's code splitting API w/naming
        require.ensure(
            [],
            (require) => {
                resolve(require("./appbar.tsx").AppBar);
            },
            'ChunkName'
        )
    ),

    defer: true,
    ssrMode: "defer",
    Loading: (prop) => <Spinner userAgent={userAgent} />
})
