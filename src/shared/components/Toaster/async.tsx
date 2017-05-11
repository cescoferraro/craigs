import * as React from "react";
import { Spinner } from "../spinner/index";
import { asyncComponent } from 'react-async-component';

export const AsyncToaster = userAgent =>
    asyncComponent({
        resolve: () => new Promise(resolve =>
            // Webpack's code splitting API w/naming
            require.ensure(
                [],
                (require) => {

                    resolve(require("./toaster.tsx").Toaster);
                },
                'ChunkName'
            )
        ),

        defer: true,
        ssrMode: "defer",
        Loading: (prop) => <Spinner userAgent={userAgent} />
    })
