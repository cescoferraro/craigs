import { createAsyncComponent } from "react-async-component";
import * as React from "react";
import { Spinner } from "../../shared/components/spinner/index";
import { asyncComponent } from 'react-async-component';

export const AsyncHome = userAgent =>
    asyncComponent({
        resolve: () => new Promise(resolve =>
            // Webpack's code splitting API w/naming
            require.ensure(
                [],
                (require) => {

                    resolve(require("./home").HomeComponent);
                },
                'ChunkName'
            )
        ),

        defer: true,
        ssrMode: "defer",
        Loading: (prop) => <Spinner userAgent={userAgent} />
    })
