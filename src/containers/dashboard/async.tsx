import * as React from "react";
import { Spinner } from "../../shared/components/spinner/index";
import { asyncComponent } from 'react-async-component';

export const AsyncDashboard = userAgent =>
    asyncComponent({
        resolve: () => new Promise(resolve =>
            // Webpack's code splitting API w/naming
            require.ensure(
                [],
                (require) => {

                    resolve(require("./dashboard.tsx").Dashboard);
                },
                'ChunkName'
            )
        ),

        defer: true,
        ssrMode: "defer",
        Loading: (prop) => <Spinner userAgent={userAgent} />
    })
