import * as React from "react";
import { AsyncComponentProvider, createAsyncContext } from 'react-async-component'
import asyncBootstrapper from 'react-async-bootstrapper'
import * as serialize from 'serialize-javascript'
import { renderToString } from 'react-dom/server'
import MyApp from "./shared/components/MyApp"



export default () => (request, response) => {
    const asyncContext = createAsyncContext()
    const app = (
        <AsyncComponentProvider asyncContext={asyncContext}>
            <MyApp />
        </AsyncComponentProvider>
    )

    asyncBootstrapper(app).then(() => {
        const appString = renderToString(app)
        const asyncState = asyncContext.getState()

        const html = `
        <html>
          <head>
            <title>Example</title>
          </head>
          <body>
            <div id="app">${appString}</div>
            <script type="text/javascript">
              // Serialise the state into the HTML response 👇
              window.ASYNC_COMPONENTS_STATE = ${serialize(asyncState)}
            </script>
          </body>
        </html>
`

        response.send(html)
    })
};
